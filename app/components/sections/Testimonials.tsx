import TestimonialsGrid from "./TestimonialsGrid";
import TestimonialsCarousel from "./TestimonialsCarousel";
import type { Testimonial } from "@/types/testimonial";

// Add props interface
interface TestimonialsProps {
  testimonials: Testimonial[];
}

// Accept testimonials as props
export default function Testimonials({ testimonials }: TestimonialsProps) {
  // Remove all the Prisma fetching code
  
  return (
    <section
      id="testimonials"
      className="relative w-full py-32 bg-[#0A0B1E] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-20 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-mono mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 3h12v6a6 6 0 0 1-12 0V3z" />
                <path d="M4 3h16" />
                <path d="M8 21h8" />
                <path d="M12 21v-6" />
                <path d="M18 9a6 6 0 0 1-12 0" />
                <path d="M6 9H4" />
                <path d="M20 9h-2" />
              </svg>
              Client Success Stories
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight m-0">
              What Clients{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444]">
                Say
              </span>
            </h2>
            <p className="max-w-4xl text-neutral-400 text-sm lg:text-base leading-relaxed mb-0 sm:mb-[revert]">
              Impossible is nothing. Proven by results. Every project is an opportunity to exceed expectations. 
              creating solutions that drive growth through efficiency.
            </p>
          </div>
        </div>
        
        {/* Desktop grid - only show if testimonials exist */}
        {testimonials.length > 0 ? (
          <>
            <div className="hidden md:block">
              <TestimonialsGrid testimonials={testimonials} />
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden mt-10">
              <TestimonialsCarousel testimonials={testimonials} />
            </div>
          </>
        ) : (
          <div className="text-center text-neutral-400 py-12">
            <p>Testimonials coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
}