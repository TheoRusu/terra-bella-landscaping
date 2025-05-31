"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryClient({ src, alt }) {
  const [selected, setSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Gallery Preview Image */}
      <div
        className="overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
        onClick={() => setSelected(true)}
      >
        <div className="relative w-full h-48">
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-2xl" />
          )}
          <Image
            src={"https:" + src}
            alt={alt}
            width={400}
            height={300}
            className={`w-full h-48 object-cover rounded-2xl transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setIsLoading(false)}
            loading="lazy"
          />
        </div>
      </div>

      {/* Full Screen Image */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(false)}
        >
          <Image
            src={"https:" + src}
            alt="Full screen"
            width={1200}
            height={800}
            className="object-contain max-h-screen max-w-full"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={() => setSelected(false)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
