"use client";
import { useState } from "react";
import { Tool } from "@/lib/data";
import { ToolCard } from "./ToolCard";
export function Search({ tools }: { tools: Tool[] }) {
  const [q, setQ] = useState("");
  const s = q.trim().toLowerCase();
  const res = s ? tools.filter((t) => `${t.name} ${t.what} ${t.grades} ${t.category} ${t.ai ? "ai" : ""}`.toLowerCase().includes(s)) : [];
  return (
    <div>
      <label htmlFor="q" className="sr-only">Search tools</label>
      <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tools (try “coding”, “quiz”, “AI”)…"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
      {s && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-slate-600">{res.length} result{res.length === 1 ? "" : "s"}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{res.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>
        </div>
      )}
    </div>
  );
}
