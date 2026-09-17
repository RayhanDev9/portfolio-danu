import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Graphic designer", href: "/graphic-design" },
  { label: "Motion graphic", href: "/motion-graphic" },
  { label: "Contact", href: "/contact" },
];

const contactList = [
  {
    label: "Gmail",
    value: "Danusatya9@gmail.com",
    href: "mailto:Danusatya9@gmail.com",
  },
  {
    label: "Instagram",
    value: "dnustya_",
    href: "https://instagram.com/dnustya_",
  },
  {
    label: "WhatsApp",
    value: "+62 881 010 069 341",
    href: "https://wa.me/62881010069341",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full bg-[#250774] text-white overflow-hidden font-sans select-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(120deg, transparent, transparent 40px, rgba(255,255,255,0.04) 40px, rgba(255,255,255,0.04) 80px)",
      }}
    >
      {/* Judul "Lets CONNECT There" */}
      <div className="w-full text-center pt-10 sm:pt-14 pb-6 sm:pb-8 px-4">
        <h2 className="font-spartan tracking-tight leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="font-playfair italic font-normal text-white">
            Lets{" "}
          </span>
          <span className="font-black text-[#e5fc34]">CONNECT </span>
          <span className="font-playfair italic font-normal text-white">
            There
          </span>
        </h2>
      </div>

      {/* Grid 3 Kolom */}
      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-6">
          {/* Kolom 1: NAVIGATION */}
          <div>
            <h3 className="font-spartan font-bold text-lg sm:text-xl text-[#e5fc34] mb-4 tracking-wide uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans italic underline text-white/90 text-sm sm:text-base hover:text-[#e5fc34] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 2: Kontak */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {contactList.map((item) => (
              <div key={item.label}>
                <h3 className="font-spartan font-bold text-lg sm:text-xl text-[#e5fc34] leading-tight">
                  {item.label}
                </h3>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-sm sm:text-base text-white/90 underline hover:text-[#e5fc34] transition-colors duration-200 break-all"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          {/* Kolom 3: Foto Danu — hanya tampil di desktop (lg+) */}
          <div className="hidden lg:flex items-end justify-center lg:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}img/profile/danu-jas.png`}
              alt="Danu"
              className="h-64 xl:h-80 object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Garis Pemisah + Copyright */}
      <div className="w-full border-t border-white/30 px-6 sm:px-10 lg:px-16 py-4 sm:py-5">
        <p className="font-spartan text-base sm:text-lg text-white font-normal">
          © 2026
        </p>
      </div>
    </footer>
  );
}
