import Reveal from "../ui/Reveal";
import type { Testimonial } from "@/types/testimonial";
import TestimonialCard from "./TestimonialCard";



interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
         <Reveal key={t.id} delay={i * 100}>
          <TestimonialCard t={t} />
        </Reveal>
      ))}
    </div>
  );
}
