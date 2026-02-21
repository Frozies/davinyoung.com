import PatentCard from "./PatentCard";
import ScrollReveal from "./ScrollReveal";

const patents = [
  {
    title: "System, Method and Process for Product Verification and Authentication",
    number: "US 12,314,963",
    status: "Granted",
    serial: "19/017891",
    date: "May 27, 2025",
    summary:
      "Original non-provisional covering the core system and method for product authentication using NFC tags and a permissioned blockchain. Products receive unique cryptographic identifiers verified against an immutable ledger with each consumer tap.",
    link: "https://patents.google.com/patent/US12314963B1/",
  },
  {
    title: "System, Method and Process for Product Verification and Authentication",
    number: "US 12,437,308 B2",
    status: "Granted",
    serial: "19/218464",
    date: "October 7, 2025",
    summary:
      "Continuation with broad system and method claims expanding on the original patent. Covers the end-to-end authentication flow from NFC tag encoding through blockchain verification and consumer-facing certificate issuance.",
    link: "https://patents.google.com/patent/US12437308B2/",
  },
  {
    title: "System, Method and Process for Product Verification and Authentication",
    number: "Pending",
    status: "Pending",
    serial: "19/187298",
    date: "Filed April 23, 2025",
    summary:
      "Continuation directed to system claims for product verification and authentication within the ST.001 patent family.",
  },
  {
    title: "System and Method for Encoding an NFC Tag for Use in Product Authentication and to Create an Immutable Tap Transaction Record",
    number: "Pending (Pub. US 2025/0285126 A1)",
    status: "Pending",
    serial: "19/218492",
    date: "Filed May 26, 2025",
    summary:
      "Continuation focused on NFC tag encoding embodiments. Covers the process of writing unique cryptographic identifiers to tags and creating tap-unique URLs that produce sequential, immutable verification records using AES-128 encryption.",
    link: "https://patents.google.com/patent/US20250285126A1/",
  },
];

export default function Patents() {
  return (
    <section id="patents" className="py-24 sm:py-32 border-t border-border" aria-labelledby="patents-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 id="patents-heading" className="text-3xl sm:text-4xl font-bold text-white">Patents</h2>
          </div>
          <p className="mt-4 text-muted max-w-xl">
            Four non-provisional filings in NFC-based product authentication. Two granted, two pending.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {patents.map((patent, i) => (
            <ScrollReveal key={patent.serial} delay={i * 100}>
              <PatentCard {...patent} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
