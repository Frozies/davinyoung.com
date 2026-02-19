export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Davin Young.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Frozies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/davin-young-engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/blog"
            className="text-sm text-muted hover:text-white transition-colors"
          >
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}
