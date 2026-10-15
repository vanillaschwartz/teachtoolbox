import Link from "next/link";
import { categories, tools } from "@/lib/data";
import { Search } from "@/components/Search";
import { ToolCard } from "@/components/ToolCard";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  const ai = tools.filter((t) => t.ai).slice(0, 6);
  const creator = tools.filter((t) => t.creator);
  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white sm:p-10">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Tech &amp; AI tools for K–5 teachers, all in one place</h1>
        <p className="mt-2 max-w-2xl text-brand-100">A free, hand-picked directory of {tools.length} classroom tools, with grade ranges, free/paid info, and privacy notes. Curated by an elementary teacher.</p>
        <div className="mt-5 text-slate-900"><Search tools={tools} /></div>
      </section>

      <section aria-labelledby="cats">
        <h2 id="cats" className="mb-3 text-xl font-bold">Browse by category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium hover:border-brand-500">{c.emoji} {c.name}</Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="ai" className="rounded-2xl border border-violet-200 bg-violet-50 p-4 sm:p-6">
        <div className="flex items-end justify-between gap-2">
          <h2 id="ai" className="text-xl font-bold">✨ Featured: AI for teachers</h2>
          <Link href="/ai-for-teachers" className="text-sm font-semibold text-violet-800 underline">AI hub →</Link>
        </div>
        <p className="mb-3 mt-1 text-sm text-slate-700">Teacher-facing AI tools and AI literacy resources. Always check your district&apos;s AI policy first.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{ai.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>
      </section>

      <section aria-labelledby="creator">
        <h2 id="creator" className="mb-3 text-xl font-bold">🍎 From the creator</h2>
        <div className="grid gap-3 sm:grid-cols-2">{creator.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>
      </section>

      <section id="newsletter" className="card">
        <h2 className="text-xl font-bold">Weekly new-tool picks</h2>
        <p className="mb-3 mt-1 text-sm text-slate-600">One short email a week. No spam.</p>
        <Newsletter />
      </section>
    </div>
  );
}
