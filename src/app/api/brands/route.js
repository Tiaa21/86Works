// app/api/brands/route.js

import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  try {
    const brandsDir = path.join(
      process.cwd(),
      "public",
      "images",
      "brands"
    );

    const files = fs.readdirSync(brandsDir);

    const imageFiles = files.filter((file) =>
      /\.(png|jpg|jpeg|svg|webp)$/i.test(file)
    );

    return Response.json(imageFiles);
  } catch (err) {
    console.error(err);

    return Response.json(
      { error: "Failed to load brands" },
      { status: 500 }
    );
  }
}