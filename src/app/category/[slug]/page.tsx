import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { categories, catBySlug, tools, SITE } from "@/lib/data";
import { ToolCard } from "@/components/ToolCard";

export const dynamicParams = false;
export function generateStaticParams() { return categories.map((c) => ({ slug: c.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = catBySlug(params.slug); if (!c) return {};
  const description = catDescription(c.slug);
  return { title: `${c.name} for K–5 teachers`, description, alternates: { canonical: `/category/${c.slug}` }, openGraph: { title: `${c.name} for K–5 teachers | ${SITE.name}`, description } };
}
// Richer, category-specific meta description: blurb + tool count + free count + example tool names, trimmed to ~160 chars.
function catDescription(slug: string): string {
  const c = catBySlug(slug)!;
  const list = tools.filter((t) => t.category === slug);
  const free = list.filter((t) => t.price === "Free").length;
  const names = list.slice(0, 3).map((t) => t.name.replace(/ \(.*\)$/, "")).join(", ");
  const base = `${c.blurb} ${list.length} K–5 picks${free ? ` (${free} free)` : ""}`;
  const full = `${base}, incl. ${names}.`;
  return full.length <= 160 ? full : `${base}.`;
}
export default function Page({ params }: { params: { slug: string } }) {
  const c = catBySlug(params.slug); if (!c) notFound();
  const list = tools.filter((t) => t.category === c.slug);
  const ld = { "@context": "https://schema.org", "@type": "CollectionPage", name: c.name, description: catDescription(c.slug),
    mainEntity: { "@type": "ItemList", itemListElement: list.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: `${SITE.url}/tools/${t.slug}` })) } };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <h1 className="text-3xl font-extrabold">{c.emoji} {c.name}</h1>
      <p className="mb-5 mt-1 text-slate-600">{c.blurb}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{list.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>
      <nav aria-label="Other categories" className="mt-8 border-t pt-4">
        <h2 className="text-lg font-bold">Explore more K–5 tool categories</h2>
        <ul className="mt-2 flex flex-wrap gap-2 text-sm">
          {categories.filter((o) => o.slug !== c.slug).map((o) => (
            <li key={o.slug}><Link href={`/category/${o.slug}`} className="rounded-full border px-3 py-1 hover:bg-slate-50">{o.emoji} {o.name}</Link></li>
          ))}
          <li><Link href="/ai-for-teachers" className="rounded-full border px-3 py-1 hover:bg-slate-50">✨ AI for teachers hub</Link></li>
        </ul>
      </nav>
    </div>
  );
}
