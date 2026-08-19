import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Section } from "@/components/Section";
import { SkillTags } from "@/components/SkillTags";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About" title={profile.role}>
        <article className="profile-panel">
          <ul className="profile-list">
            <li>{profile.location}</li>
            <li>{profile.email}</li>
            <hr />
            <li>{profile.longBio}</li>
          </ul>
        </article>
      </Section>

      <Section eyebrow="Experience" title="Professional timeline">
        <ExperienceTimeline items={experience} showResponsibilities />
      </Section>

      <Section eyebrow="Skills" title="Skills and technologies I work with">
        <SkillTags groups={skillGroups} />
      </Section>
    </>
  );
}
