"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="relative h-[500px] rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gray-300" />
        )}
        <Image
          src="/HeroImage.png"
          alt="Hero Background"
          fill
          className={`object-cover object-right md:object-center transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Terra Bella Landscaping
        </h1>
        <p className="text-xl text-white mt-4">Your Ultimate Dreamscape</p>
        <Link
          href="#quote"
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded text-lg hover:bg-green-700"
        >
          Request a Free Quote
        </Link>
      </div>
    </section>
  );
}
