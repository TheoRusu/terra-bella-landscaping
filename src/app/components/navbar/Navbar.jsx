"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 relative flex justify-between items-center z-10">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/TerrabellaLandscapingLogo3.png"
              alt="Terra Bella Landscaping Co. Logo"
              width={61}
              height={50}
              quality={100}
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

        {/* Desktop Menu */}
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
      </nav>

      {/* Mobile Menu - Outside nav element */}
      {menuOpen && (
        <div className="bg-black text-white text-center md:hidden border-t border-gray-800 z-50">
          <div className="flex flex-col py-4">
            <Link
              href="/"
              className="px-6 py-3 text-sm uppercase tracking-wide hover:text-gray-300 hover:bg-gray-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 text-sm uppercase tracking-wide hover:text-gray-300 hover:bg-gray-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="px-6 py-3 text-sm uppercase tracking-wide hover:text-gray-300 hover:bg-gray-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm uppercase tracking-wide hover:text-gray-300 hover:bg-gray-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
