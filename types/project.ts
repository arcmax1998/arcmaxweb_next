import type {
  Project,
  ProjectImage,
  ProjectTechnology,
  ProjectFeature,
} from "@prisma/client";

export type ProjectWithRelations = Project & {
  images: ProjectImage[];
  technologies: ProjectTechnology[];
  features: ProjectFeature[];

};
