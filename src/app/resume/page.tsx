import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { resume } from "@/data/resume";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { isPlaceholder } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for graduate Business Analyst and Data Analyst roles — education, skills, and selected analysis work.",
};

function ResumeBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  const hasExperience = resume.experience.some(
    (item) => !isPlaceholder(item.title) && !isPlaceholder(item.org),
  );
  const hasCerts = resume.certifications.length > 0;

  return (
    <div className="border-b border-line">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Resume
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink">
              {site.name}
            </h1>
            <p className="mt-2 text-ink-soft">{site.role}</p>
            <p className="mt-1 text-sm text-muted">{site.location}</p>
            <p className="mt-1 text-sm text-muted">{site.email} · {site.phone}</p>
          </div>
          <ButtonLink href={site.resumeFile}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Download resume
          </ButtonLink>
        </div>

        <div className="mt-10 max-w-3xl rounded-xl border border-line bg-surface px-6 py-2 sm:px-8">
          <ResumeBlock title="Summary">
            <p className="text-[15px] leading-7 text-ink-soft">{resume.summary}</p>
          </ResumeBlock>

          <ResumeBlock title="Education">
            <ul className="space-y-4">
              {resume.education.map((item) => (
                <li key={item.title}>
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="text-sm text-ink-soft">{item.org}</p>
                  <p className="text-sm text-muted">{item.period}</p>
                  {item.detail && !isPlaceholder(item.detail) ? (
                    <p className="mt-2 text-sm text-muted">{item.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </ResumeBlock>

          {hasExperience ? (
            <ResumeBlock title="Experience">
              <ul className="space-y-5">
                {resume.experience.map((item) => (
                  <li key={`${item.org}-${item.title}`}>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="text-sm text-ink-soft">{item.org}</p>
                    <p className="text-sm text-muted">{item.period}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-ink-soft">
                      {item.bullets
                        .filter((bullet) => !isPlaceholder(bullet))
                        .map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </ResumeBlock>
          ) : null}

          {resume.leadership.length > 0 ? (
            <ResumeBlock title="Leadership & activities">
              <ul className="space-y-5">
                {resume.leadership.map((item) => (
                  <li key={`${item.org}-${item.title}`}>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="text-sm text-ink-soft">{item.org}</p>
                    <p className="text-sm text-muted">{item.period}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-ink-soft">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </ResumeBlock>
          ) : null}

          <ResumeBlock title="Technical skills">
            <ul className="flex flex-wrap gap-1.5">
              {resume.technicalSkills.map((skill) => (
                <li key={skill}>
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Business analysis skills">
            <ul className="flex flex-wrap gap-1.5">
              {resume.businessAnalysisSkills.map((skill) => (
                <li key={skill}>
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Projects">
            <ul className="space-y-4">
              {resume.projects.map((project) => (
                <li key={project.slug}>
                  <p className="font-medium text-ink">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-accent"
                    >
                      {project.title}
                    </Link>
                    {project.origin === "university" ? (
                      <span className="ml-2 text-xs font-normal text-accent">
                        University
                      </span>
                    ) : null}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-muted">
                    {project.category}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">
                    {project.summary}
                  </p>
                </li>
              ))}
            </ul>
          </ResumeBlock>

          {resume.otherProjects.length > 0 ? (
            <ResumeBlock title="Additional projects">
              <ul className="space-y-4">
                {resume.otherProjects.map((project) => (
                  <li key={project.title}>
                    <p className="font-medium text-ink">{project.title}</p>
                    <p className="text-xs uppercase tracking-wide text-muted">
                      {project.tools}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink-soft">
                      {project.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </ResumeBlock>
          ) : null}

          {hasCerts ? (
            <ResumeBlock title="Certifications">
              <ul className="space-y-3">
                {resume.certifications.map((item) => (
                  <li key={item.name}>
                    <p className="font-medium text-ink">{item.name}</p>
                    <p className="text-sm text-muted">
                      {item.issuer} · {item.year}
                    </p>
                  </li>
                ))}
              </ul>
            </ResumeBlock>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
