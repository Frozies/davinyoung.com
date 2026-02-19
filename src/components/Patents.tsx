import PatentCard from "./PatentCard";

const patents = [
  {
    title: "Product Authentication via NFC & Distributed Ledgers",
    number: "US 12,437,308 B2",
    status: "Granted",
    summary:
      "Enables products embedded with NFC tags to be uniquely identified and verified through a distributed ledger. When a user taps the tag with a smartphone, the system retrieves authentication data stored on a blockchain network to confirm the product's legitimacy.",
    link: "https://patents.google.com/patent/US12437308B2/",
  },
  {
    title: "Supply Chain Traceability with Cryptographic Verification",
    number: "US 2025/0285126 A1",
    status: "Granted",
    summary:
      "Cryptographic verification system for tracking products through the supply chain, ensuring provenance and authenticity at every handoff point.",
    link: "https://patents.google.com/patent/US20250285126A1/",
  },
];

export default function Patents() {
  return (
    <section id="patents" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Patents</h2>
          </div>
          <p className="mt-4 text-muted max-w-xl">
            Granted inventions in product authentication and supply chain verification.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {patents.map((patent) => (
            <PatentCard key={patent.number} {...patent} />
          ))}
        </div>
      </div>
    </section>
  );
}
