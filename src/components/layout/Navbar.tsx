import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// =============================================
// DATA: Sub-link Graphic Design
// =============================================
const designSubLinks = [
  { label: "Majlis Ta'lim", href: "/graphic-design/majlis" },
  { label: "Horison Altama", href: "/graphic-design/horison" },
  { label: "Astra Otoshop", href: "/graphic-design/astraotoshop" },
  { label: "Mister Klinner", href: "/graphic-design/mister-klinner" },
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
  const [designOpen, setDesignOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDesignOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tutup menu saat pindah halaman
  useEffect(() => {
    setMobileOpen(false);
    setDesignOpen(false);
  }, [location.pathname]);

  const isDesignActive = currentPath.startsWith("/graphic-design");

  return (
    <nav
      id="main-navbar"
      className="absolute top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-4 sm:py-6 bg-transparent border-none"
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
              onClick={() => setDesignOpen((prev) => !prev)}
              className={`font-spartan font-bold text-sm lg:text-base px-3 lg:px-5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer border-none ${
                isDesignActive
                  ? "bg-[#5b13ec] text-white shadow-md"
                  : "text-[#1a1a1a] hover:bg-black/10 bg-transparent"
              }`}
            >
              Graphic Design
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${designOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Panel */}
            {designOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-black/10 overflow-hidden min-w-[180px] z-50">
                {designSubLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    to={sub.href}
                    className={`block px-5 py-3 font-spartan font-bold text-sm no-underline transition-colors duration-150 ${
                      isActive(currentPath, sub.href)
                        ? "bg-[#5b13ec] text-white"
                        : "text-[#1a1a1a] hover:bg-[#e8fb31]"
                    }`}
                  >
                    {sub.label}
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
              isActive(currentPath, "/contact")
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
          <div className="ml-2 flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}img/profile/danu-jas.png`}
              alt="Danu Profile"
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover object-top border-2 border-[#5b13ec] shadow-md"
            />
          </div>
        </div>
      </div>

      {/* ============================
          MOBILE NAVBAR (< md)
          ============================ */}
      <div className="flex md:hidden items-center justify-between">
        {/* Foto profil kiri */}
        <img
          src={`${import.meta.env.BASE_URL}img/profile/danu.png`}
          alt="Danu"
          className="w-10 h-10 rounded-full object-cover object-top border-2 border-[#e8fb31] shadow-md"
        />

        {/* Hamburger Button */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full bg-[#e8fb31] shadow-md border-none cursor-pointer"
        >
          <span
            className={`block w-5 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-3 bg-[#e8fb31] rounded-2xl px-4 py-4 flex flex-col gap-1 shadow-2xl border border-black/10">
          <Link
            to="/"
            className={`font-spartan font-bold text-base px-4 py-2.5 rounded-xl no-underline transition-colors ${
              isActive(currentPath, "/") && !isDesignActive
                ? "bg-[#5b13ec] text-white"
                : "text-[#1a1a1a] hover:bg-black/10"
            }`}
          >
            Home
          </Link>
          <Link
            to="/experience"
            className={`font-spartan font-bold text-base px-4 py-2.5 rounded-xl no-underline transition-colors ${
              isActive(currentPath, "/experience")
                ? "bg-[#5b13ec] text-white"
                : "text-[#1a1a1a] hover:bg-black/10"
            }`}
          >
            Experience
          </Link>

          <div>
            <span className="font-spartan font-bold text-base px-4 py-1 text-[#5b13ec] block">
              Graphic Design
            </span>
            <div className="flex flex-col gap-0.5 pl-4">
              {designSubLinks.map((sub) => (
                <Link
                  key={sub.href}
                  to={sub.href}
                  className={`font-spartan font-bold text-sm px-4 py-2 rounded-xl no-underline transition-colors ${
                    isActive(currentPath, sub.href)
                      ? "bg-[#5b13ec] text-white"
                      : "text-[#1a1a1a] hover:bg-black/10"
                  }`}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/motion-graphic"
            className={`font-spartan font-bold text-base px-4 py-2.5 rounded-xl no-underline transition-colors ${
              isActive(currentPath, "/motion-graphic")
                ? "bg-[#5b13ec] text-white"
                : "text-[#1a1a1a] hover:bg-black/10"
            }`}
          >
            Motion Graphic
          </Link>
          <Link
            to="/contact"
            className={`font-spartan font-bold text-base px-4 py-2.5 rounded-xl no-underline transition-colors ${
              isActive(currentPath, "/contact")
                ? "bg-[#5b13ec] text-white"
                : "text-[#1a1a1a] hover:bg-black/10"
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
