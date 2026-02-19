const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "Rust", "SQL"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Node.js", "Hyperledger Fabric", "PostgreSQL", "PostGIS"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Shopify Liquid", "Tailwind CSS"],
  },
  {
    category: "Infrastructure",
    skills: ["AWS (multi-account)", "Docker", "Traefik", "Tailscale", "GitHub Actions", "LocalStack"],
  },
  {
    category: "Expert",
    skills: ["NFC/NDEF", "Blockchain (Hyperledger Fabric)", "Patent Development"],
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/Frozies" },
  { label: "LinkedIn", href: "https://linkedin.com/in/davin-young-engineer" },
  { label: "SecureTap", href: "https://securetap.io" },
  { label: "Sunset Vista Co.", href: "https://sunsetvista.co" },
];

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-white">About</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr,1.2fr]">
          {/* Bio */}
          <ScrollReveal delay={100} className="space-y-5 text-muted leading-relaxed">
            <p>
              I&apos;m Davin Young — a Staff Software Engineer and founder based in
              Southwest Florida. I like building things end-to-end: backend services,
              cloud infrastructure, storefronts, and the glue in between.
            </p>
            <p>
              I&apos;ve co-founded{" "}
              <a
                href="https://securetap.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:text-amber-light transition-colors"
              >
                SecureTap
              </a>
              {" "}(a blockchain authentication startup) and{" "}
              <a
                href="https://sunsetvista.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:text-amber-light transition-colors"
              >
                Sunset Vista Co.
              </a>
              {" "}(a digital agency serving SWFL businesses). Along the way I&apos;ve
              picked up two granted US patents.
            </p>
            <p>
              I&apos;m most at home deep in infrastructure — debugging Docker containers at
              2am, setting up CI/CD pipelines, or standing up new services on AWS. I care
              about systems that are reliable, well-tested, and simple enough to hand off.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me tweaking my home lab or
              working on electronics projects.
            </p>

            {/* Links */}
            <nav className="flex flex-wrap gap-4 pt-4" aria-label="External profiles">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-amber hover:text-amber-light transition-colors"
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </nav>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal delay={200} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
            {skillGroups.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-mono font-semibold text-amber mb-2 uppercase tracking-wider">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 text-xs font-mono text-muted bg-surface rounded-md border border-border hover:border-border-hover hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
