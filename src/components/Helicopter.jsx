import React, { useState, useEffect, useRef } from "react";
import GameSection from "./GameSection";

export default function HelicopterGame() {
  const gameHeight = 350; // px
  const gravity = 0.3;     // Easier gravity
  const lift = -6;         // Easier lift
  const gameSpeed = 20;    // ms
  const obstacleSpeed = 2;
  const obstacleWidth = 20;
  const obstacleGap = 180; // ⬅️ Increased gap

  const [position, setPosition] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  const [countdown, setCountdown] = useState(3);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isClosed, setIsClosed] = useState(false);

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
          stopGame();
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

    // Start obstacle generation (less frequent)
    obstacleInterval.current = setInterval(() => {
      const randomHeight = Math.floor(Math.random() * (gameHeight - obstacleGap - 50)) + 20;
      setObstacles((obs) => [...obs, { x: 600, height: randomHeight }]);
    }, 2500);

    // Start timer
    timerInterval.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);

    return () => stopGame();
  }, [isGameOver, isGameStarted]);

  // Check for collisions
  useEffect(() => {
    obstacles.forEach((obstacle) => {
      if (
        obstacle.x < 60 &&
        obstacle.x + obstacleWidth > 40 &&
        (position < obstacle.height || position + 20 > obstacle.height + obstacleGap)
      ) {
        stopGame();
      }
    });
  }, [obstacles, position]);

  const stopGame = () => {
    clearInterval(gameInterval.current);
    clearInterval(obstacleInterval.current);
    clearInterval(timerInterval.current);
    setIsGameOver(true);
  };

  const handleClick = () => {
    if (isGameOver || !isGameStarted) return;
    velocityRef.current = lift;
  };

  const resetGame = () => {
    setPosition(30);
    velocityRef.current = 0;
    setObstacles([]);
    setIsGameOver(false);
    setCountdown(3);
    setIsGameStarted(false);
    setTimer(0);
    setIsClosed(false);
  };

  const handleClose = () => {
    resetGame();
    setIsClosed(true); // Optional if you want a fade-out effect or delay
    if (onClose) onClose(); // ✅ Notify parent to hide the game
  };

  if (isClosed) return null;

  return (
    <div
      className="w-2/3 border-2 border-gradient-to-r from-green-300 to-blue-500 mx-auto rounded-md overflow-hidden cursor-pointer relative"
      style={{ height: `${gameHeight}px` }}
      onClick={handleClick}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClose(); // ✅ Close the game and notify parent
        }}
        className="absolute top-2 left-2 text-white text-xl z-20 bg-black hover:bg-red-700 px-2 rounded"
      >
        ✕
      </button>

      {/* Timer */}
      {isGameStarted && !isGameOver && (
        <div className="absolute top-2 right-4 text-white font-bold text-lg z-10">
          Time: {timer}s
        </div>
      )}

      {/* Countdown */}
      {!isGameStarted && !isGameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white z-10 space-y-4">
    {/* Instruction */}
    <span className="text-lg md:text-md font-semibold">
      Click the left mouse button constantly to keep the ball in the air
    </span>

    {/* Countdown */}
    <span className="text-5xl font-bold">
      {countdown}
    </span>
  </div>)}

      {/* Game Area */}
      <div className="relative w-full h-full bg-black">
        {/* Helicopter */}
        <div
          className="absolute left-10 w-10 h-10 bg-gradient-to-r from-green-300 to-blue-500 rounded-full shadow transition-transform duration-100"
          style={{ top: `${position}px` }}
        ></div>

        {/* Obstacles */}
        {obstacles.map((obstacle, index) => (
          <React.Fragment key={index}>
            {/* Top */}
            <div
              className="absolute bg-red-500"
              style={{
                width: `${obstacleWidth}px`,
                height: `${obstacle.height}px`,
                left: `${obstacle.x}px`,
                top: `0px`,
              }}
            ></div>
            {/* Bottom */}
            <div
              className="absolute bg-red-500"
              style={{
                width: `${obstacleWidth}px`,
                height: `${gameHeight - (obstacle.height + obstacleGap)}px`,
                left: `${obstacle.x}px`,
                top: `${obstacle.height + obstacleGap}px`,
              }}
            ></div>
          </React.Fragment>
        ))}

        {/* Game Over Message */}
        {isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white font-bold text-lg space-y-4">
            <span>Game Over</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetGame();
              }}
              className="px-4 py-2 bg-white text-black rounded hover:scale-105 transition"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
