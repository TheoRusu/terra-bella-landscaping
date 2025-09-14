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
    default:
      "Terra Bella Landscaping Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington | Terra Bella Landscaping",
    template:
      "%s | Terra Bella Landscaping Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington | Terra Bella Landscaping",
  },
  description:
    "Terra Bella Landscaping provides landscaping services in Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington. Transparent pricing, on‑time delivery, hardworking crew.",
  keywords: [
    "landscaping Newmarket",
    "lawn sodding",
    "patio interlocking",
    "garden planting",
    "terra bella landscaping",
    "landscaping Toronto",
    "landscaping Mississauga",
    "landscaping Brampton",
    "landscaping Vaughan",
    "landscaping Markham",
    "landscaping Richmond Hill",
    "landscaping Oakville",
    "landscaping Burlington",
    "landscaping Milton",
    "landscaping Halton Hills",
    "landscaping Caledon",
    "landscaping Aurora",
    "landscaping King",
    "landscaping Whitchurch-Stouffville",
    "landscaping East Gwillimbury",
    "landscaping Georgina",
    "landscaping Pickering",
    "landscaping Ajax",
    "landscaping Whitby",
    "landscaping Oshawa",
    "landscaping Clarington",
  ],
  openGraph: {
    title:
      "Landscaping Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Milton, Halton Hills, Caledon, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury, Georgina, Pickering, Ajax, Whitby, Oshawa, Clarington | Terra Bella Landscaping",
    description:
      "Landscaping services in Toronto and GTA: transparent pricing, on‑time delivery, hardworking crew. Serving Newmarket, Mississauga, Brampton, Vaughan, and more.",
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
