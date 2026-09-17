export default function HeroSection() {
  return (
    <div className="relative z-20 w-full pt-20 sm:pt-24 md:pt-28 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        {/* Spacer area foto (desktop only) */}
        <div className="hidden md:block md:col-span-4 lg:col-span-4" />

        {/* Kolom Teks Nama */}
        <div className="col-span-1 md:col-span-5 lg:col-span-5 pb-2 md:pb-4 text-center md:text-left flex flex-col items-center md:items-start">
          {/* font-playfair dari @theme */}
          <p className="font-playfair italic text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-wide">
            Hi There!
          </p>

          {/* font-spartan dari @theme */}
          <h1 className="font-spartan font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none my-1 flex items-baseline justify-center md:justify-start gap-2 sm:gap-3">
            <span className="text-[#e5fc34]">I'M</span>
            <span className="text-white">DANU</span>
          </h1>

          {/* Garis Horizontal Barbell (●─────────●) */}
          <div className="flex items-center my-2 sm:my-3 w-full max-w-[260px] sm:max-w-xs md:max-w-md">
            <div className="w-2 h-2 rounded-full bg-white shrink-0" />
            <div className="flex-1 h-[2px] bg-white/90" />
            <div className="w-2 h-2 rounded-full bg-white shrink-0" />
          </div>

          {/* font-sans (Inter) dari @theme */}
          <p className="font-sans text-xs sm:text-sm text-white/90 font-light max-w-sm md:max-w-md leading-relaxed">
            I'm a graphic designer, and in my portfolio, you'll find a selection of my best work.
          </p>
        </div>

        {/* Kolom Deskripsi Kanan dengan garis vertikal (Desktop only) */}
        <div className="hidden md:block md:col-span-3 lg:col-span-3 border-l-2 border-white pl-4 pb-2 mb-2">
          <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed font-light">
            Welcome to my creative space. Here you'll find not only my best work, but also the
            experiences, ideas, and inspirations behind it. This portfolio is a glimpse into who I am,
            what I value, and how I express myself through design.
          </p>
        </div>
      </div>
    </div>
  );
}
