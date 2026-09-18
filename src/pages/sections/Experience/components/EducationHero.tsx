interface SparkleProps {
  className?: string;
}

function SparkleStar({ className = "" }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] ${className}`}
      aria-hidden="true"
    >
      {/* 4-point diamond star */}
      <path d="M50 0 C50 35 35 50 0 50 C35 50 50 65 50 100 C50 65 65 50 100 50 C65 50 50 35 50 0 Z" />
      {/* subtle ray glow lines */}
      <line
        x1="50"
        y1="5"
        x2="50"
        y2="95"
        stroke="white"
        strokeWidth="2"
        strokeOpacity="0.8"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="50"
        x2="95"
        y2="50"
        stroke="white"
        strokeWidth="2"
        strokeOpacity="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function EducationHero() {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center pt-20 sm:pt-28 md:pt-32 pb-8 px-3 select-none overflow-hidden">
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

      {/* Container Judul EDUCATION dengan Efek Desain E Memanjang & Sparkles */}
      <div className="relative flex items-end justify-center font-spartan font-black text-[13.5vw] xs:text-[12vw] sm:text-[10.5vw] md:text-[9vw] lg:text-[7.8vw] xl:text-[8rem] 2xl:text-[9rem] tracking-tight leading-none text-[#e5fc34]">
        {/* Sparkle 1: Kiri Atas E */}
        <SparkleStar className="absolute -top-4 -left-4 sm:-top-7 sm:-left-8 w-7 h-7 sm:w-11 sm:h-11 z-20" />

        {/* Sparkle 2: Kiri Bawah E */}
        <SparkleStar className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 w-5 h-5 sm:w-8 sm:h-8 z-20" />

        {/* Bagian Huruf 'E' dan 'DUC' yang duduk di atas garis bawah perpanjangan 'E' */}
        <span className="relative flex items-end">
          {/* Huruf 'E' */}
          <span className="relative inline-block leading-none">E</span>

          {/* Container 'DUC' dengan garis bawah memanjang */}
          <span className="relative flex items-end">
            <span className="text-[0.62em] font-black tracking-tighter pb-[0.14em] pl-[0.03em] pr-[0.06em] leading-none inline-block">
              DUC
            </span>
            {/* Garis horizontal bawah tebal sebagai perpanjangan kaki 'E' */}
            <span
              className="absolute bottom-0 left-0 w-full h-[0.13em] bg-[#e5fc34]"
              aria-hidden="true"
            />
          </span>
        </span>

        {/* Sparkle 3: Di Atas Antara DUC dan ATION */}
        <SparkleStar className="absolute -top-6 left-[34%] sm:-top-10 sm:left-[36%] w-8 h-8 sm:w-14 sm:h-14 z-20" />

        {/* Bagian Huruf 'ATION' */}
        <span className="relative inline-block leading-none">ATION</span>

        {/* Sparkle 4: Di Bawah Dekat T dan I */}
        <SparkleStar className="absolute -bottom-5 left-[64%] sm:-bottom-8 sm:left-[65%] w-6 h-6 sm:w-10 sm:h-10 z-20" />

        {/* Sparkle 5: Kanan Atas Dekat N */}
        <SparkleStar className="absolute -top-4 -right-3 sm:-top-7 sm:-right-6 w-7 h-7 sm:w-12 sm:h-12 z-20" />
      </div>
    </div>
  );
}
