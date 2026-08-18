import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20" aria-labelledby="capabilities">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills, with the work that shows them"
          description="Skills I can show from intern and coursework work. Where there is a case study, it is linked."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <h3 id={group.id} className="font-serif text-2xl text-ink">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
              <ul className="mt-5 divide-y divide-line">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 py-2.5"
                  >
                    <span className="text-sm text-ink">{item.name}</span>
                    {item.projectSlug ? (
                      <Link
                        href={`/projects/${item.projectSlug}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover"
                      >
                        See project
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
