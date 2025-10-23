import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// URL du frontend selon l'environnement
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

// Mémoire pour limiter les requêtes
const lastSubmissions = new Map<string, number>();
const RATE_LIMIT_MS = 30_000;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
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

    // Transporteur nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASSWORD,
      },
    });

    // Email à toi
    await transporter.sendMail({
      from: `"Site Coloriages" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "Nouveau contact depuis le site",
      text: `Email de l'utilisateur : ${email}`,
    });

    // Email de confirmation à l’utilisateur
    await transporter.sendMail({
      from: `"Site Coloriages" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: "Merci pour ton message 🌸",
      text: `Bonjour ! Merci pour ton contact. Je te répondrai dès que possible.\n\nLatifa 🌷`,
    });

    return NextResponse.json({ success: true }, { headers: corsHeaders });
  } catch (err) {
    console.error("Erreur /api/contact :", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500, headers: corsHeaders }
    );
  }
}
