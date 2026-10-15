import { NextResponse } from "next/server";
import { appendFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";

// PLACEHOLDER: stores nothing durable and sends nothing.
// Appends to a temp file and logs. Swap for Resend/a DB later (see README).
export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({ email: "" }));
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  try { await appendFile(join(tmpdir(), "subscribers.jsonl"), JSON.stringify({ email, at: new Date().toISOString() }) + "\n"); } catch {}
  console.log("[newsletter-placeholder] signup", email);
  return NextResponse.json({ ok: true });
}
