import { createClient } from "contentful";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  accessToken: ACCESS_TOKEN,
  space: SPACE_ID,
});

export async function fetchGalleryImages() {
  const res = await client.getEntries({ content_type: "galleryImage" });

  return res.items;
  //   const res = await fetch(
  //     `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=GalleryImage&select=fields.image`,
  //     { next: { revalidate: 60 } }
  //   );

  //   if (!res.ok) throw new Error("Failed to fetch images from Contentful");

  //   const data = await res.json();
  //   const assets = data.includes?.Asset || [];

  //   return assets.map((asset) => `https:${asset.fields.file.url}`);
}
