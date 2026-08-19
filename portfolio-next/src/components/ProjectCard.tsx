import Image from "next/image";
import type { Project } from "@/content/projects";
import { TagList } from "@/components/TagList";
import { assetPath } from "@/lib/assetPath";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card">
      <a className="card-image" href={project.href} target="_blank" rel="noreferrer">
        <Image src={assetPath(project.image)} alt="" width={720} height={450} />
      </a>
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <TagList items={project.stack} />
        <a className="button secondary" href={project.href} target="_blank" rel="noreferrer">
          {project.cta}
        </a>
      </div>
    </article>
  );
}