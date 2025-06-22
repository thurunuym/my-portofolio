import React from "react";

const services = [
  {
    title: "Full-Stack Web Applications",
    description:
      "Dynamic, scalable apps built with modern front-end and back-end technologies tailored for your business.",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces and seamless user journeys crafted for web and mobile platforms.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps using React Native or Flutter that work smoothly on both iOS and Android.",
  },
  {
    title: "Graphic Design",
    description:
      "High-impact visuals and brand assets created using Photoshop to elevate your brand identity.",
  },
];

const Services = () => {
  return (
    <div className="px-6 md:px-20 py-12 h-screen justify-center items-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent text-center mb-12">
        Services
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:px-50">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group p-[2px] rounded-md 
                       bg-gradient-to-br from-[#6FD6FF] to-[#BFF098]
                       group-hover:from-[#BFF098] group-hover:to-[#6FD6FF] 
                       transition-all duration-500 sm:h-full"
          >
            <div className="bg-black rounded-md h-full w-full p-6">
              <h2 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h2>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
