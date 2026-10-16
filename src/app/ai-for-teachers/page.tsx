import Link from "next/link";
import type { Metadata } from "next";
import { tools } from "@/lib/data";
import { ToolCard } from "@/components/ToolCard";
export const metadata: Metadata = { title: "AI for teachers", description: "Teacher-safe AI tools, AI literacy resources, and classroom AI lesson ideas for K–5 educators.", alternates: { canonical: "/ai-for-teachers" } };
export default function Page() {
  const ai = tools.filter((t) => t.ai);
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-extrabold">✨ AI for elementary teachers</h1>
        <p className="mt-2 max-w-2xl text-slate-700">Practical ways to use AI to save planning time, while keeping students safe. Most tools below are designed for the <em>teacher</em> to use, not for young students to use directly.</p>
      </header>
      <section className="card">
        <h2 className="text-xl font-bold">Safe-use checklist</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Check your district&apos;s AI and software policy first.</li>
          <li>Never enter student names, grades, or personal details into an AI tool.</li>
          <li>Review everything AI generates before it reaches students.</li>
          <li>Many AI tools set minimum age requirements. Check each tool&apos;s terms.</li>
          <li>Teach AI literacy: AI can be wrong, and people should check it.</li>
        </ul>
      </section>
      <section>
        <h2 className="mb-3 text-xl font-bold">AI tools &amp; resources</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{ai.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>
      </section>
      <section className="card">
        <h2 className="text-xl font-bold">AI lesson ideas for K–5 (no student accounts needed)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li><strong>Spot the AI:</strong> show a few AI-generated and human-made pictures and discuss how to tell.</li>
          <li><strong>Be the computer:</strong> an unplugged activity where students &ldquo;train&rdquo; a classmate to sort objects using examples.</li>
          <li><strong>Fact-check it:</strong> the teacher shows an AI answer with a mistake and the class finds it.</li>
          <li><strong>Prompt like a pro:</strong> students write clear instructions, then compare how a clearer prompt changes the result (teacher-run demo).</li>
          <li><strong>Explain your thinking:</strong> after a math or science problem, students practice saying <em>how</em> they got an answer (not just the answer). Connect this to tools that capture voice or drawings, and talk about why explaining helps both learning and AI feedback.</li>
        </ul>
        <p className="mt-3 text-sm text-slate-600">More printables and AI classroom materials from the creator are coming soon. <Link className="text-brand-600 underline" href="/#newsletter">Get notified</Link>.</p>
      </section>
    </div>
  );
}
