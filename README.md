# Zenex Cloud Solutions

Zenex Cloud is a modern, responsive cloud hosting platform built with Next.js. It offers various cloud solutions including Web Hosting, VPS Hosting, and S3 Object Storage, paired with an elegant and user-friendly interface.

## Features

- **Modern Architecture:** Built with Next.js and React for optimal performance, fast loading times, and SEO.
- **Hosting Plans:** Detailed showcases for different Web Hosting and VPS Hosting packages.
- **Pricing Module:** Interactive pricing tiers and billing toggles for various service levels.
- **S3 Object Storage Integration:** Seamlessly fetches and manages files securely from AWS S3 buckets.
- **Contact Handling:** Built-in contact form integration to manage customer inquiries smoothly.
- **FAQ Section:** Accessible and interactive accordion-style Frequently Asked Questions.
- **Responsive Design:** Fully optimized layouts for desktop, tablet, and mobile viewing experiences.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm (or yarn/pnpm/bun) installed on your local machine. You will also need to configure your environment variables for S3 integration and other services.

### Installation

1. Clone the repository:
   ```bash
   cd zenex-cloud
   ```

2. Install dependencies:
   ```bash
   npm install
   # or yarn install, pnpm install, bun install
   ```

3. Configure Environment Variables:
   Create a `.env.local` or `.env` file in the root directory and add the necessary environment variables (e.g., AWS S3 credentials).

4. Run the development server:
   ```bash
   npm run dev
   # or yarn dev, pnpm dev, bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI & Styling:** CSS / React Components
- **Cloud Integrations:** AWS S3 (for Object Storage)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
