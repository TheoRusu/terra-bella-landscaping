import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.terrabellalandscaping.ca";

  const staticUrls = ["", "/services", "/gallery", "/contact"];

  const urls = staticUrls.map((path) => {
    return `
      <url>
        <loc>${baseUrl}${path}</loc>
        <priority>${path === "" ? "1.0" : "0.7"}</priority>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
