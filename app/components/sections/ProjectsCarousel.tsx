"use client";

import { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import type { ProjectWithRelations } from "@/types/project";

export default function ProjectsCarousel({
  projects,
}: {
  projects: ProjectWithRelations[];
}) {

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on scroll position
  const updateActiveIndex = () => {
    const el = carouselRef.current;
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
    index = Math.max(0, Math.min(index, projects.length - 1));
    
    // Only update if changed
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Handle scroll events
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    // Force initial active index to 0
    setActiveIndex(0);

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
  }, [projects.length]);

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;

    // Calculate exact scroll position
    const scrollPosition = el.offsetWidth * index;
    
    el.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    
    // Update active index immediately
    setActiveIndex(index);
  };

  // Add this to handle the gap in calculations
  useEffect(() => {
    // Check if we need to adjust the first slide
    const checkFirstSlide = () => {
      const el = carouselRef.current;
      if (!el) return;
      
      // If we're on the first slide but activeIndex is not 0
      if (el.scrollLeft < 20 && activeIndex !== 0) {
        setActiveIndex(0);
      }
    };
    
    const interval = setInterval(checkFirstSlide, 500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
       {/* Dots */}
      <div className="flex justify-center gap-2 mb-10">
        {projects.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 outline-none focus:outline-none active:outline-none border-0 ${
              activeIndex === index
                ? "w-6 bg-gradient-to-r from-[#DC2626] to-[#EF4444]"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="snap-center min-w-full px-1 box-border"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

     
    </>
  );
}