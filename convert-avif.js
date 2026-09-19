import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Targetkan langsung ke folder dan file spesifik
const targetDir = path.join(__dirname, 'public', 'img', "desain-majlis-ta'alim");
const targetFile = 'sertifikat-belakang.jpg';
const fullPath = path.join(targetDir, targetFile);

async function processSingleFile() {
    console.log(`--- MEMULAI KONVERSI KHUSUS UNTUK ${targetFile} ---`);
    
    // Cek apakah file sertifikat-belakang.jpg ada
    if (!fs.existsSync(fullPath)) {
        console.error('File tidak ditemukan:', fullPath);
        return;
    }

    const outputFileName = 'sertifikat-belakang.avif';
    const outputPath = path.join(targetDir, outputFileName);

    try {
        // Konversi dengan kualitas 90 agar detail border dan teks tidak pecah
        await sharp(fullPath)
            .avif({ quality: 75, effort: 4 })
            .toFile(outputPath);
        
        console.log(`[SUKSES] ${targetFile} -> ${outputFileName} (AVIF lama ditimpa)`);
        
        // Hapus file asli JPG setelah berhasil dikonversi
        fs.unlinkSync(fullPath);
        console.log(`[SUKSES HAPUS] File asli ${targetFile} telah dihapus.`);
        
    } catch (err) {
        console.error(`[GAGAL] Memproses ${targetFile}:`, err.message);
    }
    
    console.log('\n--- PROSES SELESAI BRO! ---');
}

// Jalankan program
processSingleFile();