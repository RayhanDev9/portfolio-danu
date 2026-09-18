import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_LIST } from "../data/contactData";

export default function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 mb-20">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 text-[#e8fb31] text-xs font-black uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4" /> FAQ
        </div>
        <h2 className="font-spartan font-black text-3xl sm:text-4xl text-white uppercase">
          Pertanyaan Seputar Kerja Sama
        </h2>
      </div>

      <div className="space-y-3">
        {FAQ_LIST.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all shadow-md duration-700"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base border-none bg-transparent cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#e8fb31] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-4 text-xs sm:text-sm text-purple-100/90 leading-relaxed border-t border-white/10 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
