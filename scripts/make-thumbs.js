import sharp from "sharp";
import fs from "fs";
import path from "path";

const categories = ["Img-apropos", "evenement"];

for (const folder of categories) {
  const inputDir = path.resolve(`./src/assets/${folder}`);
  const outputDir = path.join(inputDir, "thumbs");
  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs
    .readdirSync(inputDir)
    .filter((f) => f.match(/\.(webp|jpg|jpeg|png)$/i));

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = path.parse(file).name + "_thumb.webp";
    const outputPath = path.join(outputDir, outputName);

    sharp(inputPath)
      .resize({ width: 400, withoutEnlargement: true })
      .sharpen()
      .webp({ quality: 90 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Vignette créée : ${folder}/${outputName}`))
      .catch((err) => console.error(`❌ Erreur sur ${file}:`, err));
  }
}
