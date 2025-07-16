import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row justify-between gap-4">

        {/* 🔗 Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E1306C] transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3b5998] transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF0000] transition-colors duration-300"
          >
            <FaYoutube />
          </a>
        </div>

        {/* 📜 Rights & Funny Line */}
        <div className="text-center text-sm leading-relaxed max-w-md">
          <p>© {new Date().getFullYear()} Thurunu YM. All rights reserved.</p>
          <p className="text-gray-400 mt-1 italic">
            Designed with style, developed with bugs (hopefully fixed). Thanks for the cardio!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
