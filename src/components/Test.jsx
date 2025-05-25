import React from "react";
import logo from "../assets/Logo.webp"; // Make sure this image exists

const totalCubes = 64;
const columns = 8;

const Test = () => {
  const cubes = Array.from({ length: totalCubes }, (_, i) => {
    const x = i % columns;
    const y = Math.floor(i / columns);
    const delay = (x + y + 1) * 0.1;

    return (
      <div
        key={i}
        className="cube"
        style={{
          left: `${x * 42}px`,
          top: `${y * 42}px`,
          animationDelay: `${delay}s`,
        }}
      >
        {["front", "back", "right", "left", "top", "bottom"].map((face) => (
          <div className={face} key={face}>
            <img src={logo} alt="logo" />
          </div>
        ))}
      </div>
    );
  });

  return (
    <div className="container">
      {cubes}
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          height: 100%;
          background: #262626;
          overflow: hidden;
        }

        .container {
          width: 350px;
          height: 350px;
          position: relative;
          perspective: 1000px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .cube {
          width: 40px;
          height: 40px;
          position: absolute;
          transform-style: preserve-3d;
          animation: rotation 1s infinite ease;
        }

        .cube div {
          width: 100%;
          height: 100%;
          position: absolute;
          border: 2px solid #C9C8C0;
          background: #262626;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cube img {
          width: 60%;
          height: 60%;
          object-fit: contain;
        }

        .front  { transform: rotateY(0deg) translateZ(20px); }
        .back   { transform: rotateX(180deg) translateZ(20px); }
        .right  { transform: rotateY(90deg) translateZ(20px); }
        .left   { transform: rotateY(-90deg) translateZ(20px); }
        .top    { transform: rotateX(90deg) translateZ(20px); }
        .bottom { transform: rotateX(-90deg) translateZ(20px); }

        @keyframes rotation {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(-90deg) rotateY(90deg); }
        }
      `}</style>
    </div>
  );
};

export default Test;
