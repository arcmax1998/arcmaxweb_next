"use client";

import { useState } from "react";
import ProjectModal from "../modals/ProjectModal";
import type { ProjectWithRelations } from "@/types/project";

export default function ProjectCard({
  project,
}: {
  project: ProjectWithRelations;
}) {
  const [open, setOpen] = useState(false);
  const coverImage = project.images?.[0]?.imageUrl;

  // Generate alt text safely
  const getAltText = () => {
    const mainTech = project.meta.split('•')[0]?.trim() || 'custom solution';
    const techList = project.technologies?.map(t => t.name).join(', ') || 'various technologies';
    return `${project.title} - ${mainTech} built with ${techList}`;
  };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="laravel-developer-card cursor-pointer group"
      >
        {/* Image Container */}
        <div className="laravel-developer-card-image relative overflow-hidden bg-[#0A0B1E]">
          {coverImage ? (
            <img
              src={coverImage}
              alt={getAltText()}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#DC2626]/20 to-[#EF4444]/20">
              <span className="text-white/30 text-sm">No image</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="laravel-developer-card-content p-6">
          <h3 className="laravel-developer-card-title text-white font-semibold text-lg mb-3 line-clamp-1">
            {project.title}
          </h3>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="laravel-developer-tech-container flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech.id}
                  className="laravel-developer-tech-tag px-3 py-1 text-xs rounded-full bg-white/5 text-neutral-300 border border-white/10"
                >
                  {tech.name}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-neutral-400">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {open && (
        <ProjectModal
          project={project}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}