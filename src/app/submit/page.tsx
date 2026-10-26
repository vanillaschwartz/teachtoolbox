import type { Metadata } from "next";
export const metadata: Metadata = { title: "Submit a tool", description: "Suggest a tech or AI tool for K–5 teachers.", alternates: { canonical: "/submit" } };
export default function Page() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-extrabold">Submit a tool</h1>
      <p className="mt-2 text-slate-700">Know a great tool for elementary classrooms? Send us the name, link, grade range, and a sentence about why teachers like it. We review every suggestion.</p>
      <div className="card mt-5">
        <p className="font-semibold">Email your suggestion to:</p>
        <p className="mt-1"><a className="text-brand-600 underline" href="mailto:vanillaschwartz@gmail.com?subject=Tool%20suggestion">vanillaschwartz@gmail.com</a> <span className="text-xs text-slate-500">(placeholder address, to be replaced)</span></p>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-600"><li>Tool name and link</li><li>Grade range</li><li>Free, free tier, or paid</li><li>Any privacy info you know (we verify before listing)</li></ul>
      </div>
    </div>
  );
}
