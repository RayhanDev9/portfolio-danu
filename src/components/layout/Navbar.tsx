import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  X,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { DESIGN_SUB_LINKS } from "../../constants/navigation";
import { SOCIAL_LINKS } from "../../constants/socialMedia";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useScrollLock } from "../../hooks/useScrollLock";
import { getAssetUrl } from "../../utils/asset";

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
// Ikon LinkedIn SVG
// =============================================
function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0-.02-3.36 1.68 1.68 0 0 0 .02 3.36M5.07 18.5h2.78v-8.37H5.07v8.37Z" />
    </svg>
  );
}

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Kunci scroll body saat menu mobile terbuka (menggunakan custom hook)
  useScrollLock(mobileOpen);

  // Tutup dropdown desktop jika klik di luar (menggunakan custom hook)
  const closeDropdown = useCallback(() => setDesktopDesignOpen(false), []);
  useClickOutside(dropdownRef, closeDropdown, desktopDesignOpen);

  // Tutup menu dan pastikan navbar terlihat saat rute berpindah
  useEffect(() => {
    setMobileOpen(false);
    setDesktopDesignOpen(false);
    setIsVisible(true);
    lastScrollY.current = window.scrollY;
  }, [location.pathname]);

  // Efek deteksi arah scroll (hilang saat scroll ke bawah, muncul saat scroll ke atas)
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Saat di paling atas halaman (<= 20px), selalu tampilkan navbar
          if (currentScrollY <= 20) {
            setIsVisible(true);
            setIsScrolled(false);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          setIsScrolled(true);

          const diff = currentScrollY - lastScrollY.current;

          // Scroll ke bawah dengan selisih signifikan -> sembunyikan navbar & tutup dropdown desktop
          if (diff > 8 && currentScrollY > 60) {
            setIsVisible(false);
            setDesktopDesignOpen(false);
          }
          // Scroll ke atas -> tampilkan kembali navbar
          else if (diff < -8) {
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDesignActive = currentPath.startsWith("/graphic-design");
  const avatarUrl = getAssetUrl("favicon-96x96.png");

  return (
    <>
      {/* ============================
          TOP NAVBAR HEADER BAR (Smart Auto-Hide on Scroll Down & Show on Scroll Up)
          ============================ */}
      <nav
        id="main-navbar"
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ease-in-out px-3.5 sm:px-6 py-2.5 sm:py-4 pointer-events-none ${isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
          }`}
      >
        {/* ============================
            DESKTOP NAVBAR (md ke atas)
            ============================ */}
        <div className="hidden md:flex items-center justify-center pointer-events-auto">
          {/* Pill kuning melayang dengan backdrop blur halus dan shadow dinamis */}
          <div
            className={`flex items-center gap-1 lg:gap-2 bg-[#e8fb31] rounded-full px-4 lg:px-6 py-2 transition-all duration-300 ${isScrolled
                ? "shadow-[0_12px_36px_rgba(0,0,0,0.45)] ring-1 ring-black/15 scale-[0.98]"
                : "shadow-[0_8px_24px_rgba(0,0,0,0.25)] border border-black/5"
              }`}
          >
            {/* Link: Home */}
            <Link
              to="/"
              className={`font-spartan font-bold text-sm lg:text-base px-3.5 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${isActive(currentPath, "/") && !isDesignActive
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10"
                }`}
            >
              Home
            </Link>

            {/* Link: Experience */}
            <Link
              to="/experience"
              className={`font-spartan font-bold text-sm lg:text-base px-3.5 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${isActive(currentPath, "/experience")
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
                className={`font-spartan font-bold text-sm lg:text-base px-3.5 lg:px-5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer border-none ${isDesignActive
                    ? "bg-[#5b13ec] text-white shadow-md"
                    : "text-[#1a1a1a] hover:bg-black/10 bg-transparent"
                  }`}
              >
                Graphic Design
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDesignOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Dropdown Panel Desktop dengan Background Drop Glassmorphism Mewah */}
              {desktopDesignOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#110729]/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/15 overflow-hidden min-w-[270px] z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 mb-1 border-b border-white/10">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/50">
                      Portfolio Categories
                    </span>
                  </div>
                  {DESIGN_SUB_LINKS.map((sub) => {
                    const Icon = sub.icon;
                    const active = isActive(currentPath, sub.href);
                    return (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        onClick={() => setDesktopDesignOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-spartan font-bold text-sm no-underline transition-all duration-150 group ${active
                            ? "bg-[#5b13ec] text-white shadow-md"
                            : "text-white/90 hover:bg-white/10 hover:text-[#e8fb31]"
                          }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${active
                              ? "bg-[#e8fb31] text-[#1a1a1a]"
                              : "bg-white/10 text-white/80 group-hover:bg-[#e8fb31] group-hover:text-[#1a1a1a]"
                            }`}
                        >
                          {Icon && <Icon className="w-3.5 h-3.5" />}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="leading-tight">{sub.label}</span>
                          <span className="font-sans text-[11px] font-normal text-white/50 group-hover:text-white/70 line-clamp-1">
                            {sub.description}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Link: Motion Graphic */}
            <Link
              to="/motion-graphic"
              className={`font-spartan font-bold text-sm lg:text-base px-3.5 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${isActive(currentPath, "/motion-graphic")
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10"
                }`}
            >
              Motion Graphic
            </Link>

            {/* Link: Brands */}
            <Link
              to="/creative-journey"
              className={`font-spartan font-bold text-sm lg:text-base px-3.5 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${isActive(currentPath, "/creative-journey")
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10"
                }`}
            >
              Brands
            </Link>

            {/* Link: Contact */}
            <Link
              to="/contact"
              className={`font-spartan font-bold text-sm lg:text-base px-3.5 lg:px-5 py-1.5 rounded-full transition-all duration-200 no-underline ${isActive(currentPath, "/contact")
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10"
                }`}
            >
              Contact
            </Link>

            {/* Foto Profil — pojok kanan pill */}
            <Link
              to="/profile"
              title="View Danu's Profile"
              className="ml-1.5 flex-shrink-0 transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              <img
                src={avatarUrl}
                alt="Danu Profile"
                className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover object-top transition-all duration-200 ${currentPath === "/profile"
                    ? "ring-2 ring-[#5b13ec] ring-offset-2 ring-offset-[#e8fb31] shadow-md"
                    : "border-2 border-transparent hover:border-black/20"
                  }`}
              />
            </Link>
          </div>
        </div>

        {/* ============================
            MOBILE NAVBAR TRIGGER (< md) dengan Floating Backdrop Glass Capsule
            ============================ */}
        <div className="flex md:hidden items-center justify-between pointer-events-auto max-w-lg mx-auto w-full">
          <div
            className={`w-full flex items-center justify-between px-3.5 py-2 rounded-2xl transition-all duration-300 ${isScrolled
                ? "bg-[#0f0728]/85 backdrop-blur-xl border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                : "bg-[#0f0728]/60 backdrop-blur-md border border-white/10 shadow-md"
              }`}
          >
            {/* Profil Brand Left */}
            <Link
              to="/profile"
              title="View Danu's Profile"
              className="flex items-center gap-2.5 transition-all duration-200 active:scale-95 no-underline group"
            >
              <div className="relative">
                <img
                  src={avatarUrl}
                  alt="Danu Profile"
                  className={`w-9 h-9 rounded-full object-cover object-top transition-all duration-200 ${currentPath === "/profile"
                      ? "ring-2 ring-[#e8fb31] shadow-lg"
                      : "ring-2 ring-white/30 group-hover:ring-white/60"
                    }`}
                />
                {currentPath === "/profile" && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#e8fb31] ring-2 ring-[#5b13ec]" />
                )}
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-spartan font-black text-sm tracking-wide transition-colors ${currentPath === "/profile"
                      ? "text-[#e8fb31]"
                      : "text-white group-hover:text-[#e8fb31]"
                    }`}
                >
                  Danu Satya
                </span>
                <span className="font-sans text-[10px] text-[#e8fb31] font-semibold -mt-1">
                  Graphic &amp; Simple Motion Designer
                </span>
              </div>
            </Link>

            {/* Hamburger Button Right (Garis 3 menggunakan library Lucide Menu) */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Buka menu navigasi"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e8fb31] text-[#1a1a1a] shadow-md border-none cursor-pointer hover:bg-yellow-300 active:scale-95 transition-all"
            >
              <Menu className="w-5 h-5 text-[#1a1a1a]" strokeWidth={2.5} />
            </button>
          </div>
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
              className="flex items-center gap-2.5 no-underline group"
            >
              <div className="relative">
                <img
                  src={avatarUrl}
                  alt="Danu Profile"
                  className={`w-9 h-9 rounded-full object-cover object-top transition-all duration-200 group-hover:scale-105 ${currentPath === "/profile"
                      ? "ring-2 ring-[#e8fb31] shadow-lg"
                      : "ring-2 ring-white/30 group-hover:ring-white/60"
                    }`}
                />
                {currentPath === "/profile" && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#e8fb31] ring-2 ring-[#0f0728]" />
                )}
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-spartan font-black text-sm tracking-wide transition-colors ${currentPath === "/profile"
                      ? "text-[#e8fb31]"
                      : "text-white group-hover:text-[#e8fb31]"
                    }`}
                >
                  Danu Satya
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-[#e8fb31] font-semibold -mt-1">
                  Graphic &amp; Simple Motion Designer
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
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${isActive(currentPath, "/") && !isDesignActive
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
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${isActive(currentPath, "/experience")
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
                  className={`w-5 h-5 transition-transform duration-300 ${mobileAccordionOpen
                      ? "rotate-180 text-[#e8fb31]"
                      : "text-white/60"
                    }`}
                />
              </button>

              {/* Sub-items List (Matching Supabase Screenshot 2 layout) */}
              <div
                className={`grid grid-cols-1 gap-2 overflow-hidden transition-all duration-300 ease-in-out ${mobileAccordionOpen
                    ? "max-h-[800px] opacity-100 pt-2 pb-1"
                    : "max-h-0 opacity-0 pointer-events-none"
                  }`}
              >
                {DESIGN_SUB_LINKS.map((sub) => {
                  const active = isActive(currentPath, sub.href);
                  const Icon = sub.icon;
                  return (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className={`group flex items-center gap-3.5 p-2.5 rounded-xl no-underline transition-all duration-150 ${active
                          ? "bg-white/10 border border-[#e8fb31]/40"
                          : "hover:bg-white/5 active:bg-white/10 border border-transparent"
                        }`}
                    >
                      {/* Box Icon rounded squarish */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${active
                            ? "bg-[#5b13ec] text-[#e8fb31] border border-[#e8fb31]/50 shadow-md"
                            : "bg-white/5 border border-white/10 text-white/80 group-hover:bg-[#5b13ec] group-hover:border-[#5b13ec] group-hover:text-white"
                          }`}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                      </div>

                      {/* Content: Title & Subtitle */}
                      <div className="flex flex-col min-w-0 flex-1">
                        <span
                          className={`font-spartan font-bold text-[15px] leading-tight transition-colors ${active
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
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${isActive(currentPath, "/motion-graphic")
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
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${isActive(currentPath, "/creative-journey")
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
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${isActive(currentPath, "/contact")
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
                className={`flex items-center justify-between py-2 text-lg font-bold no-underline transition-colors ${isActive(currentPath, "/profile")
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
              href={SOCIAL_LINKS.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 bg-[#e8fb31] text-[#1a1a1a] font-spartan font-black text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all shadow-lg shadow-[#e8fb31]/10 active:scale-[0.98] no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Let's Talk on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            {/* Quick Contact Row */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-white/60">
              <a
                href={SOCIAL_LINKS.email.href}
                className="flex items-center gap-1.5 hover:text-[#e8fb31] transition-colors no-underline text-white/70"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={SOCIAL_LINKS.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#e8fb31] transition-colors no-underline text-white/70"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={SOCIAL_LINKS.linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#e8fb31] transition-colors no-underline text-white/70"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
