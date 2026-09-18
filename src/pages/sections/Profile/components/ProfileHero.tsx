import { Link } from "react-router-dom";
import { Sparkles, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data/profileData";

export default function ProfileHero() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-40 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* 1. Sisi Kiri: Foto Profil 3D (5 Kolom) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#e8fb31] to-purple-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

            {/* Frame Kartu Foto */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-4 border-[#e8fb31] bg-[#5b13ec] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#e8fb31] text-[#1a1a1a] px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border-2 border-white">
              <Sparkles className="w-5 h-5 fill-current" />
              <div>
                <span className="block font-spartan font-black text-sm sm:text-base leading-none">
                  5+ Tahun
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider block">
                  Pengalaman
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Sisi Kanan: Bio & Deskripsi (7 Kolom) */}
        <div className="lg:col-span-7 text-center lg:text-left text-white">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e8fb31] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Creative Visual Specialist</span>
          </div>

          {/* Nama & Tagline */}
          <h1 className="font-spartan font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-none mb-3">
            DANU <span className="text-[#e8fb31]">RAYHAN</span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-200 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 text-[#e8fb31]" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          {/* Paragraf Bio */}
          <p className="text-sm sm:text-base md:text-lg text-purple-100/90 leading-relaxed font-normal mb-8 max-w-2xl mx-auto lg:mx-0">
            {PERSONAL_INFO.about}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3.5 rounded-full bg-[#e8fb31] hover:bg-[#d8ea20] text-[#1a1a1a] font-spartan font-black text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 no-underline"
            >
              <span>Hubungi Saya</span>
              <MessageCircle className="w-4 h-4" />
            </Link>

            <Link
              to="/creative-journey"
              className="px-6 sm:px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-spartan font-bold text-sm sm:text-base uppercase tracking-wider backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 no-underline"
            >
              <span>Lihat Portofolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
