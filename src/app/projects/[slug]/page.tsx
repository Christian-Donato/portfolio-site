import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getProject, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Tag, UniversityBadge } from "@/components/ui/Tag";
import { ProjectEvidence } from "@/components/projects/Evidence";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectPreview } from "@/components/visuals/ProjectPreviews";
import {
  BeforeAfter,
  CaseSection,
  CodeBlock,
  QuestionVisual,
  RequirementsTable,
  StakeholderGrid,
  UserStories,
} from "@/components/case-study/CaseBlocks";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.problem,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const study = project.caseStudy;

  return (
    <article className="border-b border-line pb-20">
      <div className="border-b border-line bg-surface">
        <Container className="py-10 sm:py-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Tag>{project.category}</Tag>
            {project.origin === "university" ? <UniversityBadge /> : null}
            {project.featured ? (
              <Tag className="border-accent/30 bg-accent-soft text-accent-ink">
                Flagship
              </Tag>
            ) : null}
          </div>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          {project.org ? (
            <p className="mt-2 text-sm text-ink-soft">
              {project.org}
              {project.period ? ` · ${project.period}` : ""}
            </p>
          ) : null}
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
            {project.problem}
          </p>
          <div className="mt-6">
            <ProjectLinks project={project} includeCaseStudy={false} />
          </div>
        </Container>
        <div className="border-t border-line">
          <Container className="py-0">
            <div className="overflow-hidden border-x border-line bg-surface-2">
              <ProjectPreview type={project.preview} fit="contain" />
            </div>
          </Container>
        </div>
      </div>

      <Container className="pt-10">
        {project.origin === "university" ? (
          <p className="mb-8 rounded-lg border border-accent/25 bg-accent-soft/50 px-4 py-3 text-sm text-accent-ink">
            University assignment. This is coursework — a group brief, not a
            live client engagement. The case study says what was built versus
            planned, and which figures are modelled.
          </p>
        ) : null}

        <div className="rounded-xl border border-line bg-surface p-6">
          <ProjectEvidence
            skills={project.skills}
            tools={project.tools}
            deliverables={project.deliverables}
          />
        </div>

        <CaseSection number="01" title="Business problem">
          <p>{study.problem}</p>
        </CaseSection>

        <CaseSection number="02" title="Objective">
          <p className="mb-3">Questions this work needed to answer:</p>
          <ol className="list-decimal space-y-2 pl-5">
            {study.objective.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection number="03" title="Data / context">
          <p>{study.dataContext}</p>
        </CaseSection>

        <CaseSection number="04" title="Approach">
          <ol className="list-decimal space-y-2 pl-5">
            {study.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection number="05" title="Tools">
          <ul className="flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <li key={tool}>
                <Tag>{tool}</Tag>
              </li>
            ))}
          </ul>
        </CaseSection>

        <section className="scroll-mt-28 border-t border-line py-12">
          <div className="mb-5 flex items-baseline gap-3">
            <span className="font-mono text-xs tracking-widest text-accent">06</span>
            <h2 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">
              Analysis
            </h2>
          </div>
          <p className="mb-8 max-w-3xl text-[15px] leading-7 text-ink-soft">
            Each block follows the same pattern: a business question, a visual,
            the insight, and the action.
          </p>
          <div className="space-y-6">
            {study.sqlSnippets?.map((snippet) => (
              <CodeBlock
                key={snippet.title}
                title={snippet.title}
                caption={snippet.caption}
                code={snippet.code}
              />
            ))}
            {study.analysis.map((block) => (
              <QuestionVisual key={block.question} block={block} />
            ))}
          </div>
        </section>

        {study.stakeholders ? (
          <CaseSection number="06a" title="Stakeholders" wide>
            <StakeholderGrid items={study.stakeholders} />
          </CaseSection>
        ) : null}

        {study.currentProcess && study.futureProcess ? (
          <section className="scroll-mt-28 border-t border-line py-12">
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-mono text-xs tracking-widest text-accent">06b</span>
              <h2 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">
                Before / after process
              </h2>
            </div>
            <BeforeAfter
              current={study.currentProcess}
              future={study.futureProcess}
            />
          </section>
        ) : null}

        {study.stories ? (
          <CaseSection number="06c" title="User stories" wide>
            <UserStories stories={study.stories} />
          </CaseSection>
        ) : null}

        {study.requirements ? (
          <CaseSection number="06d" title="Requirements" wide>
            <RequirementsTable items={study.requirements} />
          </CaseSection>
        ) : null}

        <CaseSection number="07" title="Key findings">
          <ul className="list-disc space-y-2 pl-5">
            {study.findings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseSection>

        <section className="scroll-mt-28 border-t border-line py-12">
          <div className="mb-5 flex items-baseline gap-3">
            <span className="font-mono text-xs tracking-widest text-accent">08</span>
            <h2 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">
              Business recommendations
            </h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-2">
            {study.recommendations.map((item, i) => (
              <li key={item.title} className="rounded-xl border border-line bg-surface p-5">
                <p className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <CaseSection number="09" title="Impact / expected outcome">
          <p>{study.impact}</p>
        </CaseSection>

        <CaseSection number="10" title="Reflection">
          <p>{study.reflection}</p>
        </CaseSection>
      </Container>
    </article>
  );
}
