import { astraData } from "../data/astraData";

export default function AstraHero() {
  const { hero } = astraData;

  return (
    <section
      className="relative w-full min-h-[90vh] lg:min-h-screen pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${hero.bg}')`,
      }}
    >
      {/* Overlay Gradient Halus */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 via-transparent to-black/40 pointer-events-none" />

      {/* 1. Judul Utama ASTRA OTOSHOP */}
      <div className="text-center relative z-10 select-none">
        <h1
          className="font-spartan font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight sm:tracking-wider leading-none text-[#0084ff] drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          style={{
            WebkitTextStroke: "4px #ffffff",
            paintOrder: "stroke fill",
            textShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
          }}
        >
          {hero.title}
        </h1>
      </div>

      {/* 2. Sisi Bawah: Card Deskripsi + Logo Astra Otoshop di Kiri */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 mt-12 sm:mt-16">
        <div className="w-full max-w-xl bg-[#0084ff] text-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.5)] border-2 border-white/40 backdrop-blur-sm">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-2 mb-4 shadow-md">
            {/* Hand Tap Icon */}
            <svg
              className="w-6 h-6 text-gray-800 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            <div className="font-spartan font-black text-lg sm:text-xl tracking-tight leading-none">
              <span className="text-[#ed1c24]">ASTRA</span>
              <span className="text-[#1a1a1a]">Otoshop</span>
              <span className="text-gray-500 text-xs font-normal">.com</span>
            </div>
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
