const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

// All images to convert (relative to public dir)
const IMAGES_TO_CONVERT = [
  // Root public
  "profile.jpg",
  "logo.png",
  // project-joythreaters
  "project-joythreaters/cover1.jpg",
  "project-joythreaters/image1.jpg",
  "project-joythreaters/image2.jpg",
  "project-joythreaters/image3.jpg",
  "project-joythreaters/image4.jpg",
  "project-joythreaters/image5.jpg",
  "project-joythreaters/image6.jpg",
  "project-joythreaters/image7.jpg",
  // project-mezita
  "project-mezita/cover1.jpg",
  "project-mezita/landscape1.jpg",
  "project-mezita/landscape2.jpg",
  "project-mezita/portrait1.jpg",
  "project-mezita/portrait2.jpg",
  "project-mezita/portrait3.jpg",
  "project-mezita/portrait4.jpg",
  // project-terseeart
  "project-terseeart/cover1.jpg",
  "project-terseeart/landscape1.png",
  "project-terseeart/landscape2.png",
  "project-terseeart/landscape3.png",
  "project-terseeart/landscape4.png",
  // project-workpro
  "project-workpro/cover-landscape.png",
  "project-workpro/landscape.jpg",
  "project-workpro/lanscape1.jpg",
  "project-workpro/landscape2.jpg",
  "project-workpro/landscape3.jpg",
];

async function convertImage(relativePath) {
  const inputPath = path.join(PUBLIC_DIR, relativePath);
  const ext = path.extname(relativePath);
  const outputRelative = relativePath.replace(ext, ".webp");
  const outputPath = path.join(PUBLIC_DIR, outputRelative);

  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠️  Skipping (not found): ${relativePath}`);
    return;
  }

  try {
    const inputStat = fs.statSync(inputPath);
    await sharp(inputPath).webp({ quality: 90 }).toFile(outputPath);
    const outputStat = fs.statSync(outputPath);
    const reduction = (
      ((inputStat.size - outputStat.size) / inputStat.size) *
      100
    ).toFixed(1);
    const inputKB = (inputStat.size / 1024).toFixed(0);
    const outputKB = (outputStat.size / 1024).toFixed(0);
    console.log(
      `✅ ${relativePath} → ${outputRelative} (${inputKB}KB → ${outputKB}KB, ${reduction}% smaller)`
    );

    // Delete original after successful conversion
    // Keep logo.png as a backup for favicon reference
    if (relativePath !== "logo.png") {
      fs.unlinkSync(inputPath);
      console.log(`🗑️  Deleted: ${relativePath}`);
    } else {
      console.log(`ℹ️  Kept original: ${relativePath} (used for favicon)`);
    }
  } catch (err) {
    console.error(`❌ Failed: ${relativePath}`, err.message);
  }
}

async function main() {
  console.log("🚀 Starting WebP conversion...\n");
  for (const img of IMAGES_TO_CONVERT) {
    await convertImage(img);
  }
  console.log("\n✨ Conversion complete!");
}

main();
