"use client";

import { useEffect, useState } from "react";
import type { ProjectWithRelations } from "@/types/project";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectWithRelations;
  onClose: () => void;
}) {
  const images = project.images ?? [];
  const [index, setIndex] = useState(0);

  /* ===============================
     ESC + BODY LOCK
  =============================== */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // Generate alt text safely
  // const getAltText = () => {
  //   if (!project.meta) return `${project.title} project screenshot`;
  //   const mainTech = project.meta.split('•')[0]?.trim() || 'custom solution';
  //   const techList = project.technologies?.map(t => t.name).join(', ') || 'various technologies';
  //   return `${project.title} - ${mainTech} built with ${techList}`;
  // };

  const getAltText = () => {
  if (!project.meta) return `${project.title} project screenshot`;
  
  const mainTech = project.meta.split('•')[0]?.trim() || 'custom solution';
  
  // Handle technologies array safely
  let techList = 'various technologies';
  if (project.technologies?.length) {
    const techNames = project.technologies
      .map(t => t.name)
      .filter(Boolean)  // Remove any null/undefined
      .join(', ');
    if (techNames) techList = techNames;
  }
  
  return `${project.title} - ${mainTech} built with ${techList}`;
};

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]
                 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="glass-panel rounded-2xl border border-white/10
                   max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 flex items-center justify-end px-4 py-3">
          <button
            onClick={onClose}
            className="group relative text-2xl w-10 h-10 
                       flex items-center justify-center rounded-full 
                       bg-black/40
                       border border-[#DC2626]/30
                       hover:border-[#EF4444]
                       hover:text-[#EF4444]
                       transition-all duration-300 ease-out"
            aria-label="Close modal"
          >
            <span className="block leading-none pb-1 
                             bg-gradient-to-r from-[#DC2626] to-[#EF4444] bg-clip-text text-transparent
                             transition-all duration-300">
              ×
            </span>
          </button>
        </div>
        
        <div className="px-8 pb-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 mt-0 md:mt-[revert]">
                {project.title}
              </h3>
              <p className="text-sm font-mono">
                <span className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] bg-clip-text text-transparent">
                  {project.meta}
                </span>
                <span className="mx-2 text-neutral-600">/</span>
                <span className="text-emerald-400">{project.role}</span>
              </p>
            </div>
          </div>

          {/* Image / Slideshow */}
          <div className="aspect-video rounded-xl overflow-hidden mb-6
                          bg-neutral-900 relative">
            {images.length > 0 ? (
              <img
                src={images[index].imageUrl}
                alt={getAltText()}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/30">No image available</span>
              </div>
            )}

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 
                             w-10 h-10 flex items-center justify-center
                             bg-black/60 hover:bg-black/80 
                             border border-[#DC2626]/30
                             text-white rounded-full
                             transition-all duration-300"
                  aria-label="Previous image"
                >
                  <span className="text-xl leading-none">❮</span>
                </button>

                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2
                             w-10 h-10 flex items-center justify-center
                             bg-black/60 hover:bg-black/80 
                             border border-[#DC2626]/30
                             text-white rounded-full
                             transition-all duration-300"
                  aria-label="Next image"
                >
                  <span className="text-xl leading-none">❯</span>
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                                bg-black/60 px-3 py-1 rounded-full
                                text-xs text-white/80 border border-white/10">
                  {index + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Mobile Description - visible only on mobile */}
            <div className="md:hidden">
              <h4 className="text-lg font-semibold text-white mb-3">
                Project Overview
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Desktop Description - hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <h4 className="text-lg font-semibold text-white mb-3">
                Project Overview
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2 text-neutral-400">
                  {project.features.map((f) => (
                    <li key={f.id} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t.id}
                      className="px-3 py-1 rounded-md bg-white/5
                                 border border-white/10 text-xs text-neutral-300"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Impact */}
            {project.impact && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Impact
                </h4>
                <p className="text-neutral-400 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}