import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  MessageCircle,
  ArrowUp,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

// =============================================
// Ikon Instagram SVG
// =============================================
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// =============================================
// DATA: Navigasi Utama
// =============================================
const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Graphic Design", href: "/graphic-design/majlis" },
  { label: "Motion Graphic", href: "/motion-graphic" },
  { label: "Brands & Journey", href: "/creative-journey" },
  { label: "Profile", href: "/profile" },
  { label: "Contact", href: "/contact" },
];

// =============================================
// DATA: Showcase Graphic Design Projects
// =============================================
const designProjects = [
  { label: "Majlis Ta'lim", href: "/graphic-design/majlis" },
  { label: "Horison Altama", href: "/graphic-design/horison" },
  { label: "Astra Otoshop", href: "/graphic-design/astraotoshop" },
  { label: "Mister Klinner", href: "/graphic-design/mister-klinner" },
  { label: "Geonerations", href: "/graphic-design/geonerations" },
  { label: "Via Fabula", href: "/graphic-design/via-fabula" },
];

// =============================================
// DATA: Kontak Langsung
// =============================================
const contactList = [
  {
    label: "WhatsApp",
    value: "+62 881 010 069 341",
    href: "https://wa.me/62881010069341?text=Hello%20Danu,%20I'm%20interested%20in%20working%20together%20on%20a%20design%20project.",
    icon: MessageCircle,
    badge: "Fast Response",
  },
  {
    label: "Email",
    value: "Danusatya9@gmail.com",
    href: "mailto:Danusatya9@gmail.com?subject=Design%20Project%20Inquiry",
    icon: Mail,
    badge: "Official Inquiry",
  },
  {
    label: "Instagram",
    value: "@dnustya_",
    href: "https://instagram.com/dnustya_",
    icon: InstagramIcon,
    badge: "Daily Portfolio",
  },
];

// =============================================
// HELPER: Cek Link Aktif
// =============================================
function isLinkActive(currentPath: string, href: string): boolean {
  if (href === "/") return currentPath === "/";
  if (href === "/graphic-design/majlis") {
    return currentPath.startsWith("/graphic-design");
  }
  return currentPath === href || currentPath.startsWith(href);
}

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#1b0654] text-white overflow-hidden font-sans select-none border-t-2 border-white/10"
      style={{
        backgroundImage:
          "repeating-linear-gradient(120deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)",
      }}
    >
      {/* =========================================
          HEADER: "Lets CONNECT There" + Status
          ========================================= */}
      <div className="w-full text-center pt-12 sm:pt-16 pb-8 sm:pb-10 px-4">
        {/* Status Ketersediaan Live Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e8fb31] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Available for Freelance & Full-time Projects</span>
        </div>

        {/* Big Catchy Title */}
        <h2 className="font-spartan tracking-tight leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="font-playfair italic font-normal text-white">
            Lets{" "}
          </span>
          <span className="font-black text-[#e8fb31] drop-shadow-[0_0_20px_rgba(232,251,49,0.4)]">
            CONNECT{" "}
          </span>
          <span className="font-playfair italic font-normal text-white">
            There
          </span>
        </h2>
        <p className="font-sans text-xs sm:text-sm text-purple-200/80 max-w-md mx-auto mt-2">
          Have a project idea, branding need, or motion graphic inquiry? Let's connect and build something extraordinary together.
        </p>
      </div>

      {/* =========================================
          GRID UTAMA (4 KOLOM)
          ========================================= */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Kolom 1: NAVIGATION (3 Kolom) */}
          <div className="lg:col-span-3">
            <h3 className="font-spartan font-bold text-base sm:text-lg text-[#e8fb31] mb-4 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {mainNavLinks.map((link) => {
                const active = isLinkActive(currentPath, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={handleScrollTop}
                      className={`inline-flex items-center gap-2 no-underline text-sm sm:text-[15px] transition-all duration-200 ${
                        active
                          ? "text-[#e8fb31] font-spartan font-bold translate-x-1 drop-shadow-md"
                          : "text-white/80 hover:text-[#e8fb31] hover:translate-x-1 font-normal"
                      }`}
                    >
                      {active ? (
                        <span className="w-2 h-2 rounded-full bg-[#e8fb31] shadow-[0_0_8px_#e8fb31]" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      )}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Kolom 2: GRAPHIC DESIGN SHOWCASE (3 Kolom) */}
          <div className="lg:col-span-3">
            <h3 className="font-spartan font-bold text-base sm:text-lg text-[#e8fb31] mb-4 tracking-wider uppercase">
              Featured Projects
            </h3>
            <ul className="flex flex-col gap-2">
              {designProjects.map((proj) => {
                const active = currentPath === proj.href;
                return (
                  <li key={proj.href}>
                    <Link
                      to={proj.href}
                      onClick={handleScrollTop}
                      className={`inline-flex items-center gap-2 no-underline text-sm sm:text-[15px] transition-all duration-200 ${
                        active
                          ? "text-[#e8fb31] font-spartan font-bold translate-x-1 drop-shadow-md"
                          : "text-white/80 hover:text-[#e8fb31] hover:translate-x-1 font-normal"
                      }`}
                    >
                      {active ? (
                        <span className="w-2 h-2 rounded-full bg-[#e8fb31] shadow-[0_0_8px_#e8fb31]" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      )}
                      <span>{proj.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Kolom 3: DIRECT CONTACTS & ACTION (3 Kolom) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-spartan font-bold text-base sm:text-lg text-[#e8fb31] mb-1 tracking-wider uppercase">
              Get in Touch
            </h3>

            {contactList.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e8fb31]/50 no-underline transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-[#5b13ec] text-[#e8fb31] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-spartan font-bold text-xs text-[#e8fb31] leading-none">
                        {item.label}
                      </span>
                      <span className="font-sans text-xs text-white/90 group-hover:text-white transition-colors mt-0.5 break-all">
                        {item.value}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#e8fb31] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}

            {/* Location Pill */}
            <div className="flex items-center gap-2 pt-1 text-xs text-purple-200/70">
              <MapPin className="w-3.5 h-3.5 text-[#e8fb31]" />
              <span>Indonesia • Available Worldwide</span>
            </div>
          </div>

          {/* Kolom 4: FOTO DANU (3 Kolom) — Desktop Only */}
          <div className="hidden lg:flex lg:col-span-3 items-end justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#5b13ec]/40 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-300" />
              <img
                src={`${import.meta.env.BASE_URL}img/profile/danu-jas.avif`}
                alt="Danu Prasetyo"
                className="relative h-60 xl:h-72 object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          GARIS PEMISAH & BOTTOM BAR
          ========================================= */}
      <div className="w-full border-t border-white/10 bg-[#12033b]/90 px-6 sm:px-10 lg:px-12 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-spartan text-sm text-purple-200/80 font-normal">
            © 2026 <strong className="text-white font-bold">Danu Prasetyo</strong>. All rights reserved.
          </p>

          {/* Tombol Back to Top */}
          <button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#e8fb31] text-white hover:text-[#1a1a1a] border border-white/15 font-spartan font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
