import React from "react";
import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Gallery",
  description:
    "Portfolio of completed sodding, planting, interlocking projects.",
  openGraph: {
    title: "Gallery",
    description: "View Terra Bella Landscaping project portfolio.",
    url: "https://www.terrabellalandscaping.ca/gallery",
  },
  alternates: { canonical: "https://www.terrabellalandscaping.ca/gallery" },
};

const images = ["/HeroImage.png", "/TerrabellaLandscapingLogo.png"];
export default function GalleryPage() {
  return (
    <main className="px-4 py-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <GalleryClient images={images} />
    </main>
  );
}
