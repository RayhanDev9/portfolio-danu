import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProfileCTA() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#e8fb31] text-[#1a1a1a] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-spartan font-black text-2xl sm:text-4xl uppercase tracking-tight leading-tight mb-2">
            Interested in Collaborating?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-800 font-medium max-w-xl">
            Let's discuss your design, branding, or motion graphics needs with Danu Satya.
          </p>
        </div>

        <Link
          to="/contact"
          className="px-8 py-4 rounded-full bg-[#5b13ec] hover:bg-[#4811be] text-white font-spartan font-black text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 no-underline flex-shrink-0"
        >
          <span>Contact Me Now</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
