import React, { useState } from "react";
import { motion } from "motion/react";
import HelicopterGame from "./Helicopter";

export default function GameSection() {
  const [isGameVisible, setIsGameVisible] = useState(false);

  const handleCloseGame = () => {
    setIsGameVisible(false); // Show the Play button again
  };

  return (
    <motion.div
    
              
              initial={{ opacity: 0, y: 40 }}          // hidden before entering
              whileInView={{ opacity: 1, y: 0 }}       // animate when in view
              viewport={{ once: true, amount: 0 }}   // trigger once, 30% visible
              transition={{ duration: 1, delay: 0.5 }}>
    <div className="w-full flex flex-col items-center my-10 md:block hidden">
      {!isGameVisible ? (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-white text-xl font-bold">Tired of Scrolling?</h2>
          <button
            onClick={() => setIsGameVisible(true)}
            className="bg-gradient-to-r from-green-300 to-blue-500 text-black font-semibold py-2 px-4 rounded-lg shadow hover:scale-105 transition-transform duration-300"
          >
            Play a Game
          </button>
        </div>
        
      ) : (
        <HelicopterGame onClose={handleCloseGame} />
      )}
    </div></motion.div>
  );
}
