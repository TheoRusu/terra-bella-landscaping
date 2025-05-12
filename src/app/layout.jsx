import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: {
    default: "Terra Bella Landscaping",
    template: "%s | Terra Bella Landscaping",
  },
  description:
    "Terra Bella Landscaping: transparent pricing, on‑time delivery, hardworking crew serving Newmarket, Ontario and GTA.",
  keywords: [
    "landscaping Newmarket",
    "lawn sodding",
    "patio interlocking",
    "garden planting",
    "terra bella landscaping",
  ],
  openGraph: {
    title: "Terra Bella Landscaping",
    description:
      "Transparent pricing. On‑time delivery. Hardworking crew. Serving Newmarket, Ontario and GTA.",
    url: "https://www.terrabellalandscaping.ca",
    siteName: "Terra Bella Landscaping",
    images: [
      {
        url: "https://www.terrabellalandscaping.ca/TerrabellaLandscapingLogo2.PNG",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@terrabella.landscaping",
    creator: "@terrabella.landscaping",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.terrabellalandscaping.ca" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${inter.variable} ${playfair.variable}`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
