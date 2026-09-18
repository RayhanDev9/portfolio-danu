import { useState, useRef, useEffect, useCallback } from "react";
import { horisonData } from "../data/horisonData";
import PushPin from "./PushPin";
import ImageModal from "./ImageModal";

interface Point {
  x: number;
  y: number;
}

export default function WeddingSection() {
  const { wedding } = horisonData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const pin1Ref = useRef<HTMLDivElement>(null);
  const pin2Ref = useRef<HTMLDivElement>(null);
  const pin3Ref = useRef<HTMLDivElement>(null);

  const [pinCoords, setPinCoords] = useState<{
    p1: Point;
    p2: Point;
    p3: Point;
    ready: boolean;
  }>({
    p1: { x: 0, y: 0 },
    p2: { x: 0, y: 0 },
    p3: { x: 0, y: 0 },
    ready: false,
  });

  const updatePinPositions = useCallback(() => {
    if (
      !containerRef.current ||
      !pin1Ref.current ||
      !pin2Ref.current ||
      !pin3Ref.current
    ) {
      return;
    }

    const cRect = containerRef.current.getBoundingClientRect();
    const r1 = pin1Ref.current.getBoundingClientRect();
    const r2 = pin2Ref.current.getBoundingClientRect();
    const r3 = pin3Ref.current.getBoundingClientRect();

    // Titik pusat paku (head/needle center)
    const p1 = {
      x: r1.left + r1.width / 2 - cRect.left,
      y: r1.top + r1.height * 0.45 - cRect.top,
    };
    const p2 = {
      x: r2.left + r2.width / 2 - cRect.left,
      y: r2.top + r2.height * 0.45 - cRect.top,
    };
    const p3 = {
      x: r3.left + r3.width / 2 - cRect.left,
      y: r3.top + r3.height * 0.45 - cRect.top,
    };

    setPinCoords({ p1, p2, p3, ready: true });
  }, []);

  useEffect(() => {
    updatePinPositions();

    // Update on resize and image loads
    window.addEventListener("resize", updatePinPositions);
    window.addEventListener("scroll", updatePinPositions, { passive: true });

    const observer = new ResizeObserver(() => {
      updatePinPositions();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Interval pendek saat mount untuk memastikan gambar sudah ter-render sempurna
    const timer = setTimeout(updatePinPositions, 300);
    const timer2 = setTimeout(updatePinPositions, 1000);

    return () => {
      window.removeEventListener("resize", updatePinPositions);
      window.removeEventListener("scroll", updatePinPositions);
      observer.disconnect();
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [updatePinPositions]);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center border-t border-white/10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

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
            {wedding.sectionTitle}
          </span>
          <span
            className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-1 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
            style={{
              WebkitTextStroke: "4px #0050a0",
              paintOrder: "stroke fill",
            }}
          >
            {wedding.sectionSubtitle}
          </span>
        </h2>
      </div>

      {/* Pin Board Showcase Area */}
      <div ref={containerRef} className="relative w-full max-w-6xl z-10">
        {/* SVG Dinamis: Garis benang kuning yang selalu presisi di sudut/pusat paku di semua resolusi */}
        {pinCoords.ready && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            style={{ overflow: "visible" }}
          >
            {/* Garis dari Paku Kartu 1 ke Paku Poster Utama */}
            <line
              x1={pinCoords.p1.x}
              y1={pinCoords.p1.y}
              x2={pinCoords.p3.x}
              y2={pinCoords.p3.y}
              stroke="#FFD700"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
            />
            {/* Garis dari Paku Kartu 2 ke Paku Poster Utama */}
            <line
              x1={pinCoords.p2.x}
              y1={pinCoords.p2.y}
              x2={pinCoords.p3.x}
              y2={pinCoords.p3.y}
              stroke="#FFD700"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
            />
          </svg>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Sisi Kiri: 2 Kartu Thumbnail dengan Red PushPin */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-8 justify-center items-center">
            {/* Kartu 1 */}
            <div
              className="relative group w-full max-w-[260px] bg-white p-3 pt-5 rounded-lg shadow-2xl border border-white/40 cursor-pointer hover:rotate-1 hover:scale-105 transition-all duration-300"
              onClick={() =>
                setSelectedImg({
                  src: wedding.thumbnails[0].image,
                  title: wedding.thumbnails[0].title,
                })
              }
            >
              {/* Paku 1 */}
              <div
                ref={pin1Ref}
                className="absolute  -top-5 left-1/2 -translate-x-1/2 z-40 flex justify-center"
              >
                <PushPin size={42} />
              </div>

              <div className="aspect-[3/4] overflow-hidden rounded bg-gray-100">
                <img
                  src={wedding.thumbnails[0].image}
                  alt={wedding.thumbnails[0].title}
                  onLoad={updatePinPositions}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-2 text-center text-gray-800">
                <div className="font-spartan font-bold text-xs truncate">
                  {wedding.thumbnails[0].title}
                </div>
                <div className="text-[10px] text-gray-500 font-semibold">
                  {wedding.thumbnails[0].price}
                </div>
              </div>
            </div>

            {/* Kartu 2 */}
            <div
              className="relative group w-full max-w-[260px] bg-white p-3 pt-5 rounded-lg shadow-2xl border border-white/40 cursor-pointer hover:-rotate-1 hover:scale-105 transition-all duration-300"
              onClick={() =>
                setSelectedImg({
                  src: wedding.thumbnails[1].image,
                  title: wedding.thumbnails[1].title,
                })
              }
            >
              {/* Paku 2 */}
              <div
                ref={pin2Ref}
                className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex justify-center"
              >
                <PushPin size={42} />
              </div>

              <div className="aspect-[3/4] overflow-hidden rounded bg-gray-100">
                <img
                  src={wedding.thumbnails[1].image}
                  alt={wedding.thumbnails[1].title}
                  onLoad={updatePinPositions}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-2 text-center text-gray-800">
                <div className="font-spartan font-bold text-xs truncate">
                  {wedding.thumbnails[1].title}
                </div>
                <div className="text-[10px] text-gray-500 font-semibold">
                  {wedding.thumbnails[1].price}
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Poster Besar Horizontal (8 Kolom di Desktop) */}
          <div className="lg:col-span-8 relative">
            <div
              className="relative group bg-white p-3 sm:p-4 rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-2 border-white/50 cursor-pointer hover:scale-[1.01] transition-all duration-300"
              onClick={() =>
                setSelectedImg({
                  src: wedding.mainPoster,
                  title: "Horison Wedding Package - Marry Me",
                })
              }
            >
              {/* Paku 3 di sudut kiri atas poster utama (tempat bertemunya garis string kuning) */}
              <div
                ref={pin3Ref}
                className="absolute -top-5 left-6 sm:left-10 z-30 flex justify-center"
              >
                <PushPin size={48} />
              </div>

              {/* Gambar Poster Utama */}
              <div className="w-full rounded-lg overflow-hidden bg-white">
                <img
                  src={wedding.mainPoster}
                  alt="Horison Wedding Marry Me Package"
                  onLoad={updatePinPositions}
                  className="w-full h-auto object-contain group-hover:brightness-[1.02] transition-all"
                />
              </div>

              {/* Overlay Hover Helper */}
              <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl pointer-events-none">
                <span className="bg-white text-blue-950 font-spartan font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-2xl">
                  🔍 Klik untuk Membaca Paket Lengkap
                </span>
              </div>
            </div>
          </div>
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
