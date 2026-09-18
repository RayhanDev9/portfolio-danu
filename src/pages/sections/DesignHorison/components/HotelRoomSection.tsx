import { useState } from "react";
import { horisonData } from "../data/horisonData";
import PhoneMockup from "./PhoneMockup";
import ImageModal from "./ImageModal";

export default function HotelRoomSection() {
  const { hotelRoom } = horisonData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[400px] bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <div className="text-center relative z-10 mb-12 sm:mb-16 select-none">
        <h2 className="font-spartan font-black text-white text-center leading-none tracking-tight">
          <span
            className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
            style={{
              WebkitTextStroke: "3px #0060b8",
              paintOrder: "stroke fill",
            }}
          >
            {hotelRoom.sectionTitle}
          </span>
          <span
            className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-1 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
            style={{
              WebkitTextStroke: "4px #0050a0",
              paintOrder: "stroke fill",
            }}
          >
            {hotelRoom.sectionSubtitle}
          </span>
        </h2>
      </div>

      {/* Showcase Grid: Kiri 2 HP Overlap, Kanan 3 Poster Promo Kamar */}
      <div className="w-full max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Sisi Kiri: 2 Mockup HP Bertumpuk (4 Kolom di Desktop) */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div className="relative w-[320px] h-[420px] flex items-center justify-center">
            {/* Phone Belakang (Tilted Left) */}
            <div className="absolute -left-2 top-0 opacity-80 scale-90 -rotate-12 hover:rotate-0 transition-transform duration-500 z-10">
              <PhoneMockup tilt="straight" className="scale-90" />
            </div>
            {/* Phone Depan (Tilted Right) */}
            <div className="absolute right-0 top-6 z-20 rotate-6 hover:rotate-0 transition-transform duration-500">
              <PhoneMockup tilt="straight" className="scale-95" />
            </div>
          </div>
        </div>

        {/* Sisi Kanan: 3 Poster Promo Kamar Hotel (8 Kolom di Desktop) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {hotelRoom.promoPosters.map((poster, index) => (
            <div
              key={poster.id + index}
              className="group relative bg-white rounded-2xl p-2.5 shadow-2xl border-2 border-white/40 cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              onClick={() =>
                setSelectedImg({ src: poster.image, title: poster.title })
              }
            >
              {/* Poster Image Container */}
              <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-gray-900">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Footer Caption */}
              <div className="mt-3 px-1 pb-1 text-center">
                <div className="font-spartan font-black text-xs sm:text-sm text-gray-900 truncate">
                  {poster.title}
                </div>
                <div className="text-[11px] font-bold text-blue-600 mt-0.5">
                  {poster.price}
                </div>
              </div>

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                <span className="bg-yellow-400 text-blue-950 font-spartan font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
                  🔍 Zoom Poster
                </span>
              </div>
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
