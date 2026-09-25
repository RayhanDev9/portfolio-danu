import { SOFTWARE_SKILLS, CORE_CAPABILITIES } from "../data/profileData";

export default function ProfileSkills() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#e8fb31] block mb-2">
            Expertise & Workflow
          </span>
          <h2 className="font-spartan font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase">
            Software & Skills
          </h2>
        </div>

        {/* 1. Software Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SOFTWARE_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="bg-black/20 border border-white/10 rounded-2xl p-5 hover:bg-black/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">
                      {skill.name}
                    </h4>
                    <span className="text-xs font-black text-[#e8fb31]">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                    <div
                      className="h-full bg-[#e8fb31] rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-purple-200/80 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Core Capabilities Chips */}
        <div>
          <h4 className="text-center font-bold text-sm uppercase tracking-wider text-purple-200 mb-4">
            Design Specialization
          </h4>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {CORE_CAPABILITIES.map((cap) => (
              <span
                key={cap}
                className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm shadow-sm"
              >
                ✓ {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
