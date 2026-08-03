import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { env } from "@/lib/env";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Neispravni podaci u formi.", errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = parsed.data;

  if (!env.MAILJET_API_KEY || !env.MAILJET_SECRET_KEY || !env.SITE_MAIL_SENDER || !env.SITE_MAIL_RECEIVER) {
    console.error("Mailjet nije konfigurisan (nedostaju env varijable).");
    return NextResponse.json(
      { success: false, message: "Slanje poruke trenutno nije dostupno. Pozovite nas direktno telefonom." },
      { status: 500 }
    );
  }

  const auth = Buffer.from(`${env.MAILJET_API_KEY}:${env.MAILJET_SECRET_KEY}`).toString("base64");

  const mailjetResponse = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: env.SITE_MAIL_SENDER, Name: "HausMajstor Beograd - sajt" },
          To: [{ Email: env.SITE_MAIL_RECEIVER, Name: "HausMajstor Beograd" }],
          ReplyTo: { Email: email, Name: name },
          Subject: `Nova poruka sa sajta - ${name}`,
          TextPart: [
            `Ime: ${name}`,
            `Email: ${email}`,
            phone ? `Telefon: ${phone}` : null,
            "",
            "Poruka:",
            message,
          ]
            .filter(Boolean)
            .join("\n"),
        },
      ],
    }),
  });

  if (!mailjetResponse.ok) {
    const errorBody = await mailjetResponse.text();
    console.error("Mailjet greška:", mailjetResponse.status, errorBody);
    return NextResponse.json(
      { success: false, message: "Došlo je do greške pri slanju poruke. Pokušajte ponovo ili nas pozovite." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, message: "Poruka je uspešno poslata." });
}
