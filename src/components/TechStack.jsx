import React from "react";

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-black relative overflow-x-hidden">
      {/* Gradient Title */}
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent mb-12">
        Tech Stack
      </h2>

      {/* Full-width Black Box */}
      <div className="w-screen bg-[#0a0a0a] py-12 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Frontend Row */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-6">
              {/* Replace below with actual logos */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">HTML</div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">CSS</div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">JS</div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">React</div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">Tailwind</div>
            </div>
          </div>

          {/* Backend Row */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Backend</h3>
            <div className="flex flex-wrap gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">Node</div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">Express</div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">Spring</div>
            </div>
          </div>

          {/* Database Row */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Databases</h3>
            <div className="flex flex-wrap gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">Mongo</div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">MySQL</div>
            </div>
          </div>

          {/* Other Row */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Other</h3>
            <div className="flex flex-wrap gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">Git</div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">Figma</div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold">Vercel</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
