export default function MotionHero() {
  return (
    <section className="relative w-full bg-[#48209e] pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-8 border-b-4 border-purple-950/40 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Wooden Frame Container */}
        <div className="relative rounded-3xl p-4 sm:p-7 bg-gradient-to-b from-[#e8c39e] via-[#d4a373] to-[#bc8a5f] shadow-[0_25px_60px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_6px_rgba(0,0,0,0.4)] border-4 sm:border-8 border-[#b07d4f]">
          {/* Inner Purple Blackboard */}
          <div className="rounded-2xl bg-[#2e1268] border-2 border-[#8b5cf6]/50 p-6 sm:p-10 md:p-14 text-white shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)]">
            {/* Double Border Frame around Text */}
            <div className="border-2 border-[#a78bfa]/60 p-4 sm:p-8 rounded-xl flex items-center justify-center text-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-wider uppercase drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] font-spartan">
                MOTION GRAFIK
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
