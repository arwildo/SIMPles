"use client";
import { useState } from "react";
import Image from "next/image";

const Logo = () => (
  <Image src="/SIMPles-logo.svg" alt="Logo" height={120} width={120} />
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
        <ul className="hidden sm:flex ml-15 gap-10">
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
          className={`ml-auto sm:hidden flex flex-col justify-center items-center h-10 w-10 group relative`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 absolute' : 'mb-1.5 group-hover:rotate-45 group-hover:absolute group-hover:mb-0'}`} />
          <span className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 absolute' : 'group-hover:-rotate-45 group-hover:absolute'}`} />
        </button>
      </div>
      {/* menu mobile */}
      {open && (
        <ul className="sm:hidden bg-black/20 backdrop-blur-md px-6 py-4 flex flex-col gap-4 items-center">
          {menu.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white font-medium block hover:font-bold"
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
