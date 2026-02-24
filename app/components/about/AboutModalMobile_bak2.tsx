"use client";

import { useEffect, useRef, useState } from "react";
import { ABOUT_SECTIONS } from "./aboutSections";

type AboutKey = keyof typeof ABOUT_SECTIONS;

const KEYS = Object.keys(ABOUT_SECTIONS) as AboutKey[];

export default function AboutModalMobile({
  onClose,
}: {
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  /* -------------------------------------------
     Scroll CONTENT when menu item is clicked
  -------------------------------------------- */
  const goToIndex = (index: number) => {
    setActiveIndex(index);
    slidesRef.current?.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth",
    });
  };

  /* -------------------------------------------
     Sync MENU when content is swiped
  -------------------------------------------- */
  const onContentScroll = () => {
    if (!slidesRef.current) return;
    const index = Math.round(
      slidesRef.current.scrollLeft / window.innerWidth
    );
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  /* -------------------------------------------
     Ensure active menu item stays visible
  -------------------------------------------- */
  useEffect(() => {
    const activeEl = menuRef.current?.children[
      activeIndex
    ] as HTMLElement | undefined;

    activeEl?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* MODAL */}
      <div className="relative w-full h-full max-h-[100dvh] bg-[#0A0B1E]">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white text-2xl"
        >
          ×
        </button>

        {/* MENU (swipeable) */}
        <div className="about-mobile-nav-wrapper">
          <div
            ref={menuRef}
            className="about-mobile-nav"
          >
            {KEYS.map((key, i) => (
              <div
                key={key}
                onClick={() => goToIndex(i)}
                className={`about-mobile-item ${
                  i === activeIndex ? "active" : ""
                }`}
              >
                {key.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT (swipeable) */}
        <div
          ref={slidesRef}
          onScroll={onContentScroll}
          className="about-mobile-slides"
        >
          {KEYS.map((key) => (
            <div key={key} className="about-slide">
              <div className="about-content">
  {ABOUT_SECTIONS[key]}
</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
