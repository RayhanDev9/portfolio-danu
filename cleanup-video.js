import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target direktori video
const vidDir = path.join(__dirname, 'public', 'vidio');

function cleanUpVideos(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        // Jika menemukan folder, masuk ke dalamnya secara rekursif
        if (stat.isDirectory()) {
            cleanUpVideos(fullPath);
        } 
        // Mencari file yang memiliki akhiran _compressed.mp4
        else if (file.endsWith('_compressed.mp4')) {
            // Tentukan nama file asli (menghapus kata _compressed)
            const originalFileName = file.replace('_compressed.mp4', '.mp4');
            const originalFilePath = path.join(directory, originalFileName);

            try {
                // Langkah 1: Hapus file video asli jika masih ada
                if (fs.existsSync(originalFilePath)) {
                    fs.unlinkSync(originalFilePath);
                    console.log(`[HAPUS] Video lama dihapus: ${originalFileName}`);
                }

                // Langkah 2: Ubah nama (rename) file kompresi menjadi nama aslinya
                fs.renameSync(fullPath, originalFilePath);
                console.log(`[RENAME] Sukses mengubah: ${file} -> ${originalFileName}`);
                
            } catch (err) {
                console.error(`[GAGAL] Memproses ${file}:`, err.message);
            }
        }
    }
}

console.log('--- MEMULAI PROSES REPLACE VIDEO ---');
if (fs.existsSync(vidDir)) {
    cleanUpVideos(vidDir);
    console.log('\n--- BERES BRO! Semua video sudah direplace ---');
} else {
    console.error('Folder video tidak ditemukan:', vidDir);
}