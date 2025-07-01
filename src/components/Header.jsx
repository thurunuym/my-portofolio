import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";
import thurunuym from "../assets/thurunuym.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    //scrollY is a JavaScript property of the window object that gives you the number of pixels the page has been scrolled vertically.

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` group w-full sticky top-0 z-50 lg:backdrop-blur-sm
         
        bg-gradient-to-r from-[#000000] to-[#101010]  transition-all duration-300 px-8 flex justify-between items-center
        ${
          isScrolled
            ? " lg:bg-gradient-to-r from-[#000000]/20 to-[#101010]/20 lg:hover:bg-[#0d0d0d]"
            : " bg-gradient-to-r from-[#000000] to-[#101010]"
        } 
        `}
    >
      <div>
        <img
          className={`transition-all duration-300 opacity-100 ${
            isScrolled
              ? "lg:h-18 lg:opacity-65 lg:group-hover:opacity-100 "
              : "lg:h-25"
          } h-15`}
          src={thurunuym}
          alt="Logo"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`font-semibold text-base outline-none transition-all duration-300
              ${styles["gradient-text-outline"]} 
              ${styles["hover-3d"]}
              ${
                isScrolled
                  ? "lg:opacity-65 group-hover:opacity-100"
                  : "lg:opacity-100"
              }`}
            tabIndex="0"
          >
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-[100%] w-full right-0 bg-black/10 backdrop-blur-xl p-2 flex flex-col gap-2 md:hidden rounded-b-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-semibold text-base outline-none w-full text-center ${styles["gradient-text-outline"]} ${styles["hover-3d"]}`}
              tabIndex="0"
              onClick={() => setIsOpen(false)}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
