export default function ExperienceHero() {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-6 px-3 select-none overflow-hidden">
      {/* Ornamen Crop Marks (+) di Sudut-Sudut Luar */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-white/70 text-base sm:text-xl font-light pointer-events-none">
        +
      </div>
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/70 text-base sm:text-xl font-light pointer-events-none">
        +
      </div>
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white/50 text-base sm:text-xl font-light pointer-events-none">
        +
      </div>
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-white/50 text-base sm:text-xl font-light pointer-events-none">
        +
      </div>

      {/* Container Judul EXPER I ENCE (Responsif dengan satuan fluid vw) */}
      <div className="relative flex items-center justify-center gap-[0.08em] font-spartan font-black text-[12.5vw] sm:text-[11vw] md:text-[8rem] lg:text-[9.5rem] xl:text-[10rem] tracking-tight leading-none text-[#e5fc34]">
        {/* Teks Kiri "EXPER" */}
        <span className="relative">
          EXPER
          <span className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 text-white text-[10px] sm:text-xs md:text-sm font-normal">
            +
          </span>
          <span className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 text-white text-[10px] sm:text-xs md:text-sm font-normal">
            +
          </span>
        </span>

        {/* Foto Danu di Tengah (Otomatis membesar proporsional mengikuti font) */}
        <div className="relative h-[1.18em] w-[0.6em] flex items-end justify-center shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}img/profile/danu-jas.png`}
            alt="Danu"
            className="h-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Teks Kanan "ENCE" */}
        <span className="relative">
          ENCE
          <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 text-white text-[10px] sm:text-xs md:text-sm font-normal">
            +
          </span>
          <span className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 text-white text-[10px] sm:text-xs md:text-sm font-normal">
            +
          </span>
        </span>
      </div>
    </div>
  );
}