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
    <header className="w-full bg-gradient-to-r from-black to-[#0A0A0A] px-8 py-7 flex justify-end items-center">
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
