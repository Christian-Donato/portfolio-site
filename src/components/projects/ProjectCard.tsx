import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Tag, UniversityBadge } from "@/components/ui/Tag";
import { ProjectPreview } from "@/components/visuals/ProjectPreviews";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-hover)]",
        featured && "lg:flex-row",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-line bg-surface-2",
          featured ? "lg:w-[52%] lg:border-b-0 lg:border-r" : "aspect-[16/9]",
        )}
      >
        <ProjectPreview type={project.preview} />
      </div>
      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "lg:p-8")}>
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{project.category}</Tag>
          {project.origin === "university" ? <UniversityBadge /> : null}
          {featured ? (
            <Tag className="border-accent/30 bg-accent-soft text-accent-ink">
              Flagship
            </Tag>
          ) : null}
        </div>
        <h3 className={cn("mt-4 font-serif tracking-tight text-ink", featured ? "text-3xl" : "text-2xl")}>
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        {project.org ? (
          <p className="mt-2 text-sm text-ink-soft">
            {project.org}
            {project.period ? ` · ${project.period}` : ""}
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-6 text-muted">
          <span className="font-medium text-ink-soft">Problem. </span>
          {project.problem}
        </p>
        <p className="mt-2 text-sm leading-6 text-muted">
          <span className="font-medium text-ink-soft">Outcome. </span>
          {project.outcome}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <li key={tool}>
              <Tag>{tool}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
          >
            View case study
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
