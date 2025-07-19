// src/components/Navbar.jsx
import React, { useState } from "react";

const navLinks = [
  { href: "#about", label: "O nás" },
  { href: "#prices", label: "Ceník" },
  { href: "#gallery", label: "Galerie" },
  { href: "#contact", label: "Kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow z-50">
      <div className="container-custom flex justify-between items-center py-2 px-4">
        {/* Logo + Emoji barber */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl" role="img" aria-label="scissors">
            ✂️
          </span>
          <span className="font-display text-2xl font-bold text-gray-900 tracking-wider">
            Nam HairSalon
          </span>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-red-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Otevřít menu"
        >
          {/* Hamburger menu as SVG */}
          {open ? (
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white bg-opacity-95 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-gray-800 hover:text-red-500 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
