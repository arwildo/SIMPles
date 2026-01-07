"use client";
import React, { useState } from "react";

const Logo = () => (
  <img src="/SIMPles-logo.svg" alt="Logo" className="h-10" />
);

const menu = [
  { label: "Fitur", href: "#fitur" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Misi", href: "#misi" },
  { label: "Hubungi", href: "#hubungi" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-5xl mx-auto flex items-center px-4 py-3">
        <Logo />
        {/* menu desktop */}
        <ul className="hidden md:flex ml-6 gap-6">
          {menu.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white font-medium hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* hamburger*/}
        <button
          className="ml-auto md:hidden flex flex-col justify-center items-center h-10 w-10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="block w-7 h-0.5 bg-white mb-1.5 rounded transition-all" />
          <span className="block w-7 h-0.5 bg-white rounded transition-all" />
        </button>
      </div>
      {/* menu mobile */}
      {open && (
        <ul className="md:hidden bg-black/90 px-6 py-4 flex flex-col gap-4">
          {menu.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white font-medium block"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
