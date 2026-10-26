import type { Metadata } from "next";
export const metadata: Metadata = { title: "Sponsor us", description: "Reach K–5 teachers by sponsoring a listing on TeachToolbox.", alternates: { canonical: "/sponsor" } };
export default function Page() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-extrabold">Sponsor us</h1>
      <p className="mt-2 text-slate-700">TeachToolbox is a new, independent directory for elementary teachers. Sponsored listings will be clearly labeled so teachers always know what is paid.</p>
      <div className="card mt-5">
        <h2 className="font-bold">Interested?</h2>
        <p className="mt-1 text-sm text-slate-700">Sponsor packages are not open yet. Email us to join the early-interest list and we will reach out when they launch.</p>
        <p className="mt-2"><a className="text-brand-600 underline" href="mailto:vanillaschwartz@gmail.com?subject=Sponsorship%20interest">vanillaschwartz@gmail.com</a> <span className="text-xs text-slate-500">(placeholder address, to be replaced)</span></p>
      </div>
      <p className="mt-4 text-sm text-slate-500">No payments are accepted through this site at this time.</p>
    </div>
  );
}
