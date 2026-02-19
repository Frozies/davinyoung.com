import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davinyoung.com"),
  title: {
    default: "Davin Young — Staff Software Engineer, Founder & Patent Holder",
    template: "%s | Davin Young",
  },
  description:
    "Davin Young is a Staff Software Engineer, startup founder, and US patent holder based in Southwest Florida. He builds enterprise platforms, cloud infrastructure, e-commerce storefronts, and scalable full-stack systems.",
  keywords: [
    "Davin Young",
    "Staff Software Engineer",
    "full-stack engineer",
    "patent holder",
    "startup founder",
    "cloud infrastructure",
    "enterprise platforms",
    "e-commerce developer",
    "NFC authentication",
    "Southwest Florida engineer",
    "React developer",
    "Next.js developer",
    "AWS engineer",
    "Shopify developer",
  ],
  authors: [{ name: "Davin Young", url: "https://davinyoung.com" }],
  creator: "Davin Young",
  publisher: "Davin Young",
  alternates: {
    canonical: "https://davinyoung.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davinyoung.com",
    siteName: "Davin Young",
    title: "Davin Young — Staff Software Engineer, Founder & Patent Holder",
    description:
      "Full-stack engineer building enterprise platforms, cloud infrastructure, e-commerce, and scalable systems. Two granted US patents. Based in Southwest Florida.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davin Young — Staff Software Engineer, Founder & Patent Holder",
    description:
      "Full-stack engineer building enterprise platforms, cloud infrastructure, e-commerce, and scalable systems. Two granted US patents.",
    creator: "@davinyoung",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://davinyoung.com/#person",
  name: "Davin Young",
  givenName: "Davin",
  familyName: "Young",
  jobTitle: "Staff Software Engineer",
  description:
    "Staff Software Engineer, startup founder, and US patent holder specializing in full-stack development, cloud infrastructure, and enterprise platforms.",
  url: "https://davinyoung.com",
  image: "https://davinyoung.com/images/davin-young.jpg",
  sameAs: [
    "https://github.com/Frozies",
    "https://linkedin.com/in/davin-young-engineer",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  alumniOf: [],
  knowsAbout: [
    "Software Engineering",
    "Cloud Infrastructure",
    "Enterprise Platforms",
    "E-Commerce",
    "NFC Technology",
    "Blockchain",
    "AWS",
    "React",
    "Next.js",
    "Java",
    "TypeScript",
    "Docker",
    "PostgreSQL",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://davinyoung.com/#website",
  name: "Davin Young",
  url: "https://davinyoung.com",
  description:
    "Portfolio and blog of Davin Young — Staff Software Engineer, startup founder, and patent holder.",
  author: { "@id": "https://davinyoung.com/#person" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://davinyoung.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
