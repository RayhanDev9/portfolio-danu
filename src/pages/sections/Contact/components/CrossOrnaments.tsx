export default function CrossOrnaments() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Kiri Atas */}
      <div className="absolute top-28 left-6 sm:left-12 text-[#e8fb31] text-2xl sm:text-3xl font-black opacity-60 animate-pulse">
        +
      </div>
      <div className="absolute top-44 left-20 sm:left-32 text-white text-xl sm:text-2xl font-black opacity-40">
        +
      </div>

      {/* Kanan Atas */}
      <div className="absolute top-32 right-8 sm:right-16 text-[#e8fb31] text-3xl sm:text-4xl font-black opacity-70 animate-pulse">
        +
      </div>
      <div className="absolute top-60 right-24 text-white text-lg sm:text-xl font-black opacity-30">
        +
      </div>

      {/* Kiri Bawah */}
      <div className="absolute bottom-40 left-10 text-[#e8fb31] text-3xl font-black opacity-50">
        +
      </div>

      {/* Kanan Bawah */}
      <div className="absolute bottom-24 right-12 text-white text-2xl sm:text-3xl font-black opacity-40 animate-pulse">
        +
      </div>
    </div>
  );
}
