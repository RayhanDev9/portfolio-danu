const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  const dirEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Color count
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(item => item.buffer)]);
}

async function generate() {
  const sourceImage = path.join(__dirname, 'public', 'img', 'profile', 'danu-duduk.avif');
  const publicDir = path.join(__dirname, 'public');

  console.log('Reading source image:', sourceImage);

  // Extract nicely centered upper body & head (520x518 source)
  // Left 95, top 35, width 350, height 350 creates a well-framed avatar
  const baseSharp = sharp(sourceImage)
    .extract({ left: 95, top: 35, width: 350, height: 350 });

  const base512 = await baseSharp
    .resize(512, 512, { fit: 'cover' })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  // Save 512x512
  await sharp(base512).toFile(path.join(publicDir, 'favicon-512x512.png'));
  console.log('Created favicon-512x512.png');

  // Save 192x192
  const buf192 = await sharp(base512).resize(192, 192).png().toBuffer();
  await sharp(buf192).toFile(path.join(publicDir, 'favicon-192x192.png'));
  console.log('Created favicon-192x192.png');

  // Save 180x180 (Apple Touch Icon)
  const buf180 = await sharp(base512).resize(180, 180).png().toBuffer();
  await sharp(buf180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // Save 96x96
  const buf96 = await sharp(base512).resize(96, 96).png().toBuffer();
  await sharp(buf96).toFile(path.join(publicDir, 'favicon-96x96.png'));
  await sharp(buf96).toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created favicon-96x96.png and favicon.png');

  // Save 48x48 (Google Favicon Multiple)
  const buf48 = await sharp(base512).resize(48, 48).png().toBuffer();
  await sharp(buf48).toFile(path.join(publicDir, 'favicon-48x48.png'));
  console.log('Created favicon-48x48.png');

  // Save 32x32 & 16x16 for multi-resolution ICO
  const buf32 = await sharp(base512).resize(32, 32).png().toBuffer();
  const buf16 = await sharp(base512).resize(16, 16).png().toBuffer();

  const icoBuffer = await buildIco([
    { width: 16, height: 16, buffer: buf16 },
    { width: 32, height: 32, buffer: buf32 },
    { width: 48, height: 48, buffer: buf48 }
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Created favicon.ico with 16x16, 32x32, 48x48');

  // Also create a standalone SVG wrapper for modern browser crisp rendering
  const base64Png = buf96.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <image href="data:image/png;base64,${base64Png}" width="96" height="96" />
</svg>`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');
  console.log('Created favicon.svg');

  // Generate high-resolution 1200x630 OG Image for social platforms (WhatsApp, Facebook, Twitter)
  const ogWidth = 1200;
  const ogHeight = 630;
  const avatarSize = 420;

  // Render a nice circular avatar with gold border
  const avatarBuf = await sharp(sourceImage)
    .extract({ left: 95, top: 35, width: 350, height: 350 })
    .resize(avatarSize, avatarSize, { fit: 'cover' })
    .png()
    .toBuffer();

  const avatarBase64 = avatarBuf.toString('base64');

  const ogSvg = Buffer.from(`
    <svg width="${ogWidth}" height="${ogHeight}" viewBox="0 0 ${ogWidth} ${ogHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0518" />
          <stop offset="50%" stop-color="#140b2e" />
          <stop offset="100%" stop-color="#0a0518" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE066" />
          <stop offset="50%" stop-color="#FFD700" />
          <stop offset="100%" stop-color="#FFA500" />
        </linearGradient>
        <clipPath id="avatarClip">
          <circle cx="270" cy="315" r="190" />
        </clipPath>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="25" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Background -->
      <rect width="${ogWidth}" height="${ogHeight}" fill="url(#bgGrad)" />

      <!-- Glowing Accent Circles -->
      <circle cx="270" cy="315" r="220" fill="#5b13ec" opacity="0.35" filter="url(#glow)" />
      <circle cx="1050" cy="120" r="180" fill="#FFD700" opacity="0.12" filter="url(#glow)" />

      <!-- Outer Avatar Border -->
      <circle cx="270" cy="315" r="196" fill="none" stroke="url(#goldGrad)" stroke-width="8" />

      <!-- Avatar Image -->
      <g clip-path="url(#avatarClip)">
        <image href="data:image/png;base64,${avatarBase64}" x="80" y="125" width="380" height="380" />
      </g>

      <!-- Text Section -->
      <text x="510" y="240" font-family="'Inter', sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" letter-spacing="-1">
        DANU SATYA
      </text>

      <text x="510" y="295" font-family="'Inter', sans-serif" font-weight="700" font-size="28" fill="url(#goldGrad)" letter-spacing="1">
        GRAPHIC &amp; SIMPLE MOTION DESIGNER
      </text>

      <text x="510" y="375" font-family="'Inter', sans-serif" font-weight="400" font-size="20" fill="#CBD5E1">
        Visual Branding • Social Media Feeds • Motion Graphics
      </text>

      <!-- Badge / URL -->
      <rect x="510" y="420" width="380" height="52" rx="26" fill="#1e1045" stroke="#7c3aed" stroke-width="2" />
      <text x="540" y="454" font-family="'Inter', sans-serif" font-weight="600" font-size="18" fill="#F8FAFC">
        🌐 rayhandev9.github.io/portfolio-danu
      </text>
    </svg>
  `);

  await sharp(ogSvg).png({ quality: 95 }).toFile(path.join(publicDir, 'og-image.png'));
  console.log('Created og-image.png (1200x630)');

  console.log('All favicon and SEO preview assets generated successfully!');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
