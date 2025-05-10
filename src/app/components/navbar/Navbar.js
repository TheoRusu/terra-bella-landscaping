"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 relative flex justify-between items-center z-10">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/TerrabellaLandscapingLogo.png"
            alt="Landscaping Co. Logo"
            width={61}
            height={50}
          />
        </div>
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className="md:hidden focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <div className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/services" className="hover:text-gray-300">
          Services
        </Link>
        <Link href="/gallery" className="hover:text-gray-300">
          Gallery
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </div>
      <div
        className={`absolute top-full left-0 w-full bg-black flex flex-col items-center md:hidden z-50 rounded-b-xl transform origin-top transition-transform duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <Link
          href="/"
          className="w-full text-center py-3 hover:bg-gray-800"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/services"
          className="w-full text-center py-3 hover:bg-gray-800"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/gallery"
          className="w-full text-center py-3 hover:bg-gray-800"
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="w-full text-center py-3 hover:bg-gray-800"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
