import { educationList } from "../data/educationData";

export default function EducationTimeline() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-8 overflow-x-auto scrollbar-none">
      <div className="min-w-[620px] sm:min-w-[720px] relative flex flex-col items-center">
        {/* Garis Horizontal Kuning Tebal */}
        <div className="relative w-full h-[4px] bg-[#e5fc34] flex items-center justify-between my-20 sm:my-24 px-12 sm:px-20">
          {/* Ujung Kiri-Kanan Garis Barbell */}
          <div className="absolute left-0 w-3 h-3 rounded-full bg-[#e5fc34]" />
          <div className="absolute right-0 w-3 h-3 rounded-full bg-[#e5fc34]" />

          {/* Node Iterasi 3 Sekolah */}
          {educationList.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Lingkaran Node Kuning */}
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e5fc34] border-[3px] border-[#4328ec] shadow-lg z-10 transition-transform duration-300 hover:scale-125 cursor-pointer" />

              {/* Konten di Atas Garis */}
              {item.timelinePosition === "top" && (
                <div className="absolute bottom-9 sm:bottom-11 flex flex-col items-center text-center w-max">
                  <span className="font-spartan font-bold text-lg sm:text-2xl md:text-3xl text-[#e5fc34] tracking-wide">
                    {item.period}
                  </span>
                  <span className="font-sans font-semibold text-[11px] sm:text-xs md:text-sm text-white/95 uppercase tracking-wider mt-0.5">
                    {item.title}
                  </span>
                </div>
              )}

              {/* Konten di Bawah Garis */}
              {item.timelinePosition === "bottom" && (
                <div className="absolute top-9 sm:top-11 flex flex-col items-center text-center w-max">
                  <span className="font-spartan font-bold text-lg sm:text-2xl md:text-3xl text-[#e5fc34] tracking-wide">
                    {item.period}
                  </span>
                  <span className="font-sans font-semibold text-[11px] sm:text-xs md:text-sm text-white/95 uppercase tracking-wider mt-0.5">
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
