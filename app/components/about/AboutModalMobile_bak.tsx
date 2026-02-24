"use client";

import { useEffect, useRef, useState } from "react";
import { ABOUT_KEYS, ABOUT_SECTIONS } from "./aboutSections";

export default function AboutModalMobile({
  onClose,
}: {
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] md:hidden bg-black/80 backdrop-blur-sm">
      <div className="relative h-full bg-[#050510]">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[9999] text-[#DC2626] text-xl"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="pt-16 pb-4 px-4 border-b border-white/10 flex gap-6 overflow-x-auto">
          {ABOUT_KEYS.map((key, i) => (
            <button
              key={key}
              onClick={() => {
                setIndex(i);
                containerRef.current?.scrollTo({
                  left: i * window.innerWidth,
                  behavior: "smooth",
                });
              }}
              className={`uppercase text-sm font-semibold whitespace-nowrap
                ${i === index ? "text-[#EF4444]" : "text-neutral-400"}`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* SLIDES */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory h-full"
          onScroll={() => {
            const i = Math.round(
              (containerRef.current?.scrollLeft ?? 0) / window.innerWidth
            );
            setIndex(i);
          }}
        >
          {ABOUT_KEYS.map((key) => (
            <section
              key={key}
              className="snap-center min-w-full p-6 text-neutral-400 leading-relaxed"
            >
              {ABOUT_SECTIONS[key]}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
