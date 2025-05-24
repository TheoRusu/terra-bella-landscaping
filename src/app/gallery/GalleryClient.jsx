"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryClient({ images }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => setSelected(src)}
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <Image
            src={selected}
            alt="Full screen"
            width={1200}
            height={800}
            className="object-contain max-h-screen max-w-full"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={() => setSelected(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
