import type { Skill } from "@/types/skills";
import SkillsGrid from "./SkillsGrid";
import SkillsCarousel from "./SkillsCarousel";

// Add props interface
interface SkillsProps {
  skills: Skill[];
}

// Accept skills as props
export default function Skills({ skills }: SkillsProps) {
  // Remove all the Prisma fetching code
  // Remove the error state since we're getting data from parent
  
  return (
    <section
      id="skills"
      className="relative w-full py-32 bg-[#0A0B1E] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-20 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-mono mb-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Technical Arsenal
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight m-0">
              Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444]">
                Skillset
              </span>
            </h2>
            <p className="max-w-4xl text-neutral-400 text-sm lg:text-base leading-relaxed mb-0 sm:mb-[revert]">
              These competencies are drawn from practical project delivery rather than theoretical exposure. Each technology listed has been used in at least one real implementation—sometimes as a core platform, other
              times as a supporting or integrated component within a larger system.
            </p>
          </div>
        </div>

        {/* Skills display */}
        {skills.length > 0 ? (
          <>
            <div className="hidden md:block">
              <SkillsGrid skills={skills} />
            </div>

            <div className="md:hidden mt-10">
              <SkillsCarousel skills={skills} />
            </div>
          </>
        ) : (
          <div className="text-center text-neutral-400 py-12">
            <p>Skills data coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
}