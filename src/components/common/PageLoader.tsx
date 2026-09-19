export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0f0728] flex flex-col items-center justify-center gap-4 transition-opacity duration-300">
      {/* Animated glowing spinner */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-[#5b13ec]/30 animate-ping" />
        <div className="w-12 h-12 rounded-full border-4 border-t-[#e8fb31] border-r-[#5b13ec] border-b-transparent border-l-transparent animate-spin" />
        <div className="w-3 h-3 rounded-full bg-[#e8fb31] shadow-[0_0_12px_#e8fb31]" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="font-spartan font-black text-white text-sm tracking-wider uppercase">
          Danu Satya
        </span>
        <span className="font-sans text-xs text-purple-200/60 font-medium animate-pulse">
          Loading content...
        </span>
      </div>
    </div>
  );
}
