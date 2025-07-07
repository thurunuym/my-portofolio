import React, { useState, useEffect, useRef } from "react";

export default function HelicopterGame() {
  const gameHeight = 160; // px
  const gravity = 0.5;
  const lift = -8;
  const gameSpeed = 20; // ms
  const [position, setPosition] = useState(30);
  const [velocity, setVelocity] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const gameInterval = useRef(null);

  // Game Loop
  useEffect(() => {
    if (isGameOver) return;

    gameInterval.current = setInterval(() => {
      setVelocity((v) => v + gravity);
      setPosition((p) => {
        const newPos = p + velocity;

        // Collision Detection
        if (newPos <= 0 || newPos >= gameHeight - 20) {
          clearInterval(gameInterval.current);
          setIsGameOver(true);
          return p;
        }

        return newPos;
      });
    }, gameSpeed);

    return () => clearInterval(gameInterval.current);
  }, [velocity, isGameOver]);

  // Click to lift
  const handleClick = () => {
    if (isGameOver) return;
    setVelocity(lift);
  };

  // Reset the game
  const resetGame = () => {
    setPosition(30);
    setVelocity(0);
    setIsGameOver(false);
  };

  return (
    <div
      className="w-2/3 border-2 border-gradient-to-r from-green-300 to-blue-500 rounded-md overflow-hidden cursor-pointer"
      style={{ height: `${gameHeight}px` }}
      onClick={handleClick}
    >
      {/* Game area */}
      <div className="relative w-full h-full bg-black">
        {/* Helicopter */}
        <div
          className="absolute left-10 w-10 h-10 bg-gradient-to-r from-green-300 to-blue-500 rounded-full shadow"
          style={{ top: `${position}px` }}
        ></div>

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
