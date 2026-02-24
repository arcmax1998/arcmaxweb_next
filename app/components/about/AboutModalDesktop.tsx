"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ABOUT_KEYS, ABOUT_SECTIONS, AboutKey } from "./aboutSections";

export default function AboutModalDesktop({
  onClose,
}: {
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<AboutKey>(ABOUT_KEYS[0]);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] hidden md:flex bg-black/70 backdrop-blur-sm items-center justify-center">
      <div className="relative w-full max-w-7xl h-[80vh] bg-[#050510]
                      border border-white/10 rounded-2xl overflow-hidden flex flex-col">

        {/* HEADER - Fixed at top */}
        <div className="flex-shrink-0 flex items-center justify-end px-4 py-3 ">
          <button
            onClick={onClose}
            className="group relative text-2xl w-10 h-10 
                       flex items-center justify-center rounded-full 
                       bg-black/40
                       border border-[#DC2626]/30
                       text-[#DC2626]/60
                       hover:border-[#EF4444]
                       hover:text-[#EF4444]
                       transition-all duration-300 ease-out"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* CONTENT - Takes remaining height and centers vertically */}
        <div className="flex-1 grid grid-cols-2 items-center justify-center min-h-0">
          
          {/* LEFT: TITLES - Vertically centered */}
          <div className="flex items-center justify-end pr-12 text-right h-full">
            <div className="space-y-6">
              {ABOUT_KEYS.map((key) => (
                <div
                  key={key}
                  onClick={() => setActive(key)}
                  className={`about-nav cursor-pointer text-xl font-semibold transition-all duration-300 
                    hover:text-white hover:scale-105
                    ${active === key 
                      ? "active text-[#EF4444] scale-125" 
                      : "text-neutral-500 hover:text-white"}`}
                >
                  {key.toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTENT - Vertically centered */}
          <div className="flex items-center justify-start text-left h-full">
            <div className="p-12 max-w-xl text-neutral-400 leading-relaxed">
              {ABOUT_SECTIONS[active]}
            </div>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}