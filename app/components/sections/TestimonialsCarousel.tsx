"use client";

import { useRef, useState, useEffect } from "react";
import type { Testimonial } from "@/types/testimonial";
import TestimonialCard from "./TestimonialCard";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Update active index based on scroll position
  const updateActiveIndex = () => {
    const el = ref.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const width = el.offsetWidth;
    
    // Calculate index with a small threshold (20px) to account for rounding errors
    let index = 0;
    
    // If we're very close to the start (within 20px), consider it slide 0
    if (scrollLeft < 20) {
      index = 0;
    } else {
      // Otherwise calculate normally
      index = Math.round(scrollLeft / width);
    }
    
    // Clamp index to valid range
    index = Math.max(0, Math.min(index, testimonials.length - 1));
    
    // Only update if changed
    if (index !== active) {
      setActive(index);
    }
  };

  // Handle scroll events
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Force initial active index to 0
    setActive(0);

    const onScroll = () => {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(updateActiveIndex);
    };

    // Also update on resize
    const onResize = () => {
      requestAnimationFrame(updateActiveIndex);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Initial update after mount
    setTimeout(() => {
      updateActiveIndex();
    }, 100);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [testimonials.length]);

  // Add interval to check and correct first slide if needed
  useEffect(() => {
    const checkFirstSlide = () => {
      const el = ref.current;
      if (!el) return;
      
      // If we're on the first slide but active is not 0
      if (el.scrollLeft < 20 && active !== 0) {
        setActive(0);
      }
    };
    
    const interval = setInterval(checkFirstSlide, 500);
    return () => clearInterval(interval);
  }, [active]);

  const scrollTo = (i: number) => {
    const el = ref.current;
    if (!el) return;

    // Calculate exact scroll position
    const scrollPosition = el.offsetWidth * i;
    
    el.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    
    // Update active index immediately for better UX
    setActive(i);
  };

  return (
    <>
      <div className="flex justify-center gap-2 mb-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 outline-none focus:outline-none active:outline-none border-0 ${
              i === active 
                ? "w-6 bg-gradient-to-r from-[#DC2626] to-[#EF4444]" 
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
      <div
        ref={ref}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {testimonials.map((t) => (
          <div key={t.id} className="min-w-full snap-center px-3 box-border">
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>

      
    </>
  );
}