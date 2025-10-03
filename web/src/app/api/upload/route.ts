import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }
  const uploadsDir = process.env.UPLOAD_DIR || "public/uploads";
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9_.-]/g, "_")}`;
  const filePath = path.join(process.cwd(), uploadsDir, fileName);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, buffer);
  const publicPath = `/uploads/${fileName}`;
  return NextResponse.json({ url: publicPath });
}
