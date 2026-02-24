// components/sections/ProjectsGrid.tsx (SERVER)

import ProjectCard from "./ProjectCard";
import type { ProjectWithRelations } from "@/types/project";

export default function ProjectsGrid({
  projects,
}: {
  projects: ProjectWithRelations[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
