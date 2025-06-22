import React from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black/30 backdrop-blur-sm hover:bg-black/90 transition duration-300 px-8 py-7 flex justify-end items-center">
      <nav className="flex gap-6" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`font-semibold text-base outline-none ${styles['gradient-text-outline']}`}
            tabIndex="0"
          >
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
