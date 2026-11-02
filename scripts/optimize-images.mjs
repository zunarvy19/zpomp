import sharp from "sharp";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const sources = [
  "hero-technician-ai-v1.png",
  "servis-pompa-jetpump.jpg",
  "pemasangan-part-pompa.jpg",
  "pemasangan-pompa-baru.jpg",
  "proyek-bor-sumur-1.jpg",
  "proyek-perumahan.jpg",
  "gallery-pemeriksaan-ai-v2.png",
  "gallery-instalasi-ai-v1.png",
  "gallery-filter-ai-v1.png",
];

for (const source of sources) {
  const input = fileURLToPath(new URL(`../public/images/${source}`, import.meta.url));
  const stem = source.replace(/\.[^.]+$/, "");
  for (const width of [640, 960, 1280]) {
    const output = fileURLToPath(new URL(`../public/images/${stem}-${width}.webp`, import.meta.url));
    await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(output);
    console.log(`${stem}-${width}.webp: ${Math.round((await stat(output)).size / 1024)} KB`);
  }
}
