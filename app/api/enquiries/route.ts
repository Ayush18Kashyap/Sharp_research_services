import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { enquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a hidden field real visitors never see or fill in. Bots that
  // auto-fill every field trip it — we quietly pretend success and skip
  // the insert, rather than telling the bot its submission was rejected.
  if (typeof body === "object" && body !== null && "company_website" in body) {
    const honeypot = (body as Record<string, unknown>).company_website;
    if (typeof honeypot === "string" && honeypot.length > 0) {
      return NextResponse.json({ ok: true });
    }
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form for errors and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, phone, service, message, source } = parsed.data;

  const { error } = await supabaseAdmin.from("enquiries").insert({
    name,
    email: email || null,
    phone,
    service: service || null,
    message: message || null,
    source,
  });

  if (error) {
    console.error("Failed to store enquiry:", error);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again or call us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
