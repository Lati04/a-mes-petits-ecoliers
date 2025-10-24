import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// URL frontend selon environnement
const FRONTEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://a-mes-petits-ecoliers.onrender.com"
    : "http://localhost:5173";

// CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": FRONTEND_URL,
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// OPTIONS pour pré-vol
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// Limite anti-spam basique
const lastSubmissions = new Map<string, number>();
const RATE_LIMIT_MS = 30_000;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresse e-mail invalide." },
        { status: 400, headers: corsHeaders }
      );
    }

    // Vérification anti-spam
    const now = Date.now();
    const lastTime = lastSubmissions.get(email);
    if (lastTime && now - lastTime < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Trop de tentatives rapprochées." },
        { status: 429, headers: corsHeaders }
      );
    }
    lastSubmissions.set(email, now);

    // Transporteur Brevo (Sendinblue)
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: process.env.BREVO_EMAIL,   
        pass: process.env.BREVO_API_KEY, 
      },
    });

    // Envoi du mail 
    await transporter.sendMail({
      from: `"Site Coloriages" <${process.env.BREVO_EMAIL}>`,
      to: process.env.BREVO_EMAIL,
      subject: "📬 Nouveau contact depuis le site",
      text: `Un visiteur a laissé son e-mail : ${email}`,
    });

    // Accusé de réception à l’utilisateur
    await transporter.sendMail({
      from: `"Latifa - À mes petits écoliers" <${process.env.BREVO_EMAIL}>`,
      to: email,
      subject: "Merci pour ton message 🌷",
      text: `Bonjour 🌸\n\nMerci d’avoir pris contact ! Je te répondrai dès que possible.\n\nLatifa`,
    });

    return NextResponse.json({ success: true }, { headers: corsHeaders });
  } catch (err) {
    console.error("Erreur /api/contact :", err);
    return NextResponse.json(
      { error: "Erreur lors de l’envoi de l’e-mail." },
      { status: 500, headers: corsHeaders }
    );
  }
}
