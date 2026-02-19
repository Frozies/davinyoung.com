import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber/5 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            I build things that{" "}
            <span className="text-amber">ship.</span>
          </h1>
        </div>

        <div className="animate-fade-up animation-delay-100">
          <p className="mt-6 font-mono text-sm sm:text-base text-muted">
            Staff Software Engineer · Founder · Patent Holder
          </p>
        </div>

        <div className="animate-fade-up animation-delay-200">
          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Full-stack engineer who builds across the entire stack — enterprise platforms,
            e-commerce, infrastructure, and everything in between.
            Two granted US patents. Multiple startups. From Hyperledger networks to Shopify storefronts.
          </p>
        </div>

        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-background font-semibold text-sm rounded-lg hover:bg-amber-light transition-colors"
          >
            View Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-lg hover:border-border-hover hover:bg-surface transition-colors"
          >
            Read the Blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
