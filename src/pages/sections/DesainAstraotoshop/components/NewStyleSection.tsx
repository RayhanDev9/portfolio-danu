import { astraData } from "../data/astraData";

export default function NewStyleSection() {
  const { newStyle } = astraData;

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-between min-h-[85vh] bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/20"
      style={{
        backgroundImage: `url('${newStyle.bg}')`,
      }}
    >
      {/* Overlay Langit Cerah */}
      <div className="absolute inset-0 bg-sky-500/10 pointer-events-none" />

      {/* Floating Gold Confetti Ribbon Accents */}
      <div className="absolute top-12 left-10 w-12 h-6 bg-gradient-to-r from-amber-300 to-yellow-500 rounded-full rotate-45 blur-[0.5px] opacity-90 animate-bounce pointer-events-none" />
      <div className="absolute top-20 right-16 w-16 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full -rotate-12 blur-[0.5px] opacity-90 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-10 h-5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full rotate-12 opacity-80 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-12 h-6 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full -rotate-45 opacity-80 pointer-events-none" />

      {/* 1. Judul Section */}
      <div className="text-center relative z-10 mb-8 select-none">
        <h2 className="font-sans font-black italic uppercase tracking-tight text-center leading-none">
          <span
            className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
            style={{
              textShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            {newStyle.title}
          </span>
          <span
            className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mt-1 drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
            style={{
              textShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
            }}
          >
            {newStyle.subtitle}
          </span>
        </h2>
      </div>

      {/* 2. Komposisi Visual Mobil & Produk */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8 mt-auto pb-4">
        {/* Kiri: Mobil Honda Brio Thumbnail */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative group max-w-sm sm:max-w-md hover:scale-105 transition-transform duration-500">
            <img
              src={newStyle.carImage}
              alt="Astra Otoshop Car Showcase"
              className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] rounded-2xl"
            />
          </div>
        </div>

        {/* Kanan: Info Badge Card Brand Astra Otoparts */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-white/90 backdrop-blur-md text-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-white/60 max-w-md">
            <div className="font-spartan font-black text-xl text-[#0084ff] uppercase">
              Brand Produk Resmi Astra
            </div>
            <p className="font-sans text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed">
              Koleksi desain modern dengan visual 3D realistis untuk produk unggulan:
              <strong className="text-gray-900"> Aki GS Astra, Oli Aspira, Shockbreaker, Ban Pirelli & Aspira Premio</strong> dengan jaminan 100% Otomatis ORI.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-[#0084ff] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                ✓ 100% Otomatis ORI
              </span>
              <span className="bg-[#ed1c24] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                ✓ Garansi Resmi Astra
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
