import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Mémoire pour les commentaires
const comments: { name: string; message: string }[] = [];

// Helper pour CORS dynamique
function getCorsHeaders(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigins = [
    "https://a-mes-petits-ecoliers.onrender.com",
    "http://localhost:5173",
  ];
  return {
    "Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : "",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// OPTIONS handler (preflight)
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(req) });
}

// GET handler
export async function GET(req: NextRequest) {
  return NextResponse.json({ comments }, { headers: getCorsHeaders(req) });
}

// POST handler
export async function POST(req: NextRequest) {
  try {
    const { name, message } = await req.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message vide" },
        { status: 400, headers: getCorsHeaders(req) }
      );
    }

    const sanitizedName = name?.trim() || "Anonyme";
    const sanitizedMessage = message.trim();

    comments.push({ name: sanitizedName, message: sanitizedMessage });

    return NextResponse.json(
      { success: true, comments },
      { headers: getCorsHeaders(req) }
    );
  } catch (err) {
    console.error("Erreur /api/comments :", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500, headers: getCorsHeaders(req) }
    );
  }
}
