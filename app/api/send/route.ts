import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const res = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "hello world",
    html: "<strong>it works!</strong>",
  })

  return NextResponse.json({ id: res.id })
}
