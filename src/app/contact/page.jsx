import React from "react";
import Script from "next/script";
import Link from "next/link";
import QuoteForm from "@/app/components/quoteForm/QuoteForm";

export const metadata = {
  title: "Contact",
  description:
    "Owner info, contact details, hours of operation for Terra Bella Landscaping.",
  openGraph: {
    title: "Contact",
    description:
      "Get a free quote from Terra Bella Landscaping in Newmarket & GTA.",
    url: "https://www.terrabellalandscaping.ca/contact",
  },
  alternates: { canonical: "https://www.terrabellalandscaping.ca/contact" },
  robots: { index: true, follow: true },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Terra Bella Landscaping",
  telephone: "(647) 767-5432",
  email: "terrabelladreamscape@gmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="px-4 py-8 max-w-screen-xl mx-auto text-center">
      <Script id="contact-jsonld" type="application/ld+json">
        {JSON.stringify(contactSchema)}
      </Script>

      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <section className="mb-8">
        <p className="max-w-prose mx-auto text-md">
          Terra Bella Landscaping delivers expert residential and commercial
          landscaping services across Newmarket and the GTA. Our team
          specializes in design, installation, and maintenance to transform
          outdoor spaces into functional, beautiful environments.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Owner</h2>
        <p>Matthew Tawfiq</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
        <p>
          Phone:{" "}
          <Link href="tel:+16477675432" className="text-blue-600 underline">
            (647) 767‑5432
          </Link>
        </p>
        <p>
          Email:{" "}
          <Link
            href="mailto:terrabelladreamscape@gmail.com"
            className="text-blue-600 underline"
          >
            terrabelladreamscape@gmail.com
          </Link>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Hours of Operation (EST)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-md mx-auto text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 px-4">Day</th>
                <th className="border-b py-2 px-4">Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1 px-4">Monday</td>
                <td className="py-1 px-4">9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td className="py-1 px-4">Tuesday</td>
                <td className="py-1 px-4">9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td className="py-1 px-4">Wednesday</td>
                <td className="py-1 px-4">9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td className="py-1 px-4">Thursday</td>
                <td className="py-1 px-4">9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td className="py-1 px-4">Friday</td>
                <td className="py-1 px-4">9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td className="py-1 px-4">Saturday</td>
                <td className="py-1 px-4">9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td className="py-1 px-4">Sunday</td>
                <td className="py-1 px-4">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="quote" className="mb-8">
        <QuoteForm />
      </section>
    </main>
  );
}
