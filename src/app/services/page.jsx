import React from "react";
import services from "@/app/data/services";
import ServiceCard from "@/app/components/serviceCard/ServiceCard";

export const metadata = {
  title:
    "Services | Landscaping Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington",
  description:
    "Terra Bella Landscaping services: planting, lawn sodding, patio interlocking, retaining walls, deck and fence construction, powerwashing, and french drainage. Serving Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington.",
  openGraph: {
    title:
      "Services | Landscaping Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington",
    description:
      "Explore Terra Bella Landscaping services: sodding, planting, interlocking, retaining walls, decks, fences, powerwashing, french drainage. Serving Newmarket and the entire GTA.",
    url: "https://www.terrabellalandscaping.ca/services",
  },
  alternates: { canonical: "https://www.terrabellalandscaping.ca/services" },
};

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
