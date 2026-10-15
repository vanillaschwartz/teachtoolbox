"use client";
import { useState } from "react";
export function Newsletter() {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const r = await fetch("/api/subscribe", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email }) });
    setState(r.ok ? "ok" : "err");
  }
  return (
    <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row">
      <label htmlFor="email" className="sr-only">Email</label>
      <input id="email" name="email" type="email" required placeholder="you@school.org" className="flex-1 rounded-lg border border-slate-300 px-3 py-2.5" />
      <button className="btn" type="submit">Get the weekly picks</button>
      {state === "ok" && <p className="text-sm text-emerald-700 sm:self-center">Thanks! You&apos;re on the list.</p>}
      {state === "err" && <p className="text-sm text-red-700 sm:self-center">Please enter a valid email.</p>}
    </form>
  );
}
