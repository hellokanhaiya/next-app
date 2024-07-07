import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
export async function POST(request) {
  const data = await request.formData();

  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ message: "no image fouund", success: false });
  }
  const bytedata = await file.arrayBuffer();
  const buffer = Buffer.from(bytedata);
  const path = `./public/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json({ message: "file uploaded", success: true });
}
