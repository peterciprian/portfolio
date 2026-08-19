import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Section eyebrow="Projects" title="Selected work and public code">
      <h3 className="lead">
        Here are some projects from my works that I can show you, if you are
        interested, but most of my work is private and cannot be shared.
      </h3>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
