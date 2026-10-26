import type { Metadata } from "next";
export const metadata: Metadata = { title: "Sponsor us", description: "Reach K–5 teachers by sponsoring a listing on TeachToolbox.", alternates: { canonical: "/sponsor" } };
const SPONSOR_LINK = "https://buy.stripe.com/dRmdRafaobxAgx0aZI2Ry00";
export default function Page() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-extrabold">Sponsor us</h1>
      <p className="mt-2 text-slate-700">TeachToolbox is an independent directory of tech and AI tools for elementary teachers. Sponsored listings are always clearly labeled so teachers know what is paid.</p>
      <div className="card mt-5">
        <h2 className="text-xl font-bold">Founding Sponsor: $25/month</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Your tool featured at the top of TeachToolbox</li>
          <li>A clear sponsor badge on your listing</li>
          <li>Seen by K–5 teachers browsing tech and AI tools</li>
          <li>Cancel anytime</li>
        </ul>
        <a href={SPONSOR_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700">Become a founding sponsor, $25/month</a>
        <p className="mt-3 text-xs text-slate-500">Secure checkout by Stripe. After you subscribe, email <a className="underline" href="mailto:vanillaschwartz@gmail.com?subject=TeachToolbox%20sponsor">vanillaschwartz@gmail.com</a> with your tool name, link, and logo.</p>
      </div>
      <p className="mt-4 text-sm text-slate-500">Questions first? Email <a className="text-brand-600 underline" href="mailto:vanillaschwartz@gmail.com?subject=Sponsorship%20question">vanillaschwartz@gmail.com</a>.</p>
    </div>
  );
}
