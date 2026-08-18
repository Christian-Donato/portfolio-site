import { ButtonLink } from "@/components/ui/Button";
import { externalHref } from "@/lib/utils";
import type { Project } from "@/lib/types";

export function ProjectLinks({
  project,
  includeCaseStudy = true,
}: {
  project: Project;
  includeCaseStudy?: boolean;
}) {
  const buttons = [
    includeCaseStudy
      ? {
          href: `/projects/${project.slug}`,
          label: "View case study",
          variant: "primary" as const,
          internal: true,
        }
      : null,
    {
      href: externalHref(project.links.github ?? ""),
      label: "View GitHub",
      variant: "secondary" as const,
    },
    {
      href: externalHref(project.links.dashboard ?? ""),
      label: "View dashboard",
      variant: "secondary" as const,
    },
    {
      href: externalHref(project.links.sql ?? ""),
      label: "View SQL",
      variant: "secondary" as const,
    },
    {
      href: externalHref(project.links.dataset ?? ""),
      label: "View dataset",
      variant: "secondary" as const,
    },
  ].filter((item): item is NonNullable<typeof item> => Boolean(item?.href));

  if (!buttons.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {buttons.map((item) => (
        <ButtonLink
          key={item.label}
          href={item.href as string}
          variant={item.variant}
          external={!item.internal}
        >
          {item.label}
        </ButtonLink>
      ))}
    </div>
  );
}
