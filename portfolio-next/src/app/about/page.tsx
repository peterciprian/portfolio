import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Section } from "@/components/Section";
import { SkillTags } from "@/components/SkillTags";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About" title={profile.role} id="about">
        <article className="profile-panel">
          <ul className="profile-list">
            <li>{profile.location}</li>
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
            <li>{profile.github}</li>
            <li>{profile.linkedin}</li>
            <hr />
            <li>{profile.longBio}</li>
          </ul>
        </article>
      </Section>

      <Section eyebrow="Experience" title="Professional timeline" id="experience">
        <ExperienceTimeline items={experience} showResponsibilities />
      </Section>

      <Section eyebrow="Skills" title="Skills and technologies I work with" id="skills">
        <SkillTags groups={skillGroups} />
      </Section>
    </>
  );
}
