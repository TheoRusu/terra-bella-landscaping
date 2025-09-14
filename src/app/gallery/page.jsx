import React from "react";
import GalleryClient from "./GalleryImage";
import { fetchGalleryImages } from "../api/contentful";

export const metadata = {
  title:
    "Gallery | Landscaping Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington",
  description:
    "Terra Bella Landscaping portfolio: completed landscaping projects including sodding, planting, interlocking. Serving Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington.",
  openGraph: {
    title:
      "Gallery | Landscaping Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington",
    description:
      "View completed landscaping projects by Terra Bella Landscaping. Serving Toronto, Newmarket, and full Greater Toronto Area.",
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
          <GalleryClient key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
    </main>
  );
}
