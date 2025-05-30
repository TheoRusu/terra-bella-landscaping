import React from "react";
import GalleryClient from "./GalleryImage";
import { fetchGalleryImages } from "../api/contentful";

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

export default async function GalleryPage() {
  const images = await fetchGalleryImages();

  return (
    <main className="px-4 py-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-8">
        {images.map((img, i) => (
          <GalleryClient
            key={i}
            src={img.fields.image.fields.file.url}
            alt={`Gallery ${i + 1}`}
          />
        ))}
      </div>
    </main>
  );
}
