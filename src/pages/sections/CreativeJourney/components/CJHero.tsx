export const CJHero = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-center select-none w-full px-4 mb-4 md:mb-6">
      {/* Subtitle — putih dengan stroke ungu/biru */}
      <p
        className="font-spartan font-black text-white uppercase mb-1 md:mb-2
          text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
          tracking-[0.15em] sm:tracking-[0.2em]"
        style={{
          WebkitTextStroke: "1.5px #5b13ec",
          textShadow: "0 2px 10px rgba(91,19,236,0.5), 0 0 20px rgba(91,19,236,0.3)",
        }}
      >
        BRANDS THAT HAVE BEEN PART OF MY
      </p>

      {/* Judul besar — kuning dengan stroke ungu tebal */}
      <h2
        className="font-spartan font-black text-[#e5fc34] leading-[0.9] tracking-tight
          text-[11vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.5vw] xl:text-[7rem]"
        style={{
          WebkitTextStroke: "2.5px #5b13ec",
          textShadow:
            "0 4px 24px rgba(229,252,52,0.30), 0 0 40px rgba(91,19,236,0.25)",
        }}
      >
        CREATIVE JOURNEY
      </h2>
    </div>
  );
};
