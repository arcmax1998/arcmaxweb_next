"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ABOUT_SECTIONS } from "./aboutSections";

type AboutKey = keyof typeof ABOUT_SECTIONS;

const KEYS = Object.keys(ABOUT_SECTIONS) as AboutKey[];

export default function AboutModalMobile({
  onClose,
}: {
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
 const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  /* -------------------------------------------
     Scroll CONTENT when menu item is clicked
  -------------------------------------------- */
  const goToIndex = (index: number) => {
    setActiveIndex(index);
    setIsScrolling(true);
    slidesRef.current?.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth",
    });
    
    // Clear scrolling flag after animation completes
     if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // ✅ Fix: setTimeout returns number in browser
    scrollTimeoutRef.current = window.setTimeout(() => {
      setIsScrolling(false);
      scrollTimeoutRef.current = null;
    }, 500);
  };

  /* -------------------------------------------
     Sync MENU when content is swiped - IMPROVED
  -------------------------------------------- */
  const onContentScroll = () => {
    if (!slidesRef.current) return;
    
    // Calculate which slide is most visible
    const scrollLeft = slidesRef.current.scrollLeft;
    const containerWidth = window.innerWidth;
    
    // Use Math.round for better accuracy during swipe
    const index = Math.round(scrollLeft / containerWidth);
    
    // Clamp index to valid range
    const clampedIndex = Math.max(0, Math.min(index, KEYS.length - 1));
    
    // Update active index if changed and not during programmatic scroll
    if (clampedIndex !== activeIndex && !isScrolling) {
      setActiveIndex(clampedIndex);
    }
  };

  /* -------------------------------------------
     Use Intersection Observer for more precise sync
  -------------------------------------------- */
  useEffect(() => {
    if (!slidesRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.index || "0"
            );
            if (index !== activeIndex && !isScrolling) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: [0.5], // Trigger when 50% visible
        root: slidesRef.current,
      }
    );

    // Observe each slide
    const slides = slidesRef.current.children;
    Array.from(slides).forEach((slide, i) => {
      (slide as HTMLElement).dataset.index = i.toString();
      observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [activeIndex, isScrolling]);

  /* -------------------------------------------
     Ensure active menu item stays visible
  -------------------------------------------- */
  useEffect(() => {
    if (!menuRef.current) return;
    
    const activeEl = menuRef.current.children[
      activeIndex
    ] as HTMLElement | undefined;

    activeEl?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  /* -------------------------------------------
     Handle window resize
  -------------------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (slidesRef.current && activeIndex) {
        // Adjust scroll position on resize
        slidesRef.current.scrollLeft = activeIndex * window.innerWidth;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  if (!mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
      style={{ isolation: 'isolate' }}
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full max-h-[100dvh] bg-[#0A0B1E] overflow-hidden mx-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER - Close button */}
        <div className="flex-shrink-0 flex items-center justify-end px-4 py-3 border-b border-white/10">
                 <button
  onClick={onClose}



  className="group relative text-2xl w-10 h-10 
             flex items-center justify-center rounded-full 
             bg-black/40
             border border-[#DC2626]/30
             hover:border-[#EF4444]
         hover:text-[#EF4444]
             text-transition
              duration-300 ease-out"
  aria-label="Close modal"
>
  <span className="block leading-none pb-1 
                   bg-gradient-to-r from-[#DC2626] to-[#EF4444] bg-clip-text text-transparent
                   hover:border-[#EF4444] text-transition
                   duration-300">
    ×
  </span>
</button>
        </div>

        {/* NAVIGATION - Horizontal scroll menu */}
        <div className="flex-shrink-0 about-mobile-nav-wrapper">
          <div ref={menuRef} className="about-mobile-nav px-4 items-center">
            {KEYS.map((key, i) => (
              <div
                key={key}
                onClick={() => goToIndex(i)}
                className={`about-mobile-item cursor-pointer transition-all duration-300 ${
                  i === activeIndex 
                    ? "active text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444] scale-105" 
                    : "text-white/35 hover:text-white/60"
                }`}
              >
                {key.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT - Swipeable slides */}
        <div
          ref={slidesRef}
          onScroll={onContentScroll}
          className="flex-1 about-mobile-slides"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {KEYS.map((key, index) => (
            <div 
              key={key} 
              className="about-slide"
              data-index={index}
            >
              <div className="about-content px-4 pb-8 overflow-y-auto max-h-full">
                {ABOUT_SECTIONS[key]}
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional: Pagination dots */}
        <div className="flex-shrink-0 flex justify-center gap-2 py-4">
          {KEYS.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 outline-none focus:outline-none active:outline-none border-0 ${
                i === activeIndex 
                  ? 'w-6 bg-gradient-to-r from-[#DC2626] to-[#EF4444]' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}