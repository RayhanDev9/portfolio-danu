import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  X,
  BookOpen,
  Building2,
  ShoppingBag,
  Sparkles,
  Flame,
  Layers,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";

// =============================================
// Ikon Instagram SVG
// =============================================
function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
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
// DATA: Sub-link Graphic Design with Icons & Desc
// =============================================
const designSubLinks = [
  {
    label: "Majlis Ta'lim",
    description: "Islamic community branding & event materials",
    href: "/graphic-design/majlis",
    icon: BookOpen,
  },
  {
    label: "Horison Altama",
    description: "Hotel & hospitality promotional branding",
    href: "/graphic-design/horison",
    icon: Building2,
  },
  {
    label: "Astra Otoshop",
    description: "Automotive e-commerce & spare parts promo",
    href: "/graphic-design/astraotoshop",
    icon: ShoppingBag,
  },
  {
    label: "Mister Klinner",
    description: "Household cleaning products & lifestyle",
    href: "/graphic-design/mister-klinner",
    icon: Sparkles,
  },
  {
    label: "Geonerations",
    description: "Youth pop culture & East Javanese meme content",
    href: "/graphic-design/geonerations",
    icon: Flame,
  },
  {
    label: "Via Fabula",
    description: "Creative storytelling & event organizing",
    href: "/graphic-design/via-fabula",
    icon: Layers,
  },
];

// =============================================
// HELPER: Cek link aktif
// =============================================
function isActive(currentPath: string, href: string): boolean {
  if (href === "/") return currentPath === "/";
  return currentPath.startsWith(href);
}

