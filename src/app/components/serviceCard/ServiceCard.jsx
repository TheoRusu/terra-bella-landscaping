"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServiceCard({ name, url, description }) {
  const [isLoading, setIsLoading] = useState(true);
  const slug = url.replace(/^\//, "");

  return (
    <div className="overflow-hidden rounded-2xl shadow-lg" key={slug}>
      <div className="w-full h-48 relative">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-t-2xl" />
        )}
        <Image
          src={`${url}.png`}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className={`rounded-t-2xl transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
