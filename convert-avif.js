import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Penyesuaian untuk mendapatkan __dirname di dalam ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tentukan target folder
const imgDir = path.join(__dirname, 'public', 'img');
const srcDir = path.join(__dirname, 'src');
const indexHtmlPath = path.join(__dirname, 'index.html');

// 1. Fungsi Asynchronous untuk konversi dan hapus gambar
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
                // A. Mulai Konversi
                await sharp(fullPath)
                    .avif({ quality: 50, effort: 4 })
                    .toFile(outputPath);
                
                console.log(`[SUKSES KONVERSI] ${file} -> ${outputFileName}`);
                
                // B. Hapus file asli (PNG/JPG) setelah konversi berhasil
                fs.unlinkSync(fullPath);
                console.log(`[SUKSES HAPUS] File asli ${file} telah dihapus.`);
                
            } catch (err) {
                console.error(`[GAGAL] Memproses ${file}:`, err.message);
            }
        }
    }
}

// 2. Fungsi untuk mencari dan mengganti nama ekstensi di file coding (.jsx, .css, dll)
function updateCodeReferences(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            updateCodeReferences(fullPath);
        } 
        // Hanya memproses file coding
        else if (file.match(/\.(jsx|tsx|js|ts|css|html)$/i)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Cek apakah file ini mengandung teks .png atau .jpg/.jpeg
            if (content.match(/\.(png|jpe?g)/i)) {
                // Ganti secara global (semua yang ada di dalam file)
                const newContent = content.replace(/\.(png|jpe?g)/gi, '.avif');
                
                // Tulis ulang file dengan isi yang baru
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`[UPDATE KODE] Referensi gambar diubah pada file: ${file}`);
            }
        }
    }
}

// 3. Eksekusi Utama
async function runAutoScript() {
    console.log('--- MEMULAI KONVERSI & PENGHAPUSAN GAMBAR ---');
    await processImages(imgDir);
    
    console.log('\n--- MEMULAI UPDATE REFERENSI DI KODE SUMBER ---');
    if (fs.existsSync(srcDir)) {
        updateCodeReferences(srcDir);
    }
    
    // Cek juga index.html di luar folder src
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

// Jalankan program
runAutoScript();