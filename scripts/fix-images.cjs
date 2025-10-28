/**
 * ⚙️ Script PRO de correction d'images IA
 * Version Bicool – anti-zigzag + upscale + netteté
 *
 * - Upscale 2x pour réduire les artefacts IA
 * - Denoise + léger flou anti-crénelage
 * - Sharpen doux pour restaurer les détails
 * - Conversion en WebP haute qualité (95%)
 *
 * Sortie : /fixed/
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const categories = [
  "cuisines",
  "salons",
  "meubles",
  "dressings",
  "salle_de_bain",
  "savoir_faire",
];

for (const folder of categories) {
  console.log(`\n📂 Traitement du dossier : ${folder}`);

  const inputDir = path.resolve(`./src/assets/projets/${folder}`);
  const outputDir = path.resolve(`./src/assets/projets/${folder}/fixed`);

  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs
    .readdirSync(inputDir)
    .filter((f) => f.match(/\.(jpg|jpeg|png|webp)$/i));

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = path.parse(file).name + ".webp";
    const outputPath = path.join(outputDir, outputName);

    sharp(inputPath)
      .resize({ width: 2400, withoutEnlargement: false })
      .blur(0.5) // ✅ corrigé (0.3 mini)
      .modulate({ brightness: 1.03, saturation: 1.05 })
      .sharpen({
        sigma: 1.0,
        m1: 0.9,
        m2: 1.2,
        x1: 2,
        y2: 10,
        y3: 20,
      })
      .webp({ quality: 95, effort: 4 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Corrigé PRO: ${folder}/${outputName}`))
      .catch((err) => console.error(`❌ Erreur sur ${file}:`, err));
  }
}
