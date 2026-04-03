/**
 * Image compression script for Sails & Trails
 *
 * Compresses all JPG/PNG/WEBP images in public/images/ (and subfolders)
 * Outputs compressed versions to public/images/optimized/
 * Preserves originals untouched.
 *
 * Usage: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');
const SUPPORTED = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'];

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === 'optimized') continue; // skip output dir
      const nested = await getImages(path.join(dir, entry.name));
      files.push(...nested);
    } else if (SUPPORTED.some(ext => entry.name.endsWith(ext))) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

async function compress(inputPath) {
  const relative = path.relative(INPUT_DIR, inputPath);
  const outputPath = path.join(OUTPUT_DIR, relative.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.jpg'));
  const outputFolder = path.dirname(outputPath);

  if (!existsSync(outputFolder)) {
    await mkdir(outputFolder, { recursive: true });
  }

  const { size: inputSize } = await import('fs').then(fs =>
    fs.promises.stat(inputPath)
  );

  await sharp(inputPath)
    .rotate() // auto-rotate based on EXIF orientation
    .resize(2400, 2400, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, progressive: true })
    .toFile(outputPath);

  const { size: outputSize } = await import('fs').then(fs =>
    fs.promises.stat(outputPath)
  );

  const saving = Math.round((1 - outputSize / inputSize) * 100);
  console.log(`✓ ${relative} → ${Math.round(outputSize / 1024)}kb (${saving}% smaller)`);
}

async function main() {
  if (!existsSync(INPUT_DIR)) {
    console.log('No public/images/ folder found. Add photos there first.');
    process.exit(0);
  }

  const images = await getImages(INPUT_DIR);

  if (images.length === 0) {
    console.log('No images found in public/images/');
    process.exit(0);
  }

  console.log(`Found ${images.length} image(s). Compressing...\n`);

  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const img of images) {
    try {
      await compress(img);
    } catch (err) {
      console.error(`✗ ${img}: ${err.message}`);
    }
  }

  console.log('\nDone! Optimized images are in public/images/optimized/');
  console.log('Use /images/optimized/yourphoto.jpg in posts and pages.');
}

main();
