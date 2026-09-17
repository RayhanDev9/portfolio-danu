export default function ExperienceHero() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-8 sm:pt-12 md:pt-16 pb-6 select-none">
      {/* Ornamen Crop Marks (+) di sudut */}
      <div className="absolute top-4 left-6 text-white/60 text-lg sm:text-xl font-light pointer-events-none">
        +
      </div>
      <div className="absolute top-4 right-6 text-white/60 text-lg sm:text-xl font-light pointer-events-none">
        +
      </div>

      {/* Container Judul EXPER I ENCE */}
      <div className="relative flex items-center justify-center gap-1 sm:gap-2 md:gap-4 font-spartan font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-[#e5fc34]">
        {/* Teks Kiri "EXPER" */}
        <span className="relative">
          EXPER
          <span className="absolute -top-2 -left-2 text-white text-xs font-normal">
            +
          </span>
          <span className="absolute -bottom-2 -left-2 text-white text-xs font-normal">
            +
          </span>
        </span>

        {/* Foto Danu di Tengah (Menjadi huruf "I") */}
        <div className="relative h-16 sm:h-24 md:h-32 lg:h-40 w-8 sm:w-12 md:w-16 lg:w-20 flex items-end justify-center shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}img/profile/danu-jas.png`}
            alt="Danu"
            className="h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Teks Kanan "ENCE" */}
        <span className="relative">
          ENCE
          <span className="absolute -top-2 -right-2 text-white text-xs font-normal">
            +
          </span>
          <span className="absolute -bottom-2 -right-2 text-white text-xs font-normal">
            +
          </span>
        </span>
      </div>
    </div>
  );
}
