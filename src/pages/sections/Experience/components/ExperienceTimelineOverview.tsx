import { timelineOverviewList } from "../data/experienceData";

export default function ExperienceTimelineOverview() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-8 overflow-x-auto">
      <div className="min-w-[720px] relative flex flex-col items-center">
        {/* Garis Horizontal Kuning Tebal */}
        <div className="relative w-full h-[4px] bg-[#e5fc34] flex items-center justify-between my-24 px-12 sm:px-16">
          {/* Ujung Kiri-Kanan Garis Barbell */}
          <div className="absolute left-0 w-3 h-3 rounded-full bg-[#e5fc34]" />
          <div className="absolute right-0 w-3 h-3 rounded-full bg-[#e5fc34]" />

          {/* Node Iterasi 3 Perusahaan */}
          {timelineOverviewList.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Lingkaran Node Kuning Lebih Besar */}
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e5fc34] border-[3px] border-[#4328ec] shadow-lg z-10 transition-transform hover:scale-125" />

              {/* Element di Atas Garis */}
              <div className="absolute bottom-10 flex flex-col items-center text-center w-max">
                {item.position === "top" ? (
                  <>
                    <span className="font-spartan font-bold text-xl sm:text-2xl md:text-3xl text-[#e5fc34] tracking-wide">
                      {item.year}
                    </span>
                    <span className="font-sans italic text-xs sm:text-sm text-white/90 mt-0.5">
                      {item.period}
                    </span>
                  </>
                ) : (
                  <div className="h-14 flex flex-col items-center justify-center gap-1">
                    <img
                      src={item.logo}
                      alt={item.companyName}
                      className="max-h-10 sm:max-h-12 object-contain filter brightness-0 invert drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const sibling = e.currentTarget
                          .nextElementSibling as HTMLElement;
                        if (sibling) sibling.style.display = "block";
                      }}
                    />
                    <span
                      className="font-bold text-white text-sm hidden"
                      style={{ display: "none" }}
                    >
                      {item.companyName}
                    </span>
                  </div>
                )}
              </div>

              {/* Element di Bawah Garis */}
              <div className="absolute top-10 flex flex-col items-center text-center w-max">
                {item.position === "top" ? (
                  <div className="h-14 flex flex-col items-center justify-center gap-1">
                    <img
                      src={item.logo}
                      alt={item.companyName}
                      className="max-h-10 sm:max-h-12 object-contain filter brightness-0 invert drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const sibling = e.currentTarget
                          .nextElementSibling as HTMLElement;
                        if (sibling) sibling.style.display = "block";
                      }}
                    />
                    <span
                      className="font-bold text-white text-sm"
                      style={{ display: "none" }}
                    >
                      {item.companyName}
                    </span>
                  </div>
                ) : (
                  <>
                    <span className="font-spartan font-bold text-xl sm:text-2xl md:text-3xl text-[#e5fc34] tracking-wide">
                      {item.year}
                    </span>
                    <span className="font-sans italic text-xs sm:text-sm text-white/90 mt-0.5">
                      {item.period}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
