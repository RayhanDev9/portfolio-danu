import { useState } from "react";
import { horisonData } from "../data/horisonData";
import PushPin from "./PushPin";
import ImageModal from "./ImageModal";

export default function WeddingSection() {
  const { wedding } = horisonData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center border-t border-white/10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <div className="text-center relative z-10 mb-12 sm:mb-16 select-none">
        <h2 className="font-spartan font-black text-white text-center leading-none tracking-tight">
          <span
            className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
            style={{
              WebkitTextStroke: "3px #0060b8",
              paintOrder: "stroke fill",
            }}
          >
            {wedding.sectionTitle}
          </span>
          <span
            className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-1 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
            style={{
              WebkitTextStroke: "4px #0050a0",
              paintOrder: "stroke fill",
            }}
          >
            {wedding.sectionSubtitle}
          </span>
        </h2>
      </div>

      {/* Pin Board Showcase Area */}
      <div className="relative w-full max-w-6xl z-10">
        {/* SVG Connecting Yellow Strings (Visible on Desktop lg+) */}
        <svg
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Line from top-left pin to main board pin */}
          <line
            x1="22%"
            y1="18%"
            x2="52%"
            y2="32%"
            stroke="#FFD700"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          />
          {/* Line from bottom-left pin to main board pin */}
          <line
            x1="22%"
            y1="68%"
            x2="52%"
            y2="32%"
            stroke="#FFD700"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          />
        </svg>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Sisi Kiri: 2 Kartu Thumbnail dengan Red PushPin (4 Kolom di Desktop) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-8 justify-center items-center">
            {wedding.thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                className="relative group w-full max-w-[260px] bg-white p-3 pt-5 rounded-lg shadow-2xl border border-white/40 cursor-pointer hover:rotate-1 hover:scale-105 transition-all duration-300"
                onClick={() =>
                  setSelectedImg({ src: thumb.image, title: thumb.title })
                }
              >
                {/* Red PushPin di atas kartu */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
                  <PushPin size={42} />
                </div>

                {/* Foto Konten */}
                <div className="aspect-[3/4] overflow-hidden rounded bg-gray-100">
                  <img
                    src={thumb.image}
                    alt={thumb.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="mt-2 text-center text-gray-800">
                  <div className="font-spartan font-bold text-xs truncate">
                    {thumb.title}
                  </div>
                  <div className="text-[10px] text-gray-500 font-semibold">
                    {thumb.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sisi Kanan: Poster Besar Horizontal (8 Kolom di Desktop) */}
          <div className="lg:col-span-8 relative">
            <div
              className="relative group bg-white p-3 sm:p-4 rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-2 border-white/50 cursor-pointer hover:scale-[1.01] transition-all duration-300"
              onClick={() =>
                setSelectedImg({
                  src: wedding.mainPoster,
                  title: "Horison Wedding Package - Marry Me",
                })
              }
            >
              {/* Red PushPin di sudut kiri atas poster utama */}
              <div className="absolute -top-5 left-8 sm:left-12 z-30">
                <PushPin size={48} />
              </div>

              {/* Gambar Poster Utama */}
              <div className="w-full rounded-lg overflow-hidden bg-white">
                <img
                  src={wedding.mainPoster}
                  alt="Horison Wedding Marry Me Package"
                  className="w-full h-auto object-contain group-hover:brightness-[1.02] transition-all"
                />
              </div>

              {/* Overlay Hover Helper */}
              <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl pointer-events-none">
                <span className="bg-white text-blue-950 font-spartan font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-2xl">
                  🔍 Klik untuk Membaca Paket Lengkap
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={Boolean(selectedImg)}
        imageSrc={selectedImg?.src || ""}
        title={selectedImg?.title}
        onClose={() => setSelectedImg(null)}
      />
    </section>
  );
}
