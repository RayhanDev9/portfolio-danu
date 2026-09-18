import { klinnerData } from "../data/klinnerData";

export default function KlinnerHero() {
  const { hero } = klinnerData;

  return (
    <section
      className="relative w-full min-h-[90vh] lg:min-h-screen pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${hero.bg}')`,
      }}
    >
      {/* Overlay Halus */}
      <div className="absolute inset-0 bg-amber-50/20 pointer-events-none" />

      {/* 1. Judul Utama: Mister (Biru) Klinner (Merah) */}
      <div className="text-center relative z-10 select-none">
        <h1
          className="font-spartan font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight leading-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
          style={{
            textShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
          }}
        >
          <span
            className="text-[#253b80] block"
            style={{
              WebkitTextStroke: "4px #ffffff",
              paintOrder: "stroke fill",
            }}
          >
            {hero.titleBlue}
          </span>
          <span
            className="text-[#e11d48] block -mt-2 sm:-mt-4"
            style={{
              WebkitTextStroke: "4px #ffffff",
              paintOrder: "stroke fill",
            }}
          >
            {hero.titleRed}
          </span>
        </h1>
      </div>

      {/* 2. Sisi Kiri Bawah: Card Deskripsi + Logo Mister Klinner */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 mt-12 sm:mt-16">
        <div className="w-full max-w-lg bg-[#253b80] text-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.4)] border-2 border-white/80 backdrop-blur-sm">
          {/* Logo Badge Mister Klinner */}
          <div className="inline-block mb-3 select-none">
            <span
              className="font-spartan font-black text-2xl sm:text-3xl tracking-tight leading-none text-[#e11d48] block"
              style={{
                WebkitTextStroke: "1.5px #ffffff",
                paintOrder: "stroke fill",
              }}
            >
              Mister
            </span>
            <span
              className="font-spartan font-black text-3xl sm:text-4xl tracking-tight leading-none text-white block -mt-1"
              style={{
                WebkitTextStroke: "1px #ffffff",
              }}
            >
              Klinner
            </span>
          </div>

          {/* Deskripsi Teks */}
          <p className="font-sans text-white/95 text-xs sm:text-sm md:text-base leading-relaxed text-justify sm:text-left font-medium">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
