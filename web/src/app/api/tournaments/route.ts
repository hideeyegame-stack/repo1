import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/server/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const userId = session && (session.user as (typeof session.user & { id?: string }))?.id;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { title, startAt, game, mode, entryPoints, settings } = body;

  try {
    const tournament = await prisma.tournament.create({
      data: {
        title,
        startAt: new Date(startAt),
        game,
        mode,
        entryPoints,
        settings,
        createdById: userId,
      },
    });
    return NextResponse.json({ id: tournament.id });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function GET() {
  const tournaments = await prisma.tournament.findMany({
    orderBy: { startAt: "asc" },
    take: 20,
  });
  return NextResponse.json(tournaments);
}
