import { majlisData } from "../data/majlisData";
import type { MajlisImageModalItem } from "../data/majlisData";

interface MajlisHeroProps {
  onSelectImage: (item: MajlisImageModalItem) => void;
}

export default function MajlisHero({ onSelectImage }: MajlisHeroProps) {
  const { hero } = majlisData;

  return (
    <section className="relative w-full pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 flex flex-col items-center">
      {/* Title Besar */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="font-spartan font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight uppercase select-none drop-shadow-md">
          <span
            className="text-[#f5be38] block"
            style={{
              WebkitTextStroke: "4px #ffffff",
              paintOrder: "stroke fill",
            }}
          >
            {hero.titleGold}
          </span>
          <span className="text-white block mt-1">{hero.titleWhite}</span>
        </h1>
      </div>

      {/* Deskripsi + Logo Card */}
      <div className="w-full max-w-4xl bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-7 md:p-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="flex-1 text-white/95 text-xs sm:text-sm md:text-base leading-relaxed font-sans text-justify md:text-left">
            {hero.description}
          </div>

          {/* Garis Pemisah Vertikal (hanya desktop) */}
          <div className="hidden md:block w-px h-28 bg-white/40 self-stretch my-auto" />

          <div
            onClick={() =>
              onSelectImage({
                title: "Logo Majlis Ta'lim Roudotul Jannah",
                image: hero.logo,
                alt: "Logo Majlis Ta'lim Roudotul Jannah",
              })
            }
            className="flex-shrink-0 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            title="Klik untuk memperbesar logo"
          >
            <img
              src={hero.logo}
              alt="Logo Majlis Ta'lim Roudotul Jannah"
              className="w-24 sm:w-28 md:w-32 h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Display Banner Zikir */}
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        <div
          onClick={() =>
            onSelectImage({
              title: "Banner Dzikro Maulid Nabi Muhammad SAW",
              image: hero.banner,
              alt: "Banner Dzikro Maulid Nabi Muhammad SAW",
            })
          }
          className="w-full rounded-lg overflow-hidden shadow-2xl border-4 border-amber-400/30 cursor-pointer group"
          title="Klik untuk memperbesar banner"
        >
          <img
            src={hero.banner}
            alt="Banner Dzikro Maulid Nabi Muhammad SAW"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Efek Panggung / Karpet Merah */}
        <div className="w-[110%] h-8 sm:h-12 bg-gradient-to-t from-[#9a0808] to-[#600505] rounded-[50%] -mt-3 sm:-mt-5 shadow-2xl opacity-90 border-t border-red-400/40 pointer-events-none" />
      </div>
    </section>
  );
}
