import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ---------- CORS ----------
const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5173",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Répondre à la requête pré-vol
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// ---------- COMMENTAIRES EN MÉMOIRE ----------
let comments: { name: string; message: string }[] = [];

// ---------- ROUTE GET ----------
export async function GET() {
  return NextResponse.json({ comments }, { headers: corsHeaders });
}

// ---------- ROUTE POST ----------
export async function POST(req: NextRequest) {
  try {
    const { name, message } = await req.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: "Message vide" }, { status: 400, headers: corsHeaders });
    }

    const sanitizedName = name?.trim() || "Anonyme";
    const sanitizedMessage = message.trim();

    comments.push({ name: sanitizedName, message: sanitizedMessage });

    return NextResponse.json({ success: true, comments }, { headers: corsHeaders });
  } catch (err) {
    console.error("Erreur dans /api/comments :", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500, headers: corsHeaders });
  }
}
