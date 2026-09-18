import { DESIGN_FEEDS, GEONERATIONS_BG } from "../data/geonerationsData";
import type { DesignItem } from "../data/geonerationsData";

interface GeonerationsHeroProps {
  onSelectImage: (item: DesignItem) => void;
}

export default function GeonerationsHero({ onSelectImage }: GeonerationsHeroProps) {
  return (
    <section
      className="relative w-full bg-repeat bg-contain pt-32 sm:pt-36 md:pt-40 pb-16 px-4 sm:px-8 border-b-4 border-[#a81a1a]"
      style={{
        backgroundImage: `url('${GEONERATIONS_BG}')`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 1. Big 3D Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#a81a1a]"
            style={{
              textShadow:
                "-3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff, -5px 0 0 #fff, 5px 0 0 #fff, 0 -5px 0 #fff, 0 5px 0 #fff, 0 12px 24px rgba(0,0,0,0.25)",
            }}
          >
            GEONERATIONS
          </h1>
        </div>

        {/* 2. Brand Description Card */}
        <div className="bg-[#a81a1a] text-white p-6 sm:p-8 rounded-2xl shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-red-900">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
              Geonerations – East Java
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-red-50 leading-relaxed font-normal">
              Geonerations is a youth-oriented brand rooted in East Java, combining local
              culture, community, entertainment, and creativity. Known for its humorous
              and relatable content, the brand has a bold, playful, youthful, and
              expressive identity that connects with local audiences.
            </p>
          </div>

          {/* Logo Badge */}
          <div className="flex-shrink-0 bg-white border-2 border-red-800 p-3 rounded-lg shadow-md text-center min-w-[100px]">
            <span className="block text-red-700 font-extrabold text-xs leading-none">
              geo
            </span>
            <span className="block text-red-700 font-black text-sm tracking-wider leading-tight">
              NERA
            </span>
            <span className="block text-red-700 font-black text-xs tracking-widest leading-none">
              TIONS
            </span>
          </div>
        </div>

        {/* 3. Sub-section: DESIGN FEED */}
        <div className="mb-6">
          <span className="inline-block bg-[#a81a1a] text-white font-black text-2xl sm:text-4xl md:text-5xl px-6 py-2 rounded-sm shadow-lg uppercase tracking-wider">
            DESIGN FEED
          </span>
        </div>

        {/* 4. Grid 4 Design Feeds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGN_FEEDS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="group relative rounded-xl overflow-hidden bg-white border-2 sm:border-[3px] border-[#a81a1a] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
