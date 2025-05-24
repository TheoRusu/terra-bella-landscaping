import React from "react";
import Image from "next/image";

export default function ServiceCard({ name, url, description }) {
  const slug = url.replace(/^\//, "");
  return (
    <div
      className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
      key={slug}
    >
      <div className="w-full h-48 relative">
        <Image
          src={`${url}.png`}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
