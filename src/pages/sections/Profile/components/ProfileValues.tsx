import { Lightbulb, Target, Palette } from "lucide-react";
import { PROFILE_VALUES } from "../data/profileData";

export default function ProfileValues() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div className="text-center mb-10">
        <span className="text-xs font-black uppercase tracking-wider text-[#e8fb31] block mb-2">
          Work Principles
        </span>
        <h2 className="font-spartan font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase">
          Filosofi & Nilai Desain
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROFILE_VALUES.map((val) => (
          <div
            key={val.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#e8fb31] text-[#1a1a1a] flex items-center justify-center mb-5 shadow-md">
                {val.icon === "lightbulb" && <Lightbulb className="w-6 h-6" />}
                {val.icon === "target" && <Target className="w-6 h-6" />}
                {val.icon === "palette" && <Palette className="w-6 h-6" />}
              </div>
              <h3 className="font-spartan font-black text-xl text-white mb-3">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed font-normal">
                {val.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
