import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { tools, toolBySlug, catBySlug, SITE, type Tool } from "@/lib/data";
import { Tag } from "@/components/Tag";

export const dynamicParams = false;
export function generateStaticParams() { return tools.map((t) => ({ slug: t.slug })); }
// Search-friendly summary: name, price, and AI label up front, grades added when room allows, trimmed to ~155 characters.
function metaDescription(t: Tool): string {
  const kind = t.ai ? "AI tool" : "tool";
  const label = t.price === "Free" ? `a free ${kind}` : t.price === "Paid" ? `a paid ${kind}` : `${t.ai ? "an" : "a"} ${kind} with a free tier`;
  const full = `${t.name}, ${label} for teachers. ${t.what}`;
  const withGrades = `${full} Grades: ${t.grades}.`;
  if (withGrades.length <= 155) return withGrades;
  if (full.length <= 155) return full;
  const cut = full.slice(0, 152);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "") + "…";
}
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = toolBySlug(params.slug); if (!t) return {};
  const desc = metaDescription(t);
  return { title: `${t.name} for teachers`, description: desc, alternates: { canonical: `/tools/${t.slug}` }, openGraph: { title: `${t.name} | ${SITE.name}`, description: desc } };
}
export default function Page({ params }: { params: { slug: string } }) {
  const t = toolBySlug(params.slug); if (!t) notFound();
  const c = catBySlug(t.category);
  const related = tools.filter((x) => x.category === t.category && x.slug !== t.slug).slice(0, 3);
  const ld = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: t.name, description: t.what, url: t.url,
    applicationCategory: "EducationalApplication", audience: { "@type": "EducationalAudience", educationalRole: "teacher" } };
  return (
    <article className="mx-auto max-w-2xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <p className="text-sm"><Link className="text-brand-600 underline" href="/">Home</Link> / <Link className="text-brand-600 underline" href={`/category/${t.category}`}>{c?.name}</Link></p>
      <h1 className="mt-2 text-3xl font-extrabold">{t.name}</h1>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {t.creator && <Tag tone="amber">From the creator</Tag>}{t.ai && <Tag tone="violet">AI</Tag>}
        <Tag tone={t.price === "Free" ? "green" : "slate"}>{t.price}</Tag><Tag>Grades: {t.grades}</Tag>
      </div>
      <dl className="mt-5 space-y-4">
        <div><dt className="font-bold">What it does</dt><dd className="text-slate-700">{t.what}</dd></div>
        <div><dt className="font-bold">Why teachers like it</dt><dd className="text-slate-700">{t.why}</dd></div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3"><dt className="font-bold">Privacy &amp; COPPA notes</dt><dd className="text-sm text-slate-700">{t.privacy} This is not legal advice; check with your district.</dd></div>
      </dl>
      <a href={t.url} target="_blank" rel="noopener noreferrer" className="btn mt-6">Visit {t.name} ↗</a>
      {t.tpt && <a href={t.tpt} target="_blank" rel="noopener noreferrer" className="btn mt-6 ml-3">Full version on Teachers Pay Teachers ↗</a>}
      {t.ai && (
        <p className="mt-6 rounded-lg border border-violet-200 bg-violet-50 p-3 text-sm text-slate-700">Using AI with K–5 students? See our <Link className="text-brand-600 underline" href="/ai-for-teachers">AI for teachers hub</Link> for a safe-use checklist and no-account AI lesson ideas, or browse all <Link className="text-brand-600 underline" href="/category/ai-tools">AI tools for teachers</Link>.</p>
      )}
      <p className="mt-2 text-xs text-slate-500">Pricing and features change. Confirm details on the tool&apos;s website.</p>
      {related.length > 0 && (
        <div className="mt-8"><h2 className="font-bold">More in {c?.name}</h2>
          <ul className="mt-2 list-disc pl-5">{related.map((r) => <li key={r.slug}><Link className="text-brand-600 underline" href={`/tools/${r.slug}`}>{r.name}</Link></li>)}</ul></div>
      )}
    </article>
  );
}
