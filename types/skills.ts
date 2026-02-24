export interface Skill {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  skillsList: string[];
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SkillCardProps {
  skill: Skill;
}