interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectCardProps {
  name: string;
  role: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
  highlights?: string[];
}

export default function ProjectCard({
  name,
  role,
  description,
  techStack,
  links,
  highlights,
}: ProjectCardProps) {
  return (
    <div className="group relative h-full flex flex-col rounded-xl border border-border bg-surface p-7 sm:p-8 transition-all duration-300 hover:border-amber/30 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="mt-1 text-sm font-mono text-amber">{role}</p>
        </div>
        <div className="flex items-center gap-2">
          {links.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-amber transition-colors"
              aria-label={link.label}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted leading-relaxed">{description}</p>

      {highlights && highlights.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold text-foreground mb-2">Client Highlights</p>
          <ul className="space-y-1">
            {highlights.map((h) => (
              <li key={h} className="text-xs text-muted flex items-start gap-2">
                <span className="text-amber mt-0.5">-</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech stack tags */}
      <div className="mt-auto pt-5 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="inline-block px-2.5 py-1 text-xs font-mono text-muted bg-background rounded-md border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-5 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber hover:text-amber-light transition-colors underline underline-offset-2"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
