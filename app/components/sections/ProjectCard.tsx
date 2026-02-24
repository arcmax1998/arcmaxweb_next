"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "../modals/ProjectModal";
import type { ProjectWithRelations } from "@/types/project";

export default function ProjectCard({
  project,
}: {
  project: ProjectWithRelations;
}) {
  const [open, setOpen] = useState(false);
  const coverImage = project.images?.[0]?.imageUrl;

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="laravel-developer-card"
      >
        {/* Image */}
        <div className="laravel-developer-card-image">
          {coverImage && (
            <Image
              src={coverImage}
              alt={`${project.title} - ${project.meta.split('•')[0]} solution built with ${project.technologies.map(t => t.name).join(', ')}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="laravel-developer-card-image-img"
            />
          )}
        </div>

        {/* Content */}
        <div className="laravel-developer-card-content">
          <h3 className="laravel-developer-card-title">
            {project.title}
          </h3>

          {/* Technologies */}
          <div className="laravel-developer-tech-container">
            {project.technologies?.slice(0, 5).map((tech) => (
              <span
                key={tech.id}
                className="laravel-developer-tech-tag"
              >
                {tech.name}
              </span>
            ))}
          </div>
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