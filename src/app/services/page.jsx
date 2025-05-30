import React from "react";
import services from "@/app/data/services";
import ServiceCard from "@/app/components/serviceCard/ServiceCard";

export default function ServicesPage() {
  return (
    <main className="px-4 py-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.services.map((svc) => (
          <ServiceCard
            key={svc.url}
            name={svc.name}
            url={svc.url}
            description={svc.description}
          />
        ))}
      </div>
    </main>
  );
}
