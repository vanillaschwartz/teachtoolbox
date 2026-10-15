import type { Metadata } from "next";
import { SITE } from "@/lib/data";
export const metadata: Metadata = { title: "About", description: `About ${SITE.name}, a free directory of tech and AI tools for elementary teachers.`, alternates: { canonical: "/about" } };
export default function Page() {
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      <h1 className="text-3xl font-extrabold">About {SITE.name}</h1>
      <p className="text-slate-700">{SITE.name} is a free directory of tech and AI tools for elementary (K–5) teachers, curated by an elementary computer teacher who is always hunting for tools that actually work in a real classroom.</p>
      <p className="text-slate-700">Each listing includes what the tool does, a grade range, whether it is free or has a free tier, and privacy notes to help you start a conversation with your district. We are not lawyers; nothing here is legal advice.</p>
      <p className="text-slate-700">In the future the site may include sponsored listings, affiliate links, and the creator&apos;s own paid teaching resources. These will always be labeled.</p>
    </div>
  );
}
