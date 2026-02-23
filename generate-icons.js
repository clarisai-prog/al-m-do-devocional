import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cores do design
const BACKGROUND = '#1a160d';
const FOREGROUND = '#cfaa6c';

// SVG template com letra "D"
const createSVG = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <!-- Background -->
  <rect width="${size}" height="${size}" fill="${BACKGROUND}"/>
  
  <!-- Circle border (subtle) -->
  <circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.45}" fill="none" stroke="${FOREGROUND}" stroke-width="${size * 0.02}" opacity="0.3"/>
  
  <!-- Letter D -->
  <text x="${size / 2}" y="${size * 0.6}" 
        font-size="${size * 0.5}" 
        font-family="Playfair Display, Georgia, serif" 
        font-weight="700"
        text-anchor="middle" 
        fill="${FOREGROUND}">D</text>
</svg>
`;

// SVG template para maskable (com safe zone)
const createMaskableSVG = (size) => {
  const safeZone = Math.round(size * 0.087); // ~45px para 512
  const innerSize = size - (safeZone * 2);
  
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <!-- Background com padding -->
  <defs>
    <mask id="maskCircle">
      <rect width="${size}" height="${size}" fill="white"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${innerSize / 2}" fill="black"/>
    </mask>
  </defs>
  
  <!-- Background completo -->
  <rect width="${size}" height="${size}" fill="${BACKGROUND}"/>
  
  <!-- Círculo decorativo com safe zone -->
  <circle cx="${size / 2}" cy="${size / 2}" r="${innerSize / 2}" fill="none" stroke="${FOREGROUND}" stroke-width="${Math.round(size * 0.02)}" opacity="0.4"/>
  
  <!-- Letter D no centro (safe area) -->
  <text x="${size / 2}" y="${size * 0.6}" 
        font-size="${size * 0.5}" 
        font-family="Playfair Display, Georgia, serif" 
        font-weight="700"
        text-anchor="middle" 
        fill="${FOREGROUND}">D</text>
</svg>
`;
};

async function generateIcons() {
  console.log('🎨 Gerando ícones PWA...\n');
  
  const sizes = [192, 512];
  const iconsDir = path.join(__dirname, 'public');
  
  // Criar diretório se não existir
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }
  
  try {
    for (const size of sizes) {
      console.log(`\n📦 Gerando ícones ${size}x${size}...`);
      
      // Gerar versão regular
      console.log(`  ├─ Criando icon-${size}.png...`);
      const svg = Buffer.from(createSVG(size));
      const filePath = path.join(iconsDir, `icon-${size}.png`);
      
      await sharp(svg, { density: 300 })
        .png()
        .resize(size, size, { fit: 'contain', background: BACKGROUND })
        .toFile(filePath);
      
      console.log(`  │  ✅ icon-${size}.png criado (${fs.statSync(filePath).size} bytes)`);
      
      // Gerar versão maskable
      console.log(`  └─ Criando icon-${size}-maskable.png...`);
      const maskableSvg = Buffer.from(createMaskableSVG(size));
      const maskableFilePath = path.join(iconsDir, `icon-${size}-maskable.png`);
      
      await sharp(maskableSvg, { density: 300 })
        .png()
        .resize(size, size, { fit: 'contain', background: BACKGROUND })
        .toFile(maskableFilePath);
      
      console.log(`     ✅ icon-${size}-maskable.png criado (${fs.statSync(maskableFilePath).size} bytes)`);
    }
    
    console.log('\n✨ Todos os ícones foram gerados com sucesso!\n');
    console.log('📁 Arquivos criados em /public/:');
    console.log('   ✅ icon-192.png');
    console.log('   ✅ icon-192-maskable.png');
    console.log('   ✅ icon-512.png');
    console.log('   ✅ icon-512-maskable.png');
    
    console.log('\n🚀 Próximo passo: git add public/icon-*.png && git commit -m "🎨 Add: PWA Icons"');
    
  } catch (error) {
    console.error('❌ Erro ao gerar ícones:', error.message);
    process.exit(1);
  }
}

// Executar
generateIcons();
