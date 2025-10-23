import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

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

// Mémoire pour les commentaires
let comments: { name: string; message: string }[] = [];

// GET pour récupérer les commentaires
export async function GET() {
  return NextResponse.json({ comments }, { headers: corsHeaders });
}

// POST pour envoyer un commentaire
export async function POST(req: NextRequest) {
  try {
    const { name, message } = await req.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message vide" },
        { status: 400, headers: corsHeaders }
      );
    }

    const sanitizedName = name?.trim() || "Anonyme";
    const sanitizedMessage = message.trim();

    comments.push({ name: sanitizedName, message: sanitizedMessage });

    return NextResponse.json({ success: true, comments }, { headers: corsHeaders });
  } catch (err) {
    console.error("Erreur /api/comments :", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500, headers: corsHeaders }
    );
  }
}
