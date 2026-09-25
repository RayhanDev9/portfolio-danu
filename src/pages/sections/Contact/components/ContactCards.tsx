import { useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import { CONTACT_CHANNELS } from "../data/contactData";
import type { ContactChannel } from "../data/contactData";

export default function ContactCards() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, channel: ContactChannel) => {
    e.preventDefault();
    navigator.clipboard.writeText(channel.value);
    setCopiedId(channel.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {CONTACT_CHANNELS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`${item.bgColor} ${item.textColor} rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group no-underline relative overflow-hidden`}
          >
            {/* Top Row: Icon & Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-black/10 backdrop-blur-sm">
                {item.iconType === "whatsapp" && (
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15s-.778.978-.954 1.179-.352.226-.653.075a8.22 8.22 0 0 1-2.42-1.493 9.07 9.07 0 0 1-1.674-2.083c-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.201.05-.376-.025-.527s-.678-1.631-.929-2.234c-.245-.588-.493-.508-.678-.517l-.578-.01c-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.511 1.08 2.912 1.23 3.113c.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.198 1.898.12.578-.087 1.78-.727 2.031-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.352zm2.083-9.923A11.83 11.83 0 0 0 12.003 1C5.372 1 .003 6.37.003 13c0 2.112.551 4.175 1.598 6.002L0 23.5l4.636-1.564A11.84 11.84 0 0 0 12.003 25C18.634 25 24 19.63 24 13a11.85 11.85 0 0 0-3.445-8.541zm-7.552 18.528a9.85 9.85 0 0 1-5.025-1.378l-.36-.214-3.738 1.26 1.281-3.642-.235-.374a9.86 9.86 0 0 1-1.512-5.236c0-5.445 4.433-9.878 9.878-9.878 2.639 0 5.12 1.028 6.985 2.894A9.82 9.82 0 0 1 21.88 13c0 5.445-4.433 9.878-9.878 9.878z" />
                  </svg>
                )}
                {item.iconType === "email" && (
                  <svg
                    className="w-7 h-7 text-[#EA4335] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                )}
                {item.iconType === "instagram" && (
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {item.iconType === "linkedin" && (
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0-.02-3.36 1.68 1.68 0 0 0 .02 3.36M5.07 18.5h2.78v-8.37H5.07v8.37Z" />
                  </svg>
                )}
              </div>

              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/15 uppercase tracking-wider">
                {item.badge}
              </span>
            </div>

            {/* Bottom Content */}
            <div>
              <span className="text-xs opacity-80 block font-medium mb-1">
                {item.label}
              </span>
              <h3 className="text-lg sm:text-xl font-black truncate mb-3">
                {item.value}
              </h3>

              <div className="flex items-center justify-between pt-2 border-t border-black/10">
                <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                  Contact Now{" "}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>

                {item.isCopyable && (
                  <button
                    onClick={(e) => handleCopy(e, item)}
                    className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 transition-colors cursor-pointer border-none flex items-center justify-center"
                    title={`Copy ${item.name}`}
                    aria-label={`Copy info ${item.name}`}
                  >
                    {copiedId === item.id ? (
                      <Check className={`w-4 h-4 ${item.textColor === "text-slate-900" ? "text-emerald-600" : "text-[#e8fb31]"}`} />
                    ) : (
                      <Copy className="w-4 h-4 opacity-80 hover:opacity-100" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
