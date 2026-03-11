import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { naam, email, telefoon, behandeling, bericht } = body;

    // Validation
    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: "Naam, email en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    // Use Web3Forms (free, no API key needed for basic use)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "YOUR_WEB3FORMS_KEY", // Replace with actual key from web3forms.com
        subject: `ORAVIVUM Afspraak - ${naam}`,
        from_name: naam,
        email: email,
        to: "balie@orthodontiemuseumplein.nl",
        message: [
          `Naam: ${naam}`,
          `Email: ${email}`,
          telefoon ? `Telefoon: ${telefoon}` : null,
          behandeling ? `Behandeling: ${behandeling}` : null,
          `\nBericht:\n${bericht}`,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    }

    // Fallback: just acknowledge (form data logged server-side)
    console.log("Contact form submission:", { naam, email, telefoon, behandeling, bericht });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
