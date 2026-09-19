import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'public', 'img');
const srcDir = path.join(__dirname, 'src');
const indexHtmlPath = path.join(__dirname, 'index.html');

// 1. Fungsi konversi gambar rekursif
async function processImages(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processImages(fullPath); // Masuk ke sub-folder
        } 
        else if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const outputFileName = `${path.parse(file).name}.avif`;
            const outputPath = path.join(directory, outputFileName);

            try {
                // Kualitas diset 85 agar gambar resolusi tinggi tetap tajam
                await sharp(fullPath)
                    .avif({ quality: 85, effort: 4 })
                    .toFile(outputPath);
                
                console.log(`[SUKSES KONVERSI] ${file} -> ${outputFileName}`);
                
                // Hapus file asli (PNG/JPG)
                fs.unlinkSync(fullPath);
                
            } catch (err) {
                console.error(`[GAGAL] Memproses ${file}:`, err.message);
            }
        }
    }
}

// 2. Fungsi update referensi codingan otomatis
function updateCodeReferences(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            updateCodeReferences(fullPath);
        } 
        else if (file.match(/\.(jsx|tsx|js|ts|css|html)$/i)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            if (content.match(/\.(png|jpe?g)/i)) {
                const newContent = content.replace(/\.(png|jpe?g)/gi, '.avif');
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`[UPDATE KODE] Referensi gambar diubah pada file: ${file}`);
            }
        }
    }
}

// 3. Eksekusi program
async function runAutoScript() {
    console.log('--- MEMULAI KONVERSI & PENGHAPUSAN GAMBAR ---');
    if (fs.existsSync(imgDir)) {
        await processImages(imgDir);
    }
    
    console.log('\n--- MEMULAI UPDATE REFERENSI DI KODE SUMBER ---');
    if (fs.existsSync(srcDir)) {
        updateCodeReferences(srcDir);
    }
    
    if (fs.existsSync(indexHtmlPath)) {
        let content = fs.readFileSync(indexHtmlPath, 'utf8');
        if (content.match(/\.(png|jpe?g)/i)) {
            const newContent = content.replace(/\.(png|jpe?g)/gi, '.avif');
            fs.writeFileSync(indexHtmlPath, newContent, 'utf8');
            console.log(`[UPDATE KODE] Referensi gambar diubah pada file: index.html`);
        }
    }
    
    console.log('\n--- SEMUA PROSES SELESAI BRO! ---');
}

runAutoScript();