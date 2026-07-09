import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: {
    default: "Zenex Cloud Solutions | Domains, VPS, S3 Storage & GPU Hosting",
    template: "%s | Zenex Cloud Solutions"
  },
  description: "Premium cloud hosting services including High-Performance VPS, S3-Compatible Object Storage, Domain Registration, and GPU Hosting. Built for speed, security, and scalability.",
  keywords: [
    "Cloud Hosting",
    "VPS Hosting",
    "S3 Storage",
    "Object Storage",
    "Domain Registration",
    "GPU Hosting",
    "Dedicated Servers",
    "Cloud Solutions",
    "Zenex Cloud",
    "Fast VPS",
    "AEO",
    "AI Search Engine Optimization"
  ],
  authors: [{ name: "Zenex Cloud" }],
  creator: "Zenex Cloud",
  publisher: "Zenex Cloud Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zenex Cloud Solutions | Reliable VPS, S3 Storage & Domains",
    description: "Scale your business with our premium cloud infrastructure. Get high-performance VPS, secure S3 storage, and easy domain management.",
    url: "https://zenexcloud.com",
    siteName: "Zenex Cloud Solutions",
    images: [
      {
        url: "/OG-Img.png",
        width: 1200,
        height: 630,
        alt: "Zenex Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenex Cloud Solutions | Cloud Infrastructure",
    description: "Scale your business with our premium cloud infrastructure. Get high-performance VPS, secure S3 storage, and easy domain management.",
    images: ["/OG-Img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zenex Cloud Solutions',
    url: 'https://zenexcloud.com',
    logo: 'https://zenexcloud.com/logo.png',
    description: 'Premium cloud provider offering VPS hosting, S3 compatible object storage, GPU hosting, and domain registration services for businesses and developers.',
    sameAs: [
      'https://twitter.com/zenexcloud',
      'https://www.linkedin.com/company/zenexcloud'
    ]
  };

  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NGF5P3KL');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGF5P3KL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <main className="">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
