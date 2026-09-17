export default function CrossOrnaments() {
  return (
    <>
      {/* Ornamen Cross Retro (+) 1 */}
      <div className="absolute top-16 left-[4%] md:top-24 md:left-[5%] flex items-center justify-center pointer-events-none opacity-70">
        <span className="text-xl font-light text-white z-10">+</span>
        <div className="absolute w-10 border-t border-dashed border-white/40" />
        <div className="absolute h-10 border-l border-dashed border-white/40" />
      </div>

      {/* Ornamen Cross Retro (+) 2 */}
      <div className="hidden md:flex absolute top-[48%] left-[22%] items-center justify-center pointer-events-none opacity-80 z-30">
        <span className="text-xl font-light text-white z-10">+</span>
        <div className="absolute w-10 border-t border-dashed border-white/40" />
        <div className="absolute h-10 border-l border-dashed border-white/40" />
      </div>

      {/* Ornamen Cross Retro (+) 3 */}
      <div className="absolute top-16 right-[4%] md:top-20 md:right-[5%] flex items-center justify-center pointer-events-none opacity-50">
        <span className="text-sm font-light text-white z-10">+</span>
        <div className="absolute w-8 border-t border-dashed border-white/30" />
        <div className="absolute h-8 border-l border-dashed border-white/30" />
      </div>
    </>
  );
}
