import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { naam, email, telefoon, behandeling, bericht } = await req.json();

    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Mailservice niet geconfigureerd." },
        { status: 500 }
      );
    }

    const behandelingLabel: Record<string, string> = {
      "botox-bruxisme": "Botox Bruxisme",
      "gummy-smile": "Gummy Smile",
      "slaapapneu": "Slaapapneu Screening",
      "consult": "Algemeen Consult",
      "anders": "Anders",
    };

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ORAVIVUM Website <noreply@oravivum.nl>",
        to: ["balie@orthodontiemuseumplein.nl"],
        subject: `Nieuwe aanvraag ORAVIVUM — ${naam}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1A5C5E; padding: 20px 24px;">
              <h1 style="color: #fff; font-size: 20px; margin: 0;">ORAVIVUM</h1>
              <p style="color: rgba(255,255,255,0.7); font-size: 12px; margin: 4px 0 0;">Nieuwe afspraak aanvraag via de website</p>
            </div>
            <div style="padding: 24px; background: #f9f7f4;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Naam</td>
                  <td style="padding: 8px 0; color: #333;">${naam}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">E-mail</td>
                  <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #1A5C5E;">${email}</a></td>
                </tr>
                ${telefoon ? `<tr>
                  <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Telefoon</td>
                  <td style="padding: 8px 0; color: #333;"><a href="tel:${telefoon}" style="color: #1A5C5E;">${telefoon}</a></td>
                </tr>` : ""}
                ${behandeling ? `<tr>
                  <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Behandeling</td>
                  <td style="padding: 8px 0; color: #333;">${behandelingLabel[behandeling] || behandeling}</td>
                </tr>` : ""}
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Bericht</td>
                  <td style="padding: 8px 0; color: #333;">${bericht.replace(/\n/g, "<br>")}</td>
                </tr>
              </table>
            </div>
            <div style="padding: 16px 24px; background: #eee; font-size: 11px; color: #999;">
              Dit bericht is automatisch verzonden via het contactformulier op oravivum.nl
            </div>
          </div>
        `,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Mail kon niet worden verzonden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Er ging iets mis." },
      { status: 500 }
    );
  }
}
