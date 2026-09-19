import { useState } from "react";
import { MapPin, CheckCircle, Clock, MessageCircle } from "lucide-react";
import { PROFILE_INFO, SERVICE_CATEGORIES } from "../data/contactData";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [selectedService, setSelectedService] = useState(SERVICE_CATEGORIES[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Danu, nama saya ${name || "Klien"}.\n\nSaya tertarik dengan layanan: *${selectedService}*.\n\nDetail Pesan:\n${message || "Mohon info lebih lanjut mengenai kerja sama proyek."}`;
    const url = `https://wa.me/62881010069341?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 1. Sisi Kiri: Profil Card Danu (5 Kolom) */}
        <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-white">
          <div>
            {/* Foto Profil & Badge */}
            <div className="relative mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-3xl overflow-hidden border-4 border-[#e8fb31] shadow-2xl bg-[#5b13ec]">
                <img
                  src={PROFILE_INFO.avatar}
                  alt={PROFILE_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#e8fb31] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md whitespace-nowrap">
                Creative Partner
              </div>
            </div>

            {/* Nama & Role */}
            <div className="text-center mb-6 pt-2">
              <h3 className="font-spartan font-black text-2xl sm:text-3xl text-white">
                {PROFILE_INFO.name}
              </h3>
              <p className="text-sm text-[#e8fb31] font-bold">
                {PROFILE_INFO.role}
              </p>
            </div>

            {/* Info Lokasi & Waktu Respon */}
            <div className="space-y-3 bg-black/20 p-4 rounded-2xl mb-6">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-purple-100">
                <MapPin className="w-4 h-4 text-[#e8fb31] shrink-0" />
                <span>{PROFILE_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-purple-100">
                <Clock className="w-4 h-4 text-[#e8fb31] shrink-0" />
                <span>Fast Response (08.00 - 22.00 WIB)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-purple-100">
                <CheckCircle className="w-4 h-4 text-[#e8fb31] shrink-0" />
                <span>Revisi Ramah & Tepat Waktu</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#e8fb31]/10 border border-[#e8fb31]/30 text-center">
            <p className="text-xs text-[#e8fb31] font-bold">
              💡 Siap membantu proyek branding, feed medsos, hingga motion
              graphic!
            </p>
          </div>
        </div>

        {/* 2. Sisi Kanan: Form Kirim Pesan Cepat (7 Kolom) */}
        <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#5b13ec"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-900 flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="font-spartan font-black text-2xl sm:text-3xl text-slate-900">
                Kirim Brief Proyek
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Isi formulir singkat di bawah ini untuk memulai obrolan langsung
              via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Input Nama */}
              <div>
                <label className="block font-bold text-xs uppercase tracking-wider text-slate-700 mb-1.5">
                  Nama Anda / Perusahaan
                </label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Danu / PT. Creative Studio"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5b13ec] text-sm"
                />
              </div>

              {/* Kategori Layanan (Chips) */}
              <div>
                <label className="block font-bold text-xs uppercase tracking-wider text-slate-700 mb-2">
                  Layanan yang Dibutuhkan
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setSelectedService(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border-none cursor-pointer ${
                        selectedService === cat
                          ? "bg-[#5b13ec] text-white shadow-md scale-105"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Pesan / Brief */}
              <div>
                <label className="block font-bold text-xs uppercase tracking-wider text-slate-700 mb-1.5">
                  Detail Kebutuhan / Pesan
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ceritakan gambaran proyek, target waktu, atau referensi desain yang diinginkan..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5b13ec] text-sm resize-none"
                />
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#e8fb31] hover:bg-[#d8ea20] text-[#1a1a1a] font-spartan font-black text-base sm:text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer border-none"
              >
                <span>Kirim Pesan ke WhatsApp</span>
                <MessageCircle />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
