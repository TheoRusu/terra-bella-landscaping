"use client";
import React from "react";
import "./serviceCard.css";
import Image from "next/image";

const ServiceCard = ({ title, image }) => {
  return (
    <div className="card text-center pointer hover-background m-1">
      <Image
        src={image}
        className="card-img rounded"
        alt="service"
        height={350}
        width={396}
        style={{ borderRadius: "0", objectFit: "cover" }}
      />
      <div className="card-img-overlay textBoxBackground">
        <h5
          className={
            title === "Interlocking"
              ? "card-title fw-bold fs-2 mt-2 text-white text-nowrap"
              : "card-title fw-bold fs-2 mt-2 text-white text-wrap"
          }
        >
          {title}
        </h5>
      </div>
    </div>
  );
};

export default ServiceCard;

// import Script from 'next/script';

// export const metadata = {
//   title: 'Services',
//   description: 'Lawn sodding, garden planting, interlocking paving. Detailed service descriptions and images.',
//   openGraph: { title: 'Services', description: 'Lawn sodding, planting, interlocking paving in Newmarket & GTA.', url: 'https://www.terrabellalandscaping.ca/services' },
//   alternates: { canonical: 'https://www.terrabellalandscaping.ca/services' }
// };

// export default function ServicesPage() {
//   const servicesSchema = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "itemListElement": [
//       { "@type": "Service", "name": "Lawn Sodding", "description": "Premium turf installation for instant lawns." },
//       { "@type": "Service", "name": "Garden Planting", "description": "Flower beds, shrubs, trees with expert planting." },
//       { "@type": "Service", "name": "Interlocking Paving", "description": "Durable patios, driveways, walkways with interlock." }
//     ]
//   };
//   return (
//     <>
//       <Script id="services-jsonld" type="application/ld+json">
//         {JSON.stringify(servicesSchema)}
//       </Script>
//       {/* services grid */}
//     </>
//   );
// }
