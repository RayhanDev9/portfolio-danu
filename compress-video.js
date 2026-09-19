import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ffmpeg from 'fluent-ffmpeg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target folder video Anda
const vidDir = path.join(__dirname, 'public', 'vidio');

async function processVideos(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        // Jika ada sub-folder, baca secara rekursif
        if (stat.isDirectory()) {
            await processVideos(fullPath);
        } 
        // Proses file mp4/mov yang belum dikompres
        else if (file.match(/\.(mp4|mov|mkv)$/i) && !file.includes('_compressed')) {
            const outputFileName = `${path.parse(file).name}_compressed.mp4`;
            const outputPath = path.join(directory, outputFileName);

            console.log(`[PROSES] Sedang mengompres: ${file}... (Ini akan memakan waktu)`);

            // Proses kompresi satu per satu agar CPU tidak overload
            await new Promise((resolve, reject) => {
                ffmpeg(fullPath)
                    .videoCodec('libx264')
                    // CRF 28: Kualitas bagus untuk web, ukuran jauh lebih kecil
                    .addOption('-crf', '28') 
                    .addOption('-preset', 'fast') 
                    .on('end', () => {
                        console.log(`[SUKSES] ${file} -> ${outputFileName}`);
                        resolve();
                    })
                    .on('error', (err) => {
                        console.error(`[GAGAL] ${file}:`, err.message);
                        reject(err);
                    })
                    .save(outputPath);
            });
        }
    }
}

async function runCompressor() {
    console.log('--- MEMULAI KOMPRESI VIDEO ---');
    if (!fs.existsSync(vidDir)) {
        console.error('Folder video tidak ditemukan:', vidDir);
        return;
    }
    
    await processVideos(vidDir);
    console.log('\n--- SEMUA VIDEO SELESAI DIKOMPRES BRO! ---');
}

runCompressor();