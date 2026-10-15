import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}: ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: "A free directory of tech tools, AI tools, and classroom materials for elementary (K–5) teachers, curated by an elementary teacher.",
  openGraph: { type: "website", siteName: SITE.name, title: `${SITE.name}: ${SITE.tagline}`, description: "Free directory of tech and AI tools for K–5 teachers.", url: SITE.url },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.tagline },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url, description: SITE.tagline,
    potentialAction: { "@type": "SearchAction", target: `${SITE.url}/?q={search_term_string}`, "query-input": "required name=search_term_string" } };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
            <Link href="/" className="text-xl font-extrabold text-brand-700">🧰 {SITE.name}</Link>
            <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-slate-700">
              <Link href="/ai-for-teachers">AI for teachers</Link>
              <Link href="/submit">Submit a tool</Link>
              <Link href="/sponsor">Sponsor</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
        <footer className="mt-10 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-500">
            <p>{SITE.name} is an independent directory. Listings are informational, not endorsements or legal advice. Always check with your district about approved tools and student privacy. Pricing and features change; confirm on each tool&apos;s site.</p>
            <p className="mt-2">Some links may become affiliate or sponsored links in the future; those will be labeled.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
