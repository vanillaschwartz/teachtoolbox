export function Tag({ children, tone = "slate" }: { children: React.ReactNode; tone?: "slate" | "green" | "violet" | "amber" }) {
  const t = { slate: "bg-slate-100 text-slate-700", green: "bg-emerald-100 text-emerald-800", violet: "bg-violet-100 text-violet-800", amber: "bg-amber-100 text-amber-800" }[tone];
  return <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${t}`}>{children}</span>;
}
