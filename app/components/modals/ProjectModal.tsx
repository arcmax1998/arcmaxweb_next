"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        <div className="px-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 mt-0 md:mt-[revert]">
                {project.title}
              </h3>
              <p className="text-sm font-mono">
  <span className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] bg-clip-text text-transparent">{project.meta}</span>
  <span className="mx-2 text-neutral-600">/</span>
  <span className="text-emerald-400">{project.role}</span>
</p>
            </div>

            
          </div>

          {/* Image / Slideshow */}
          <div className="aspect-video rounded-xl overflow-hidden mb-6
                          bg-neutral-900 relative">
            {images.length > 0 && (
              <Image
                src={images[index].imageUrl}
                 alt={`${project.title} - ${project.meta.split('•')[0]} solution built with ${project.technologies.map(t => t.name).join(', ')}`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
              />
            )}

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 border border-[#DC2626]/30 bg-gradient-to-r from-[#DC2626] to-[#EF4444]
                             bg-black/40 hover:bg-black/60 p-2 rounded-full"
                >
                  ❮
                </button>

                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 border border-[#DC2626]/30 bg-gradient-to-r from-[#DC2626] to-[#EF4444]
                             bg-black/40 hover:bg-black/60 p-2 rounded-full"
                >
                  ❯
                </button>
              </>
            )}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="hidden md:block">
              <h4 className="text-lg font-semibold text-white mb-3">
                Project Overview
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Key Features
              </h4>
              <ul className="space-y-2 text-neutral-400">
                {project.features?.map((f) => (
                  <li key={f.id} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-400 mt-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>

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

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Impact
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
