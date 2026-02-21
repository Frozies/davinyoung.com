import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "SecureTap",
    role: "CTO & Co-Founder",
    description:
      "Blockchain-enabled product authentication platform using NFC tags and Hyperledger Fabric to combat counterfeiting. Patented technology. Demonstrated to 69+ companies including Fortune 500 brands.",
    techStack: [
      "Java",
      "Spring Boot",
      "Hyperledger Fabric",
      "AWS",
      "PostgreSQL",
      "PostGIS",
      "Docker",
      "Next.js",
      "React",
      "NFC/NDEF",
    ],
    links: [
      { label: "Website", href: "https://securetap.io" },
      { label: "Patent 1 (US 12,437,308 B2)", href: "https://patents.google.com/patent/US12437308B2/" },
      { label: "Patent 2 (US 2025/0285126 A1)", href: "https://patents.google.com/patent/US20250285126A1/" },
    ],
  },
  {
    name: "Sunset Vista Co.",
    role: "Founder & Lead Developer",
    description:
      "Digital marketing agency serving Southwest Florida businesses. SEO, Shopify development, and web design for local businesses.",
    techStack: ["Next.js", "Shopify Liquid", "Google Analytics", "SEO Tooling"],
    links: [{ label: "Website", href: "https://sunsetvista.co" }],
  },
  {
    name: "Zak's Jewelry",
    role: "Lead Developer",
    description:
      "Custom Shopify storefront for a Southwest Florida jeweler. Built a conversion-optimized e-commerce experience with ad analytics integration and ongoing SEO.",
    techStack: ["Shopify Liquid", "Google Analytics", "Google Ads", "SEO"],
    links: [{ label: "Website", href: "https://zaksjewelry.com" }],
  },
  {
    name: "Petal Patch Florist",
    role: "Lead Developer",
    description:
      "Shopify e-commerce build for a Cape Coral florist. Designed and developed a full online storefront for local and delivery orders.",
    techStack: ["Shopify Liquid", "Google Analytics", "SEO"],
    links: [{ label: "Website", href: "https://petalpatchflorist.com" }],
  },
  {
    name: "Home Lab Infrastructure",
    role: "Personal Project",
    description:
      "Multi-server home lab running Docker, Traefik reverse proxy, Tailscale VPN mesh, self-hosted services, CI/CD pipelines with GitHub Actions and self-hosted runners.",
    techStack: [
      "Ubuntu Server",
      "Docker",
      "Traefik",
      "Tailscale",
      "GitHub Actions",
      "Nginx",
      "PostgreSQL",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Frozies" }],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <p className="mt-4 text-muted max-w-xl">
            Products, platforms, and infrastructure I&apos;ve built from the ground up.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 100}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
