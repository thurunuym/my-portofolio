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
    <header className="w-full bg-gradient-to-r from-black to-[#0A0A0A] px-8 py-4 flex justify-end items-center">
      <nav className="flex gap-6" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`px-5 py-2 font-semibold text-base outline-none focus:ring-2 focus:ring-[#BFF098] transition-all ${styles['gradient-text-outline']}`}
            tabIndex="0"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
