import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-green-400 mb-4" />,
      title: "Full-Stack Web Applications",
      description:
        "I build modern, scalable web apps using powerful technologies like React, Node.js, and MongoDB. From frontend to backend, I deliver seamless, secure, and responsive solutions tailored to your business needs.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-400 mb-4" />,
      title: "Mobile-First Design",
      description:
        "I create responsive, mobile-optimized websites that provide a flawless user experience across all devices. Using frameworks like Tailwind CSS, I ensure your site looks stunning and performs perfectly.",
    },
    {
      icon: <FaPencilRuler className="text-4xl text-purple-400 mb-4" />,
      title: "UI/UX Prototyping",
      description:
        "I transform your ideas into interactive prototypes with tools like Figma. My designs focus on user-centered principles, ensuring intuitive navigation and engaging interfaces for your audience.",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-pink-400 mb-4" />,
      title: "Custom Web Design",
      description:
        "I craft unique, visually appealing websites tailored to your brand identity. With a keen eye for aesthetics and functionality, I deliver designs that captivate and convert your visitors.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg border-2 border-gradient-to-r from-[#BFF098] to-[#6FD6FF] "
              style={{
                borderImage: 'linear-gradient(to right, #BFF098, #6FD6FF) 1',
                borderImageSlice: 1,
              }}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;