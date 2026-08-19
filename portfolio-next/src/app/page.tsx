import Image from "next/image";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillTags } from "@/components/SkillTags";
import { SocialLinks } from "@/components/SocialLinks";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { assetPath } from "@/lib/assetPath";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="lead">{profile.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">
              View selected work
            </Link>
            <Link className="button secondary" href="/about">
              Read the full profile
            </Link>
          </div>
          <SocialLinks links={profile.socials} />
        </div>
        <div className="portrait-panel" aria-label={`${profile.name} portrait`}>
          <Image src={assetPath("/img/profile.jpg")} alt={`${profile.name} portrait`} width={520} height={680} priority />
        </div>
      </section>

      <Section eyebrow="Selected work" title="Projects with product, map, and data-heavy interfaces">
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" title="Recent roles">
        <ExperienceTimeline items={experience.slice(0, 2)} />
      </Section>

      <Section eyebrow="Toolkit" title="Current strengths">
        <SkillTags groups={skillGroups} />
      </Section>
    </>
  );
}
