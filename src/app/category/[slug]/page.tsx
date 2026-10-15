import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, catBySlug, tools, SITE } from "@/lib/data";
import { ToolCard } from "@/components/ToolCard";

export const dynamicParams = false;
export function generateStaticParams() { return categories.map((c) => ({ slug: c.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = catBySlug(params.slug); if (!c) return {};
  return { title: c.name, description: c.blurb, alternates: { canonical: `/category/${c.slug}` }, openGraph: { title: `${c.name} | ${SITE.name}`, description: c.blurb } };
}
export default function Page({ params }: { params: { slug: string } }) {
  const c = catBySlug(params.slug); if (!c) notFound();
  const list = tools.filter((t) => t.category === c.slug);
  const ld = { "@context": "https://schema.org", "@type": "CollectionPage", name: c.name, description: c.blurb,
    mainEntity: { "@type": "ItemList", itemListElement: list.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: `${SITE.url}/tools/${t.slug}` })) } };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <h1 className="text-3xl font-extrabold">{c.emoji} {c.name}</h1>
      <p className="mb-5 mt-1 text-slate-600">{c.blurb}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{list.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>
    </div>
  );
}
