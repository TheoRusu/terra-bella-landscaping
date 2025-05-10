import React from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t py-8 text-center text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="font-bold">Terra Bella Landscaping</div>
          <div className="mt-2 md:mt-0">
            <div className="flex justify-center space-x-14 md:hidden">
              <Link href="tel:6477675432" aria-label="Phone">
                <FiPhone className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:terrabelladreamscape@gmail.com"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/terrabella.landscaping"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram className="h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              <Link href="tel:6477675432" className="hover:text-gray-300">
                (647) 767‑5432
              </Link>
              <Link
                href="mailto:terrabelladreamscape@gmail.com"
                className="hover:text-gray-300"
              >
                terrabelladreamscape@gmail.com
              </Link>
              <Link
                href="https://instagram.com/terrabellalandscaping"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Terra Bella Landscaping. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
