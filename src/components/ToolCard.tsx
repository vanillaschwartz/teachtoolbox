import Link from "next/link";
import { Tool, catBySlug } from "@/lib/data";
import { Tag } from "./Tag";
export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={`/tools/${tool.slug}`} className="card block transition hover:border-brand-500 hover:shadow">
      <div className="flex flex-wrap items-center gap-1.5">
        {tool.creator && <Tag tone="amber">From the creator</Tag>}
        {tool.ai && <Tag tone="violet">AI</Tag>}
        <Tag tone={tool.price === "Free" ? "green" : "slate"}>{tool.price}</Tag>
        <Tag>{tool.grades}</Tag>
      </div>
      <h3 className="mt-2 text-lg font-bold">{tool.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{tool.what}</p>
      <p className="mt-2 text-xs text-slate-500">{catBySlug(tool.category)?.name}</p>
    </Link>
  );
}
