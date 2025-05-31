import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import services from "@/app/data/services";
import QuoteForm from "@/app/components/quoteForm/QuoteForm";
import ServiceCard from "@/app/components/serviceCard/ServiceCard";
import { fetchGalleryImages } from "@/app/api/contentful";
import GalleryClient from "@/app/gallery/GalleryImage";
import HeroSection from "./components/heroSection/HeroSection";

export const metadata = {
  title: "Home",
  description:
    "Preview of services, gallery, free quote form, transparent pricing, hardworking crew.",
  openGraph: {
    title: "Home",
    description: "Free quotes. Transparent pricing. Serving Newmarket & GTA.",
    url: "https://www.terrabellalandscaping.ca",
  },
  alternates: { canonical: "https://www.terrabellalandscaping.ca" },
};

export default async function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "Terra Bella Landscaping",
    url: "https://www.terrabellalandscaping.ca",
    logo: "https://www.terrabellalandscaping.ca/TerrabellaLandscapingLogo2.PNG",
    image:
      "https://www.terrabellalandscaping.ca/TerrabellaLandscapingLogo2.PNG",
    description:
      "Transparent pricing, on‑time delivery, hardworking crew. Serving Newmarket, Ontario and GTA.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Newmarket",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 44.05,
        longitude: -79.46,
      },
      geoRadius: 50,
    },
  };

  const firstThreeServices = services.services.slice(0, 3);
  const galleryImages = await fetchGalleryImages();
  const firstThreeImages = galleryImages.slice(0, 3);

  return (
    <main className="px-4 py-12 max-w-screen-xl mx-auto">
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>

      {/* Hero Section */}
      <HeroSection />

      {/* Dividing Line */}
      <div className="max-w-screen-xl mx-auto px-8">
        <hr className="border-t border-green-700 my-4" />
      </div>

      {/* Services Preview */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-8">
          {firstThreeServices.map((svc) => (
            <ServiceCard
              key={svc.url}
              name={svc.name}
              url={svc.url}
              description={svc.description}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link href={"/services"} className="text-green-700 hover:underline">
            View All Services
          </Link>
        </div>
      </section>

      {/* Dividing Line */}
      <div className="max-w-screen-xl mx-auto px-8">
        <hr className="border-t border-green-700 my-4" />
      </div>

      {/* Quote Form */}
      <section id="quote" className="bg-white py-16 px-6">
        <QuoteForm />
      </section>

      {/* Dividing Line */}
      <div className="max-w-screen-xl mx-auto px-8">
        <hr className="border-t border-green-700 my-4" />
      </div>

      {/* Why Choose Us */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 justify-evenly gap-8">
          <div>
            <div className="text-3xl mb-2">💲</div>
            <p className="font-semibold">Transparent pricing</p>
          </div>
          <div>
            <div className="text-3xl mb-2">💪</div>
            <p className="font-semibold">Hardworking crew</p>
          </div>
          <div>
            <div className="text-3xl mb-2">⏰</div>
            <p className="font-semibold">On‑time delivery</p>
          </div>
        </div>
      </section>

      {/* Dividing Line */}
      <div className="max-w-screen-xl mx-auto px-8">
        <hr className="border-t border-green-700 my-4" />
      </div>

      {/* Gallery Preview */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-8">
          {firstThreeImages.map((img, i) => (
            <GalleryClient key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/gallery" className="text-green-700 hover:underline">
            View Full Gallery
          </Link>
        </div>
      </section>
    </main>
  );
}