// =============================================
// MAIN NAVBAR COMPONENT
// =============================================
export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(true);
  const [desktopDesignOpen, setDesktopDesignOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Tutup dropdown desktop jika klik di luar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopDesignOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tutup menu saat rute berpindah
  useEffect(() => {
    setMobileOpen(false);
    setDesktopDesignOpen(false);
  }, [location.pathname]);

  const isDesignActive = currentPath.startsWith("/graphic-design");

  return (
    <>
      {/* ============================
          TOP NAVBAR HEADER BAR
          ============================ */}
      <nav
        id="main-navbar"
        className="fixed  top-0 left-0 right-0 z-40 w-full px-4 sm:px-6 py-4 sm:py-6 bg-transparent border-none"
      >
        {/* ============================
            DESKTOP NAVBAR (md ke atas)
            ============================ */}
        <div className="hidden md:flex items-center justify-center">
          {/* Pill kuning melayang */}
          <div className="flex items-center gap-1 lg:gap-2 bg-[#e8fb31] rounded-full px-4 lg:px-6 py-2 shadow-xl border border-black/5">
            {/* Link: Home */}
            <Link
              to="/"
              className={`font-spartan font-bold text-sm lg:text-base px-3 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${
                isActive(currentPath, "/") && !isDesignActive
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10"
              }`}
            >
              Home
            </Link>

            {/* Link: Experience */}
            <Link
              to="/experience"
              className={`font-spartan font-bold text-sm lg:text-base px-3 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${
                isActive(currentPath, "/experience")
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10"
              }`}
            >
              Experience
            </Link>

            {/* Dropdown: Graphic Design */}
            <div ref={dropdownRef} className="relative">
              <button
                id="design-dropdown-btn"
                onClick={() => setDesktopDesignOpen((prev) => !prev)}
                className={`font-spartan font-bold text-sm lg:text-base px-3 lg:px-5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer border-none ${
                  isDesignActive
                    ? "bg-[#5b13ec] text-white shadow-md"
                    : "text-[#1a1a1a] hover:bg-black/10 bg-transparent"
                }`}
              >
                Graphic Design
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    desktopDesignOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Panel Desktop */}
              {desktopDesignOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden min-w-[240px] z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {designSubLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      className={`flex items-center gap-3 px-4 py-2.5 font-spartan font-bold text-sm no-underline transition-colors duration-150 ${
                        isActive(currentPath, sub.href)
                          ? "bg-[#5b13ec] text-white"
                          : "text-[#1a1a1a] hover:bg-[#e8fb31]"
                      }`}
                    >
                      <sub.icon className="w-4 h-4 opacity-80" />
                      <span>{sub.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Link: Motion Graphic */}
            <Link
              to="/motion-graphic"
              className={`font-spartan font-bold text-sm lg:text-base px-3 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${
                isActive(currentPath, "/motion-graphic")
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10"
              }`}
            >
              Motion Graphic
            </Link>

            {/* Link: Brands */}
            <Link
              to="/creative-journey"
              className={`font-spartan font-bold text-sm lg:text-base px-3 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${
                isActive(currentPath, "/creative-journey")
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10"
              }`}
            >
              Brands
            </Link>

            {/* Link: Contact */}
            <Link
              to="/contact"
              className={`font-spartan font-bold text-sm lg:text-base px-3 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${
                isActive(currentPath, "/contact")
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10"
              }`}
            >
              Contact
            </Link>

            {/* Foto Profil — pojok kanan pill */}
            <Link
              to="/profile"
              title="Lihat Profil Danu"
              className="ml-2 flex-shrink-0 transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              <img
                src={`${import.meta.env.BASE_URL}img/profile/danu-duduk.png`}
                alt="Danu Profile"
                className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover object-top transition-all duration-200 ${
                  currentPath === "/profile"
                    ? "ring-2 ring-[#5b13ec] ring-offset-2 ring-offset-[#e8fb31] shadow-md"
                    : "border-2 border-transparent hover:border-black/20"
                }`}
              />
            </Link>
          </div>
        </div>

        {/* ============================
            MOBILE NAVBAR TRIGGER (< md)
            ============================ */}
        <div className="flex md:hidden items-center justify-between">
          <Link
            to="/profile"
            title="Lihat Profil Danu"
            className="flex items-center gap-2.5 transition-transform duration-200 hover:scale-105 active:scale-95 no-underline"
          >
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}img/profile/danu-duduk.png`}
                alt="Danu Profile"
                className={`w-9 h-9 rounded-full object-cover object-top transition-all duration-200 ${
                  currentPath === "/profile"
                    ? "ring-2 ring-[#e8fb31] shadow-lg"
                    : "ring-2 ring-white/30 hover:ring-[#e8fb31]"
                }`}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#e8fb31] ring-2 ring-[#5b13ec]" />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-black text-sm tracking-wide text-white drop-shadow">
                Danu Prasetyo
              </span>
              <span className="font-sans text-[10px] text-[#e8fb31] font-semibold -mt-1">
              Graphic & Motion Designer
              </span>
            </div>
          </Link>

          {/* Hamburger Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-xl bg-[#e8fb31] text-[#1a1a1a] shadow-lg border-none cursor-pointer hover:bg-yellow-300 active:scale-95 transition-all"
          >
            <span className="block w-5 h-0.5 bg-[#1a1a1a] rounded-full" />
            <span className="block w-5 h-0.5 bg-[#1a1a1a] rounded-full" />
            <span className="block w-5 h-0.5 bg-[#1a1a1a] rounded-full" />
          </button>
        </div>
      </nav>

      {/* ============================
          SUPABASE-STYLE MOBILE MENU OVERLAY
          ============================ */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0f0728]/95 backdrop-blur-2xl text-white flex flex-col overflow-y-auto animate-in fade-in duration-200 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Header Bar: Brand on Left, Close Button on Right */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 sticky top-0 bg-[#0f0728]/80 backdrop-blur-md z-10">
            <Link
              to="/profile"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 no-underline group"
            >
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}img/profile/danu-duduk.png`}
                  alt="Danu Profile"
                  className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-[#e8fb31] group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#e8fb31] ring-2 ring-[#0f0728]" />
              </div>
              <div className="flex flex-col">
                <span className="font-spartan font-bold text-base text-white group-hover:text-[#e8fb31] transition-colors leading-tight">
                  Danu Prasetyo
                </span>
                <span className="font-sans text-xs text-white/60">
                  Graphic & Motion Designer
                </span>
              </div>
            </Link>

            {/* Close Button "X" */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items List (Separated with Borders) */}
          <div className="flex-1 px-6 py-4 flex flex-col divide-y divide-white/10 font-spartan">
            {/* Item: Home */}
            <div className="py-3">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${
                  isActive(currentPath, "/") && !isDesignActive
                    ? "text-[#e8fb31]"
                    : "text-white/90 hover:text-[#e8fb31]"
                }`}
              >
                <span>Home</span>
                {isActive(currentPath, "/") && !isDesignActive && (
                  <span className="w-2 h-2 rounded-full bg-[#e8fb31]" />
                )}
              </Link>
            </div>

            {/* Item: Experience */}
            <div className="py-3">
              <Link
                to="/experience"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${
                  isActive(currentPath, "/experience")
                    ? "text-[#e8fb31]"
                    : "text-white/90 hover:text-[#e8fb31]"
                }`}
              >
                <span>Experience</span>
                {isActive(currentPath, "/experience") && (
                  <span className="w-2 h-2 rounded-full bg-[#e8fb31]" />
                )}
              </Link>
            </div>

            {/* Accordion Item: Graphic Design (Supabase Style) */}
            <div className="py-3">
              <button
                onClick={() => setMobileAccordionOpen((prev) => !prev)}
                className="w-full flex items-center justify-between py-2 text-lg font-bold text-left bg-transparent border-none cursor-pointer transition-colors"
              >
                <span
                  className={
                    isDesignActive || mobileAccordionOpen
                      ? "text-[#e8fb31]"
                      : "text-white/90 hover:text-[#e8fb31]"
                  }
                >
                  Graphic Design
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileAccordionOpen
                      ? "rotate-180 text-[#e8fb31]"
                      : "text-white/60"
                  }`}
                />
              </button>

              {/* Sub-items List (Matching Supabase Screenshot 2 layout) */}
              <div
                className={`grid grid-cols-1 gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileAccordionOpen
                    ? "max-h-[800px] opacity-100 pt-2 pb-1"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                {designSubLinks.map((sub) => {
                  const active = isActive(currentPath, sub.href);
                  const Icon = sub.icon;
                  return (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className={`group flex items-center gap-3.5 p-2.5 rounded-xl no-underline transition-all duration-150 ${
                        active
                          ? "bg-white/10 border border-[#e8fb31]/40"
                          : "hover:bg-white/5 active:bg-white/10 border border-transparent"
                      }`}
                    >
                      {/* Box Icon rounded squarish */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          active
                            ? "bg-[#5b13ec] text-[#e8fb31] border border-[#e8fb31]/50 shadow-md"
                            : "bg-white/5 border border-white/10 text-white/80 group-hover:bg-[#5b13ec] group-hover:border-[#5b13ec] group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content: Title & Subtitle */}
                      <div className="flex flex-col min-w-0 flex-1">
                        <span
                          className={`font-spartan font-bold text-[15px] leading-tight transition-colors ${
                            active
                              ? "text-[#e8fb31]"
                              : "text-white group-hover:text-[#e8fb31]"
                          }`}
                        >
                          {sub.label}
                        </span>
                        <span className="font-sans text-xs text-white/60 group-hover:text-white/80 transition-colors mt-0.5 line-clamp-1">
                          {sub.description}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Item: Motion Graphic */}
            <div className="py-3">
              <Link
                to="/motion-graphic"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${
                  isActive(currentPath, "/motion-graphic")
                    ? "text-[#e8fb31]"
                    : "text-white/90 hover:text-[#e8fb31]"
                }`}
              >
                <span>Motion Graphic</span>
                {isActive(currentPath, "/motion-graphic") && (
                  <span className="w-2 h-2 rounded-full bg-[#e8fb31]" />
                )}
              </Link>
            </div>

            {/* Item: Brands */}
            <div className="py-3">
              <Link
                to="/creative-journey"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${
                  isActive(currentPath, "/creative-journey")
                    ? "text-[#e8fb31]"
                    : "text-white/90 hover:text-[#e8fb31]"
                }`}
              >
                <span>Brands</span>
                {isActive(currentPath, "/creative-journey") && (
                  <span className="w-2 h-2 rounded-full bg-[#e8fb31]" />
                )}
              </Link>
            </div>

            {/* Item: Contact */}
            <div className="py-3">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${
                  isActive(currentPath, "/contact")
                    ? "text-[#e8fb31]"
                    : "text-white/90 hover:text-[#e8fb31]"
                }`}
              >
                <span>Contact</span>
                {isActive(currentPath, "/contact") && (
                  <span className="w-2 h-2 rounded-full bg-[#e8fb31]" />
                )}
              </Link>
            </div>

            {/* Item: Profile */}
            <div className="py-3">
              <Link
                to="/profile"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${
                  isActive(currentPath, "/profile")
                    ? "text-[#e8fb31]"
                    : "text-white/90 hover:text-[#e8fb31]"
                }`}
              >
                <span>Profile</span>
                {isActive(currentPath, "/profile") && (
                  <span className="w-2 h-2 rounded-full bg-[#e8fb31]" />
                )}
              </Link>
            </div>
          </div>

          {/* Bottom Action / CTA Section */}
          <div className="p-6 border-t border-white/10 bg-[#0a041c]/60 flex flex-col gap-3">
            <a
              href="https://wa.me/62881010069341"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 bg-[#e8fb31] text-[#1a1a1a] font-spartan font-black text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all shadow-lg shadow-[#e8fb31]/10 active:scale-[0.98] no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Let's Talk on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            {/* Quick Contact Row */}
            <div className="flex items-center justify-center gap-6 pt-2 text-xs text-white/60">
              <a
                href="mailto:Danusatya9@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#e8fb31] transition-colors no-underline text-white/70"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://instagram.com/dnustya_"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#e8fb31] transition-colors no-underline text-white/70"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
