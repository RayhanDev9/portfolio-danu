import { useState } from "react";
import { horisonData } from "../data/horisonData";
import PhoneMockup from "./PhoneMockup";
import ImageModal from "./ImageModal";

export default function HorisonHero() {
  const { hero } = horisonData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="relative w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Soft Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Judul Utama HORISON */}
      <div className="text-center relative z-10 select-none">
        <h1
          className="font-spartan font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-wider leading-none text-[#F6EFE6] drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
          style={{
            textShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          {hero.brandName}
        </h1>
        <h2 className="font-spartan font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FFD700] tracking-[0.2em] sm:tracking-[0.25em] uppercase mt-2 sm:mt-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
          {hero.subtitle}
        </h2>
      </div>

      {/* 2. Deskripsi + Logo Card */}
      <div className="w-full max-w-4xl bg-black/15 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-7 md:p-8 mt-8 sm:mt-12 shadow-xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Teks Deskripsi */}
          <div className="flex-1 text-white/95 text-xs sm:text-sm md:text-base leading-relaxed font-sans text-justify md:text-left">
            {hero.description}
          </div>

          {/* Garis Pemisah Vertikal (Desktop) */}
          <div className="hidden md:block w-px h-28 bg-white/40 self-stretch my-auto" />

          {/* Logo Horison */}
          <div className="flex-shrink-0 flex items-center justify-center p-2 bg-white/5 rounded-xl border border-white/10">
            <img
              src={hero.logo}
              alt="Logo Horison Altama Pandeglang"
              className="w-28 sm:w-32 md:w-36 h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* 3. Bottom Showcase (Phone Instagram + Standing Banners) */}
      <div className="w-full max-w-6xl mt-12 sm:mt-16 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Sisi Kiri: Mockup HP Instagram Profile */}
        <div className="flex flex-col items-center">
          <PhoneMockup tilt="left" className="scale-95 sm:scale-100" />
          <span className="text-white/80 text-xs font-spartan font-semibold mt-3 tracking-wide">
            📱 Official Instagram Profile
          </span>
        </div>

        {/* Sisi Kanan: 2 Standing Banner Mockup (X-Banner Stand) */}
        <div className="flex flex-wrap sm:flex-nowrap items-end justify-center gap-6 sm:gap-8">
          {hero.previewBanners.map((banner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() =>
                setSelectedImg({ src: banner.image, title: banner.title })
              }
            >
              {/* Poster Body (Full Genuine Artwork inside X-Banner Frame) */}
              <div className="relative w-44 sm:w-52 md:w-56 bg-white rounded-xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-2 border-white/40 group-hover:scale-105 transition-all duration-300">
                {/* Banner Image Content (Showing exact real poster) */}
                <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-lg bg-gray-900">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Corner Grommets (Eyelets) */}
                <div className="absolute top-3.5 left-3.5 w-2.5 h-2.5 rounded-full bg-slate-300 border border-black/40 shadow-inner" />
                <div className="absolute top-3.5 right-3.5 w-2.5 h-2.5 rounded-full bg-slate-300 border border-black/40 shadow-inner" />
                <div className="absolute bottom-3.5 left-3.5 w-2.5 h-2.5 rounded-full bg-slate-300 border border-black/40 shadow-inner" />
                <div className="absolute bottom-3.5 right-3.5 w-2.5 h-2.5 rounded-full bg-slate-300 border border-black/40 shadow-inner" />

                {/* Hover Overlay */}
                <div className="absolute inset-2 rounded-lg bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-blue-950 px-3 py-1.5 rounded-full text-xs font-spartan font-bold shadow-lg">
                    🔍 Zoom
                  </span>
                </div>
              </div>

              {/* X-Stand / Tripod Mockup Base */}
              <div className="w-full flex justify-center -mt-1 pointer-events-none">
                <svg
                  viewBox="0 0 120 40"
                  className="w-32 sm:w-40 h-10 text-gray-800 drop-shadow-md"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  {/* Tripod legs */}
                  <line x1="60" y1="0" x2="20" y2="38" strokeLinecap="round" />
                  <line x1="60" y1="0" x2="100" y2="38" strokeLinecap="round" />
                  <line x1="60" y1="0" x2="60" y2="38" strokeLinecap="round" />
                  {/* Feet pads */}
                  <circle cx="20" cy="38" r="3" fill="#111" />
                  <circle cx="60" cy="38" r="3" fill="#111" />
                  <circle cx="100" cy="38" r="3" fill="#111" />
                </svg>
              </div>

              <span className="text-white/85 text-xs font-spartan font-bold mt-1 group-hover:text-yellow-300 transition-colors">
                🔍 {banner.title}
              </span>
            </div>
          ))}
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
