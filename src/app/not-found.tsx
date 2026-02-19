import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-mono text-6xl font-bold text-amber">404</p>
          <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
          <p className="mt-3 text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-amber text-background font-semibold text-sm rounded-lg hover:bg-amber-light transition-colors"
          >
            Go home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
