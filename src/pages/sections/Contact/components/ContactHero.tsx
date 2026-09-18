export default function ContactHero() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto text-center px-4 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16">
      {/* 1. Status Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#e8fb31] text-[#1a1a1a] shadow-lg mb-6 sm:mb-8 animate-bounce">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
        <span className="font-spartan font-extrabold text-xs sm:text-sm uppercase tracking-wider">
          Available for Freelance & Full-Time
        </span>
      </div>

      {/* 2. Main Spartan Title */}
      <h1 className="font-spartan font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-none mb-6 drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
        LET'S WORK <br />
        <span className="text-[#e8fb31]">TOGETHER</span>
      </h1>

      {/* 3. Subtitle Description */}
      <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-purple-100/90 leading-relaxed font-normal">
        Punya ide kreatif, butuh desain grafis berkualitas, visual branding, atau
        motion graphic untuk mengembangkan brand Anda? Hubungi saya sekarang!
      </p>
    </div>
  );
}
