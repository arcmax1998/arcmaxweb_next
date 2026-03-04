// components/sections/Projects.tsx
import ProjectsGrid from "./ProjectsGrid";
import ProjectsCarousel from "./ProjectsCarousel";
import type { ProjectWithRelations } from "@/types/project";

// Add props interface
interface ProjectsProps {
  projects: ProjectWithRelations[];
}

// Accept projects as props
export default function Projects({ projects }: ProjectsProps) {
  // Remove all the Prisma fetching code

  return (
    <section
      id="projects"
      className="relative w-full py-32 bg-[#050510]/50 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-20 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-mono mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="12" rx="2" ry="2" />
                <line x1="8" y1="20" x2="16" y2="20" />
                <line x1="12" y1="16" x2="12" y2="20" />
                <path d="M8 8l2 2-2 2" />
                <path d="M16 8l-2 2 2 2" />
              </svg>
              Portfolio Showcase
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight m-0">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444]">
                Projects
              </span>
            </h2>
            <p className="max-w-4xl text-neutral-400 text-sm lg:text-base leading-relaxed mb-0 sm:mb-[revert]">
              Below are a few of my projects that i have built / programmed, showcasing my skills in full-stack development, cloud infrastructure, and data engineering. By no means a complete list, but it showcases my ability to understand, plan and build complex work flows systems.
            </p>
          </div>
        </div>

        {/* Desktop Grid - only show if projects exist */}
        {projects.length > 0 ? (
          <>
            <div className="hidden md:block">
              <ProjectsGrid projects={projects} />
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden mt-10">
              <ProjectsCarousel projects={projects} />
            </div>
          </>
        ) : (
          <div className="text-center text-neutral-400 py-12">
            <p>Projects coming soon...</p>
          </div>
        )}

      </div>
    </section>
  );
}