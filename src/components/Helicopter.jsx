import React, { useState, useEffect, useRef } from "react";

export default function HelicopterGame() {
  const gameHeight = 350; // px
  const gravity = 0.5;
  const lift = -8;
  const gameSpeed = 20; // ms
  const obstacleSpeed = 2;
  const obstacleWidth = 20;

  const [position, setPosition] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  const [countdown, setCountdown] = useState(3);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timer, setTimer] = useState(0);

  const velocityRef = useRef(0);
  const gameInterval = useRef(null);
  const obstacleInterval = useRef(null);
  const timerInterval = useRef(null);

  // Countdown before starting the game
  useEffect(() => {
    if (countdown <= 0) {
      setIsGameStarted(true);
      return;
    }

    const countdownTimer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(countdownTimer);
  }, [countdown]);

  // Game Loop
  useEffect(() => {
    if (isGameOver || !isGameStarted) return;

    gameInterval.current = setInterval(() => {
      velocityRef.current += gravity;

      setPosition((p) => {
        const newPos = p + velocityRef.current;

        // Collision with ground or ceiling
        if (newPos <= 0 || newPos >= gameHeight - 20) {
          clearInterval(gameInterval.current);
          clearInterval(obstacleInterval.current);
          clearInterval(timerInterval.current);
          setIsGameOver(true);
          return p;
        }

        return newPos;
      });

      // Move obstacles
      setObstacles((obs) =>
        obs
          .map((o) => ({ ...o, x: o.x - obstacleSpeed }))
          .filter((o) => o.x + obstacleWidth > 0)
      );
    }, gameSpeed);

    // Start obstacle generation
    obstacleInterval.current = setInterval(() => {
      const randomHeight = Math.floor(Math.random() * (gameHeight - 100)) + 20;
      setObstacles((obs) => [...obs, { x: 600, height: randomHeight }]);
    }, 2000);

    // Start timer
    timerInterval.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(gameInterval.current);
      clearInterval(obstacleInterval.current);
      clearInterval(timerInterval.current);
    };
  }, [isGameOver, isGameStarted]);

  // Check for collision with obstacles
  useEffect(() => {
    obstacles.forEach((obstacle) => {
      if (
        obstacle.x < 60 && // Helicopter X position + width
        obstacle.x + obstacleWidth > 40 && // Helicopter X position
        (position < obstacle.height || position + 20 > obstacle.height + 100) // Helicopter Y position and gap
      ) {
        clearInterval(gameInterval.current);
        clearInterval(obstacleInterval.current);
        clearInterval(timerInterval.current);
        setIsGameOver(true);
      }
    });
  }, [obstacles, position]);

  // Click to lift
  const handleClick = () => {
    if (isGameOver || !isGameStarted) return;
    velocityRef.current = lift;
  };

  // Reset the game
  const resetGame = () => {
    setPosition(30);
    velocityRef.current = 0;
    setObstacles([]);
    setIsGameOver(false);
    setCountdown(3);
    setIsGameStarted(false);
    setTimer(0);
  };

  return (
    <div
      className="w-2/3 border-2 border-gradient-to-r from-green-300 to-blue-500 rounded-md overflow-hidden cursor-pointer relative"
      style={{ height: `${gameHeight}px` }}
      onClick={handleClick}
    >
      {/* Timer */}
      {isGameStarted && !isGameOver && (
        <div className="absolute top-2 right-4 text-white font-bold text-lg z-10">
          Time: {timer}s
        </div>
      )}

      {/* Countdown */}
      {!isGameStarted && !isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white font-bold text-5xl z-10">
          {countdown}
        </div>
      )}

      {/* Game area */}
      <div className="relative w-full h-full bg-black">
        {/* Helicopter */}
        <div
          className="absolute left-10 w-10 h-10 bg-gradient-to-r from-green-300 to-blue-500 rounded-full shadow transition-transform duration-100"
          style={{ top: `${position}px` }}
        ></div>

        {/* Obstacles */}
        {obstacles.map((obstacle, index) => (
          <React.Fragment key={index}>
            {/* Top obstacle */}
            <div
              className="absolute bg-red-500"
              style={{
                width: `${obstacleWidth}px`,
                height: `${obstacle.height}px`,
                left: `${obstacle.x}px`,
                top: `0px`,
              }}
            ></div>
            {/* Bottom obstacle */}
            <div
              className="absolute bg-red-500"
              style={{
                width: `${obstacleWidth}px`,
                height: `${gameHeight - obstacle.height }px`,
                left: `${obstacle.x}px`,
                top: `${obstacle.height + 150}px`,
              }}
            ></div>
          </React.Fragment>
        ))}

        {/* Game Over */}
        {isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white font-bold text-lg">
            Game Over
            <button
              onClick={resetGame}
              className="ml-4 px-3 py-1 bg-white text-black rounded hover:scale-105 transition"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
