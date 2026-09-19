import { SOCIAL_LINKS } from "../../../../constants/socialMedia";

export default function SocialBar() {
  return (
    <div className="w-full bg-[#5b13ec] py-4 sm:py-5 md:py-6 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 xs:grid-cols-3 gap-3 sm:gap-4 md:pl-[24rem] lg:pl-[28rem]">
        {/* WhatsApp */}
        <a
          id="btn-whatsapp"
          href={SOCIAL_LINKS.whatsapp.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-5 sm:px-6 py-3 sm:py-3.5 bg-[#24d058] hover:bg-[#20bd50] text-white rounded-2xl font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 fill-white shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15s-.778.978-.954 1.179-.352.226-.653.075a8.22 8.22 0 0 1-2.42-1.493 9.07 9.07 0 0 1-1.674-2.083c-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.201.05-.376-.025-.527s-.678-1.631-.929-2.234c-.245-.588-.493-.508-.678-.517l-.578-.01c-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.511 1.08 2.912 1.23 3.113c.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.198 1.898.12.578-.087 1.78-.727 2.031-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.352zm2.083-9.923A11.83 11.83 0 0 0 12.003 1C5.372 1 .003 6.37.003 13c0 2.112.551 4.175 1.598 6.002L0 23.5l4.636-1.564A11.84 11.84 0 0 0 12.003 25C18.634 25 24 19.63 24 13a11.85 11.85 0 0 0-3.445-8.541zm-7.552 18.528a9.85 9.85 0 0 1-5.025-1.378l-.36-.214-3.738 1.26 1.281-3.642-.235-.374a9.86 9.86 0 0 1-1.512-5.236c0-5.445 4.433-9.878 9.878-9.878 2.639 0 5.12 1.028 6.985 2.894A9.82 9.82 0 0 1 21.88 13c0 5.445-4.433 9.878-9.878 9.878z" />
            </svg>
          </div>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 fill-white shrink-0"
            viewBox="0 0 24 24"
          >
            <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          id="btn-instagram"
          href={SOCIAL_LINKS.instagram.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white rounded-2xl font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 fill-white shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 fill-white shrink-0"
            viewBox="0 0 24 24"
          >
            <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
          </svg>
        </a>

        {/* Gmail */}
        <a
          id="btn-gmail"
          href={SOCIAL_LINKS.email.href}
          className="flex items-center justify-between px-5 sm:px-6 py-3 sm:py-3.5 bg-white hover:bg-slate-100 text-slate-900 rounded-2xl font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 fill-dark shrink-0"
            viewBox="0 0 24 24"
          >
            <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
