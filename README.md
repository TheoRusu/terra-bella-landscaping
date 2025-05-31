# Terra Bella Landscaping Website

## Overview

Full-stack web application built for Terra Bella Landscaping, a landscaping service provider operating in Newmarket, Ontario and the Greater Toronto Area (GTA). The site presents services, a photo gallery, and a quote request form integrated with email and CMS functionality.

## Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Styling:** Tailwind CSS
- **Email Integration:** Resend API
- **Form Validation:** Zod
- **CMS Integration:** Contentful

## Features

- **Static Site Generation (SSG):** Optimized page loads using async data fetching.
- **Quote Request Form:**
  - Form validation via Zod.
  - Email dispatch via Resend API.
  - Server action used for secure server-side logic.
- **Dynamic Gallery:**
  - CMS-driven via Contentful.
- **SEO + Structured Data:**
  - `metadata` object for title, description, and OpenGraph.
  - JSON-LD schema for search engine indexing.
