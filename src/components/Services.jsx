import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 width-full height-screen">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Service 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-pink-300 transition duration-300">
          <div className="flex items-center mb-4">
            <FaLaptopCode className="text-pink-400 text-3xl mr-4" />
            <h3 className="text-xl font-semibold">Custom Web Application Development</h3>
          </div>
          <p className="text-gray-300">
            Build responsive, scalable, and secure web applications tailored to your business needs using modern technologies like React, Node.js, and MongoDB.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-pink-300 transition duration-300">
          <div className="flex items-center mb-4">
            <FaMobileAlt className="text-pink-400 text-3xl mr-4" />
            <h3 className="text-xl font-semibold">Mobile Application Development</h3>
          </div>
          <p className="text-gray-300">
            Develop intuitive and high-performance mobile apps for Android and iOS using frameworks like Flutter and React Native for seamless user experiences.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-pink-300 transition duration-300">
          <div className="flex items-center mb-4">
            <FaPencilRuler className="text-pink-400 text-3xl mr-4" />
            <h3 className="text-xl font-semibold">UI/UX Designing</h3>
          </div>
          <p className="text-gray-300">
            Design user-centric interfaces that combine beauty with usability. We create wireframes, prototypes, and design systems using Figma and Adobe XD.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-pink-300 transition duration-300">
          <div className="flex items-center mb-4">
            <FaPaintBrush className="text-pink-400 text-3xl mr-4" />
            <h3 className="text-xl font-semibold">Graphic Designing</h3>
          </div>
          <p className="text-gray-300">
            Enhance your brand with professional graphic design services including logos, banners, social media posts, and marketing materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
