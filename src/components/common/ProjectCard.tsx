import { ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "@/types";
import { Card, Badge } from "@/components/ui";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hoverable>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="mb-4 rounded-lg object-cover"
        />
      )}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text"
            aria-label="GitHub repository"
          >
            <GitBranch size={20} />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text"
            aria-label="Live demo"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </Card>
  );
}
