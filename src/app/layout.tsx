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
    default: "Davin Young — Staff Software Engineer, CTO & Founder",
    template: "%s | Davin Young",
  },
  description:
    "Staff Software Engineer, CTO & Co-Founder of SecureTap, and patent holder. Full-stack engineer specializing in blockchain authentication, enterprise platforms, and scalable systems.",
  keywords: [
    "Davin Young",
    "Staff Software Engineer",
    "SecureTap",
    "CTO",
    "blockchain authentication",
    "NFC",
    "Hyperledger Fabric",
    "full-stack engineer",
    "patent holder",
  ],
  authors: [{ name: "Davin Young" }],
  creator: "Davin Young",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davinyoung.com",
    siteName: "Davin Young",
    title: "Davin Young — Staff Software Engineer, CTO & Founder",
    description:
      "Full-stack engineer specializing in blockchain authentication, enterprise platforms, and scalable systems. Two granted patents. 69+ enterprise demos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davin Young — Staff Software Engineer, CTO & Founder",
    description:
      "Full-stack engineer specializing in blockchain authentication, enterprise platforms, and scalable systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Davin Young",
  jobTitle: "Staff Software Engineer",
  url: "https://davinyoung.com",
  sameAs: [
    "https://github.com/Frozies",
    "https://linkedin.com/in/davin-young-engineer",
    "https://securetap.io",
    "https://sunsetvista.co",
  ],
  worksFor: {
    "@type": "Organization",
    name: "SecureTap",
    url: "https://securetap.io",
  },
  knowsAbout: [
    "Blockchain Authentication",
    "NFC Technology",
    "Hyperledger Fabric",
    "Software Engineering",
    "Cloud Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
