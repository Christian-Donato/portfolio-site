import type { Metadata } from "next";
import { projectCategories } from "@/lib/types";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Business analysis, data analysis, and business intelligence case studies. Each project follows problem, analysis, insight, and recommendation.",
};

export default function ProjectsPage() {
  return (
    <div className="border-b border-line">
      <Container className="py-14 sm:py-16">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies, not screenshots"
          description="Internship, personal builds, and university assignments. University work is labelled."
        />
        <div className="mt-10 space-y-12">
          {projectCategories.map((category) => {
            const items = projects.filter((project) => project.category === category);
            items.sort(
              (a, b) => Number(a.origin !== "personal") - Number(b.origin !== "personal"),
            );
            if (!items.length) return null;
            return (
              <section key={category} aria-labelledby={category}>
                <h2
                  id={category}
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
                >
                  {category}
                </h2>
                <div className="mt-4 grid gap-6 lg:grid-cols-2">
                  {items.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      featured={project.featured && items.length === 1}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
