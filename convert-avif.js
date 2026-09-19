const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Targetkan langsung ke folder img di dalam public
const targetDir = path.join(__dirname, "public", "img");

// Fungsi rekursif untuk membaca folder di dalam folder
function processDirectory(directory) {
  // Baca semua isi di dalam direktori saat ini
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    // Jika menemukan sub-folder, jalankan fungsi ini lagi ke dalam folder tersebut
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    }
    // Jika menemukan file gambar (JPG/PNG), lakukan konversi
    else if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const outputFileName = `${path.parse(file).name}.avif`;
      const outputPath = path.join(directory, outputFileName); // Simpan di folder yang sama

      sharp(fullPath)
        .avif({
          quality: 50, // Kualitas 50 cukup baik untuk web portofolio
          effort: 4,
        })
        .toFile(outputPath)
        .then(() => {
          console.log(`[SUKSES] ${file} -> ${outputFileName}`);
        })
        .catch((err) => {
          console.error(`[GAGAL] ${file}:`, err.message);
        });
    }
  });
}

// Mulai proses dari folder public/img
console.log("Memulai konversi ke AVIF...");
processDirectory(targetDir);
