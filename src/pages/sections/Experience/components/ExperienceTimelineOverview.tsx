import { timelineOverviewList } from "../data/experienceData";

export default function ExperienceTimelineOverview() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 overflow-x-auto">
      <div className="min-w-[600px] relative flex flex-col items-center">
        {/* Garis Horizontal Kuning */}
        <div className="relative w-full h-[3px] bg-[#e5fc34] flex items-center justify-between my-16 px-12">
          {/* Ujung Kiri-Kanan Garis Barbell */}
          <div className="absolute left-0 w-2 h-2 rounded-full bg-[#e5fc34]" />
          <div className="absolute right-0 w-2 h-2 rounded-full bg-[#e5fc34]" />

          {/* Node Iterasi 3 Perusahaan */}
          {timelineOverviewList.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Lingkaran Node Kuning */}
              <div className="w-5 h-5 rounded-full bg-[#e5fc34] border-2 border-[#5b13ec] shadow-md z-10" />

              {/* Element di Atas Garis */}
              <div className="absolute bottom-8 flex flex-col items-center text-center w-max">
                {item.position === "top" ? (
                  <>
                    <span className="font-spartan font-bold text-lg sm:text-xl text-[#e5fc34]">
                      {item.year}
                    </span>
                    <span className="font-sans italic text-xs text-white/90">
                      {item.period}
                    </span>
                  </>
                ) : (
                  <div className="h-10 flex flex-col items-center justify-center gap-1">
                    <img
                      src={item.logo}
                      alt={item.companyName}
                      className="max-h-8 object-contain filter brightness-0 invert"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (sibling) sibling.style.display = "block";
                      }}
                    />
                    <span
                      className="font-bold text-white text-xs hidden"
                      style={{ display: "none" }}
                    >
                      {item.companyName}
                    </span>
                  </div>
                )}
              </div>

              {/* Element di Bawah Garis */}
              <div className="absolute top-8 flex flex-col items-center text-center w-max">
                {item.position === "top" ? (
                  <div className="h-10 flex flex-col items-center justify-center gap-1">
                    <img
                      src={item.logo}
                      alt={item.companyName}
                      className="max-h-8 object-contain filter brightness-0 invert"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (sibling) sibling.style.display = "block";
                      }}
                    />
                    <span
                      className="font-bold text-white text-xs"
                      style={{ display: "none" }}
                    >
                      {item.companyName}
                    </span>
                  </div>
                ) : (
                  <>
                    <span className="font-spartan font-bold text-lg sm:text-xl text-[#e5fc34]">
                      {item.year}
                    </span>
                    <span className="font-sans italic text-xs text-white/90">
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
