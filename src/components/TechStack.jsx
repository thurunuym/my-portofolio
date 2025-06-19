import React from "react";
import htmlLogo from "../assets/html.webp";
import cssLogo from "../assets/css.webp";
import jsLogo from "../assets/js.webp"; 
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.webp";

const TechStack = () => {

const techStacks = {
  Frontend: [htmlLogo, cssLogo, jsLogo, reactLogo, tailwindLogo],
  Backend: [htmlLogo, cssLogo, jsLogo, reactLogo, tailwindLogo],
  Databases: [htmlLogo, cssLogo, jsLogo, reactLogo, tailwindLogo],
  Other: [htmlLogo, cssLogo, jsLogo, reactLogo, tailwindLogo],
};


  return (
    <section id="tech-stack" className="py-20 relative overflow-x-hidden">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent mb-12">
        Tech Stack
      </h2>

      {/* Full-width Black Box */}
      <div className="w-screen bg-[#000000] justify-center py-12 border-2 border-gradient-to-r from-[#BFF098] to-[#6FD6FF] border-l-0 border-r-0  sm:px-12"
      style={{
                borderImage: 'linear-gradient(to right, #BFF098, #6FD6FF) 1',
                borderImageSlice: 1,
              }}>


                <div className="grid grid-cols-[150px_auto] items-start gap-y-16 max-w-6xl mx-auto">
  {Object.entries(techStacks).map(([section, logos]) => (
    <React.Fragment key={section}>
      <h3 className="text-2xl font-semibold text-white">{section}</h3>
      <div className="flex flex-wrap gap-6">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`${section} logo ${index}`}
            className="w-16 h-16 rounded-full bg-white p-2 object-contain"
          />
        ))}
      </div>
    </React.Fragment>
  ))}
</div>

  

      </div>
    </section>
  );
};

export default TechStack;
