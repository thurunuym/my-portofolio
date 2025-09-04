import React from "react";
import "../styles/TechStack.css"
import htmlLogo from "../assets/html.webp";
import cssLogo from "../assets/css.webp";
import jsLogo from "../assets/js.webp";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.webp";
import javaLogo from "../assets/java.png";
import phpLogo from "../assets/php.svg";
import nodeLogo from "../assets/node.jpg";
import pythonLogo from "../assets/python.png";
import springLogo from "../assets/spring.png";
import expressLogo from "../assets/express.png";
import mysqlLogo from "../assets/mysql.png";
import mongoLogo from "../assets/mongodb.webp";
import pgLogo from "../assets/pg.webp";
import gitLogo from "../assets/git.webp";
import psLogo from "../assets/ps.webp";
import prLogo from "../assets/pr.png";

const TechStack = () => {
  const techStacks = {
    Languages: [javaLogo, pythonLogo, jsLogo, phpLogo],
    WebDev: [htmlLogo ,cssLogo ,tailwindLogo,reactLogo , springLogo ,nodeLogo,expressLogo ],
    Databases: [mysqlLogo, mongoLogo , pgLogo],
    Other: [gitLogo, psLogo, prLogo],
  };

  return (
    <section
      id="tech-stack"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden bg-black"
    >
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent mb-12">
          Tech Stack
        </h2>

        {/* Centered Black Box with Gradient Border */}
        <div
          className="mx-auto py-12 border-2 rounded-lg"
          style={{
            borderImage: "linear-gradient(to right, #BFF098, #6FD6FF) 1",
            borderImageSlice: 1,
            background: "#000",
          }}
        >
          <div className="grid grid-cols-[150px_auto] items-center gap-y-8 lg:gap-y-16 max-w-4xl mx-auto px-2 lg:px-4 lg:ml-50.5">
            {Object.entries(techStacks).map(([section, logos]) => (
              <React.Fragment key={section}>
                <h3 className="text-lg lg:text-2xl font-semibold text-white">{section}</h3>
                <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6">
                  {logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`${section} logo ${index}`}
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-white lg:p-2 object-contain"
                    />
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;