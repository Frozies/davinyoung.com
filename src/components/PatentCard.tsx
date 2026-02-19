interface PatentCardProps {
  title: string;
  number: string;
  status: string;
  serial: string;
  date: string;
  summary: string;
  link?: string;
}

export default function PatentCard({
  title,
  number,
  status,
  serial,
  date,
  summary,
  link,
}: PatentCardProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-surface p-7 sm:p-8 transition-all duration-300 hover:border-amber/30 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)]">
      {/* Status badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full ${
          status === "Granted"
            ? "bg-green-500/10 text-green-400 border border-green-500/20"
            : "bg-amber/10 text-amber border border-amber/20"
        }`}>
          {status === "Granted" ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          )}
          {status}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white leading-snug">{title}</h3>

      <div className="mt-2 space-y-0.5">
        <p className="font-mono text-sm text-amber">{number}</p>
        <p className="font-mono text-xs text-muted">Serial No. {serial}</p>
        <p className="text-xs text-muted">{date}</p>
      </div>

      <p className="mt-4 text-sm text-muted leading-relaxed">{summary}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-amber hover:text-amber-light transition-colors"
        >
          View on Google Patents
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
}
