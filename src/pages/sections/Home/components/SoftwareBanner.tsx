import { softwareList } from "../data/homeData";

export default function SoftwareBanner() {
  return (
    <div className="w-full bg-[#f6ed28] text-slate-900 py-3.5 sm:py-4 px-4 sm:px-8 md:px-12 lg:px-20 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 sm:gap-6 lg:gap-10 md:pl-[20rem] lg:pl-[28rem]">
        {/* Teks "Software I USE" */}
        <div className="flex flex-col items-center md:items-start leading-none shrink-0">
          <div className="flex items-center gap-2 w-full justify-center md:justify-start">
            {/* font-playfair dari @theme */}
            <span className="font-playfair italic text-xl sm:text-2xl md:text-3xl text-[#5b13ec] font-semibold">
              Software I
            </span>
            <div className="h-[2px] bg-[#5b13ec] flex-1 min-w-[2rem] sm:min-w-[2.5rem]" />
          </div>
          {/* font-bubbles (Rubik Bubbles) dari @theme */}
          <span className="font-bubbles text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#5b13ec] tracking-tighter -mt-1 sm:-mt-2">
            USE
          </span>
        </div>

        {/* Icon Software Badges — Tampilkan gambar icon nyata */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-2.5 md:gap-3">
          {softwareList.map((item) => (
            <div
              key={item.name}
              className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-base sm:text-lg md:text-xl shadow-md border border-black/10 overflow-hidden ${
                item.isCanva
                  ? "rounded-full bg-gradient-to-tr from-[#00c4cc] to-[#7d2ae8] text-white font-serif italic"
                  : `rounded-2xl ${item.bg} ${item.text}`
              }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  /* Fallback ke teks jika gambar tidak ada */
                  e.currentTarget.style.display = "none";
                  const span = e.currentTarget.nextElementSibling as HTMLElement;
                  if (span) span.style.display = "flex";
                }}
              />
              <span
                className="absolute inset-0 items-center justify-center hidden"
                aria-hidden="true"
              >
                {item.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
