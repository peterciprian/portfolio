import type { SkillGroup } from "@/content/skills";
import { TagList } from "@/components/TagList";

type SkillTagsProps = {
  groups: SkillGroup[];
};

export function SkillTags({ groups }: SkillTagsProps) {
  return (
    <div className="skill-grid">
      {groups.map((group) => (
        <article className="skill-group" key={group.title}>
          <h3>{group.title}</h3>
          <TagList items={group.items} />
        </article>
      ))}
    </div>
  );
}