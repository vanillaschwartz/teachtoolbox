import Link from "next/link";
import type { Metadata } from "next";
import { tools, SITE } from "@/lib/data";
import { ToolCard } from "@/components/ToolCard";
export const metadata: Metadata = { title: "AI for teachers", description: "Teacher-safe AI tools, free AI literacy curriculum, and hands-on classroom AI lesson ideas (like training your own model with Teachable Machine) for K–5 educators.", alternates: { canonical: "/ai-for-teachers" } };
export default function Page() {
  const ai = tools.filter((t) => t.ai);
  // Structured data: CollectionPage + ItemList of AI tools, so search engines understand the hub as a curated list.
  const ld = { "@context": "https://schema.org", "@type": "CollectionPage", name: "AI for elementary teachers", url: `${SITE.url}/ai-for-teachers`,
    description: "Teacher-safe AI tools, free AI literacy curriculum, and hands-on classroom AI lesson ideas for K–5 educators.",
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url }, audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
    mainEntity: { "@type": "ItemList", numberOfItems: ai.length, itemListElement: ai.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: `${SITE.url}/tools/${t.slug}` })) } };
  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
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
          <li><strong>How does the computer hear me?</strong> in a teacher-led demo, read a sentence aloud into a speech-to-text reading tool such as <Link className="text-brand-600 underline" href="/tools/microsoft-reading-coach">Microsoft Reading Coach</Link>, then try mumbling or reading fast. Discuss why AI sometimes mishears and why a person should check its feedback. Browse more <Link className="text-brand-600 underline" href="/category/math-science-reading">reading and math tools</Link>.</li>
          <li><strong>Hint, not answer:</strong> on the board, compare two AI helpers in a teacher-led demo: one that just gives the answer and one that asks a guiding question, like the hint-first tutor in <Link className="text-brand-600 underline" href="/tools/flint">Flint</Link> or the revision feedback in <Link className="text-brand-600 underline" href="/tools/quill">Quill.org</Link>. Students vote on which helper helps them learn more and explain why. See all <Link className="text-brand-600 underline" href="/category/ai-tools">AI tools for teachers</Link>.</li>
          <li><strong>Why did the AI guess that?</strong> project <Link className="text-brand-600 underline" href="/tools/quick-draw">Quick, Draw!</Link> and let students call out what the teacher should doodle while the neural network guesses. Afterward, look at the drawings it learned from and discuss: AI learns from lots of examples, so unusual drawings confuse it, just like an AI reading buddy such as <Link className="text-brand-600 underline" href="/tools/read-along">Read Along by Google</Link> learns from many voices. Find more lessons in <Link className="text-brand-600 underline" href="/category/digital-citizenship">digital citizenship &amp; AI literacy</Link>.</li>
          <li><strong>Train a robot helper:</strong> in <Link className="text-brand-600 underline" href="/tools/teachable-machine">Teachable Machine</Link>, the teacher trains two classes (for example, &ldquo;thumbs up&rdquo; and &ldquo;thumbs down&rdquo; or two classroom objects) with student volunteers giving examples. Test it, then retrain with only a few examples or one background and see it get confused. Discuss: who chose the examples, and what happens when some people or things are left out? Pair it with the free grade-by-grade units from <Link className="text-brand-600 underline" href="/tools/day-of-ai">Day of AI</Link> for a full AI literacy sequence.</li>
          <li><strong>Clean the ocean, check the bias:</strong> run the free Code.org activity <Link className="text-brand-600 underline" href="/tools/ai-for-oceans">AI for Oceans</Link> as a whole class (about 45 minutes, grades 2–5). Students label images as &ldquo;fish&rdquo; or &ldquo;not fish&rdquo; to train the AI, then choose their own labels for new sea creatures. Afterward, ask: what happened when we labeled things carelessly, and whose ideas of &ldquo;fish&rdquo; did the AI learn? Older or Scratch-savvy students can go further by building their own model in <Link className="text-brand-600 underline" href="/tools/machine-learning-for-kids">Machine Learning for Kids</Link>. Browse more <Link className="text-brand-600 underline" href="/category/coding-computer-science">coding &amp; computer science tools</Link>.</li>
        </ul>
        <p className="mt-3 text-sm text-slate-600">More printables and AI classroom materials from the creator are coming soon. <Link className="text-brand-600 underline" href="/#newsletter">Get notified</Link>.</p>
      </section>
    </div>
  );
}
