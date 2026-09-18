import { PROFILE_STATS } from "../data/profileData";

export default function ProfileStats() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PROFILE_STATS.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-7 text-center shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
          >
            <h3 className="font-spartan font-black text-4xl sm:text-5xl text-[#e8fb31] mb-1">
              {item.value}
            </h3>
            <p className="font-bold text-sm sm:text-base text-white mb-0.5">
              {item.label}
            </p>
            <span className="text-[11px] sm:text-xs text-purple-200/80">
              {item.sublabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
