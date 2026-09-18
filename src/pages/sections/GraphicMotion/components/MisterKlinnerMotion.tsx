import SmartphoneMockup from "./SmartphoneMockup";
import { MISTER_KLINNER_ITEMS } from "../data/motionData";
import type { MotionItem } from "../data/motionData";

interface MisterKlinnerMotionProps {
  onSelect: (item: MotionItem) => void;
}

export default function MisterKlinnerMotion({ onSelect }: MisterKlinnerMotionProps) {
  const bgGarden = `${import.meta.env.BASE_URL}img/motion/bg/bg-2.jpg`;

  // Pisahkan 4 HP atas dan 3 HP tengah
  const topRow = MISTER_KLINNER_ITEMS.slice(0, 4);
  const middleRow = MISTER_KLINNER_ITEMS.slice(4, 7);

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-cover bg-center bg-no-repeat overflow-hidden select-none font-sans"
      style={{ backgroundImage: `url(${bgGarden})` }}
    >
      {/* Overlay halus */}
      <div className="absolute inset-0 bg-sky-950/20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Logo Mister Klinner */}
        <div className="mb-10 flex items-center">
          <div className="flex flex-col">
            <span className="font-bubbles text-2xl sm:text-3xl text-[#e52421] tracking-wide drop-shadow-md leading-none">
              Mister
            </span>
            <span className="font-spartan font-black text-2xl sm:text-4xl text-[#0052cc] tracking-tight drop-shadow-md -mt-1">
              Klinner
            </span>
          </div>
        </div>

        {/* 1. Top Row: 4 Smartphones */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {topRow.map((item) => (
            <SmartphoneMockup key={item.id} item={item} onSelect={onSelect} />
          ))}
        </div>

        {/* 2. Middle Row: 3 Smartphones (Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-4 sm:gap-6 mb-16 sm:mb-20">
          {middleRow.map((item) => (
            <SmartphoneMockup key={item.id} item={item} onSelect={onSelect} />
          ))}
        </div>

        {/* 3. Bottom Tabletop: Display Meja Kayu & Produk */}
        <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
          {/* Tabletop Surface */}
          <div className="w-full h-10 sm:h-14 bg-gradient-to-r from-[#6f3f1e] via-[#94582c] to-[#6f3f1e] rounded-t-xl shadow-[0_15px_30px_rgba(0,0,0,0.6)] border-t-2 border-[#b07d4f] flex items-center justify-center">
            <span className="font-spartan font-black text-xs sm:text-sm text-amber-100/80 uppercase tracking-widest">
              Mister Klinner Household Products
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
