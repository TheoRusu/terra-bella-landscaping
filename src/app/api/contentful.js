import { createClient } from "contentful";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  accessToken: ACCESS_TOKEN,
  space: SPACE_ID,
});

export async function fetchGalleryImages() {
  const res = await client.getEntries({ content_type: "galleryImage" });

  return res.items.map((item) => ({
    src: item.fields.image.fields.file.url,
    alt: item.fields.title,
  }));
}
