import Reveal from "../ui/Reveal";
import type { Skill } from "@/types/skills";
import SkillCard from "./SkillCard";

interface SkillsGridProps {
  skills: Skill[];
}

export default function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, i) => (
        <Reveal key={skill.id} delay={i * 100}>
          <SkillCard skill={skill} isCarousel={false} />
        </Reveal>
      ))}
    </div>
  );
}