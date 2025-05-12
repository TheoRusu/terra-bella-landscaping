import React from "react";
import services from "@/app/data/services";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="px-4 py-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-around">
        {services.services.map((service) => {
          const slug = service.url.replace(/^\//, "");
          return (
            <div
              key={slug}
              className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={`${service.url}.png`}
                  alt={service.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{service.name}</h2>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
