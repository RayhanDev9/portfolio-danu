export default function ViaFabulaHero() {
  return (
    <section className="relative w-full bg-[#5832a8] pt-32 sm:pt-36 md:pt-40 pb-16 px-4 sm:px-8 border-b-4 border-purple-950/40">
      <div className="max-w-6xl mx-auto">
        {/* Wooden Frame Container */}
        <div className="relative rounded-3xl p-4 sm:p-7 bg-gradient-to-b from-[#e8c39e] via-[#d4a373] to-[#bc8a5f] shadow-[0_25px_60px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_6px_rgba(0,0,0,0.4)] border-4 sm:border-8 border-[#b07d4f]">
          {/* Inner Purple Blackboard */}
          <div className="rounded-2xl bg-[#321c69] border-2 border-white/20 p-6 sm:p-10 md:p-14 text-white shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)]">
            {/* 1. Main Heading "VIA FABULA" */}
            <div className="text-center">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                VIA FABULA
              </h1>
            </div>

            {/* 2. Decorative Divider Line (Diamond Endpoints) */}
            <div className="flex items-center justify-center my-6 sm:my-8 max-w-4xl mx-auto opacity-90">
              <span className="text-white text-xs sm:text-base select-none">
                ◆
              </span>
              <div className="flex-1 h-[2px] bg-white mx-2 sm:mx-3" />
              <span className="text-white text-xs sm:text-base select-none">
                ◆
              </span>
            </div>

            {/* 3. Bottom Row: Description Text & Logo Badge */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 pt-2">
              {/* Left: Description */}
              <div className="flex-1 max-w-2xl">
                <p className="text-xs sm:text-sm md:text-base text-purple-100 font-normal leading-relaxed text-justify sm:text-left">
                  Via Fabula is a creative agency focused on storytelling, and
                  event organizing. Through compelling narratives, innovative
                  creative solutions, and memorable experiences, Via Fabula
                  helps brands connect with their audiences in meaningful and
                  impactful ways.
                </p>
              </div>

              {/* Right: Logo Badge (FABULA) */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center text-center select-none">
                {/* Geometric Logo Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24 flex items-center justify-center text-white mb-1">
                  <img
                    src={`${import.meta.env.BASE_URL}img/vendor-experienc/fabula.avif`}
                    alt="Danu Profile"
                    className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24  rounded-full object-cover object-top transition-all duration-200 
                     
                        "ring-2 ring-[#5b13ec] ring-offset-2 ring-offset-[#e8fb31] shadow-md" // Efek border ungu melayang
                         "border-2 border-transparent hover:border-black/20" // State normal
                    `}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
