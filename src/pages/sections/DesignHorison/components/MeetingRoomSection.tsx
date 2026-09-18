import { useState } from "react";
import { horisonData } from "../data/horisonData";
import PhoneMockup from "./PhoneMockup";
import ImageModal from "./ImageModal";

export default function MeetingRoomSection() {
  const { meetingRoom } = horisonData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title Section */}
      <div className="text-center relative z-10 mb-12 sm:mb-16 select-none">
        <h2 className="font-spartan font-black text-white text-center leading-none tracking-tight">
          <span
            className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
            style={{
              WebkitTextStroke: "3px #0060b8",
              paintOrder: "stroke fill",
            }}
          >
            {meetingRoom.sectionTitle}
          </span>
          <span
            className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-1 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
            style={{
              WebkitTextStroke: "4px #0050a0",
              paintOrder: "stroke fill",
            }}
          >
            {meetingRoom.sectionSubtitle}
          </span>
        </h2>
      </div>

      {/* Content Showcase: 3 Kolom di Desktop (Banner Panjang, 2x2 Grid, Phone Mockup) */}
      <div className="w-full max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Kolom 1: Banner Tall Vertical Price List (Lg: 3 cols) */}
        <div className="lg:col-span-3 flex justify-center">
          <div
            className="group relative bg-white/10 p-1.5 rounded-2xl border-2 border-white/30 shadow-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full max-w-[280px]"
            onClick={() =>
              setSelectedImg({
                src: meetingRoom.featuredBanner,
                title: "Meeting Package Price List",
              })
            }
          >
            <img
              src={meetingRoom.featuredBanner}
              alt="Meeting at Horison Price List"
              className="w-full h-auto rounded-xl object-contain group-hover:brightness-105 transition-all"
            />
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
              <span className="bg-white text-blue-900 px-3 py-1.5 rounded-full text-xs font-spartan font-bold shadow-lg">
                🔍 Zoom Detail
              </span>
            </div>
          </div>
        </div>

        {/* Kolom 2: 2x2 Grid Kartu Desain Meeting Room (Lg: 6 cols) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
          {meetingRoom.cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white/10 p-1.5 rounded-xl border border-white/20 shadow-xl overflow-hidden cursor-pointer hover:scale-[1.03] transition-transform duration-300"
              onClick={() =>
                setSelectedImg({ src: card.image, title: card.title })
              }
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center rounded-lg">
                <span className="text-white font-spartan font-bold text-xs sm:text-sm">
                  {card.title}
                </span>
                <span className="bg-yellow-400 text-blue-950 font-bold text-[10px] px-2 py-0.5 rounded-full mt-1">
                  🔍 Lihat Desain
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Kolom 3: Phone Mockup Instagram (Lg: 3 cols) */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center">
          <PhoneMockup tilt="right" className="scale-95 sm:scale-100" />
          <span className="text-white/80 text-xs font-spartan font-semibold mt-3 tracking-wide text-center">
            📱 Feed Promosi Meeting
          </span>
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
