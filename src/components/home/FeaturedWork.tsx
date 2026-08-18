import { getFeaturedProject, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedWork() {
  const featured = getFeaturedProject();
  const rest = projects.filter(
    (project) => project.onHome && project.slug !== featured?.slug,
  );

  return (
    <section className="py-16 sm:py-20" aria-labelledby="selected-work">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Evidence before claims"
            description="The Plenti internship first, then the HomePlanner Open Banking MVP. More university and personal work is on the projects page."
          />
          <ButtonLink href="/projects" variant="secondary">
            All projects
          </ButtonLink>
        </div>
        {featured ? (
          <div className="mt-10">
            <ProjectCard project={featured} featured />
          </div>
        ) : null}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
