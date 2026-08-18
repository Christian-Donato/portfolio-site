import type { InsightBlock, ProcessStep, Requirement, Stakeholder, UserStory } from "@/lib/types";
import Image from "next/image";
import {
  BarChart,
  DonutChart,
  KpiGrid,
  LineChart,
  SimpleTable,
} from "@/components/charts/Charts";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

export function CaseSection({
  number,
  title,
  children,
  wide,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className="scroll-mt-28 border-t border-line py-12 first:border-t-0 first:pt-0">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-mono text-xs tracking-widest text-accent">{number}</span>
        <h2 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className={cn(!wide && "max-w-3xl", "text-[15px] leading-7 text-ink-soft")}>
        {children}
      </div>
    </section>
  );
}

export function QuestionVisual({ block }: { block: InsightBlock }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="border-b border-line bg-surface-2 px-5 py-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          Question
        </p>
        <h3 className="mt-1 font-serif text-xl text-ink">{block.question}</h3>
      </div>
      <div className="px-5 py-5 sm:px-6">
        <ChartSwitch block={block} />
      </div>
      <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2">
        <div className="bg-surface px-5 py-4 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            Insight
          </p>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{block.insight}</p>
        </div>
        <div className="bg-accent-soft/60 px-5 py-4 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-ink">
            Action
          </p>
          <p className="mt-2 text-sm leading-6 text-accent-ink">{block.action}</p>
        </div>
      </div>
    </article>
  );
}

function ChartSwitch({ block }: { block: InsightBlock }) {
  const chart = block.chart;
  if (chart.type === "kpi") return <KpiGrid items={chart.items} />;
  if (chart.type === "bar") {
    return <BarChart title={chart.title} unit={chart.unit} data={chart.data} />;
  }
  if (chart.type === "hbar") {
    return (
      <BarChart title={chart.title} unit={chart.unit} data={chart.data} horizontal />
    );
  }
  if (chart.type === "line") {
    return <LineChart title={chart.title} unit={chart.unit} data={chart.data} />;
  }
  if (chart.type === "donut") return <DonutChart title={chart.title} data={chart.data} />;
  if (chart.type === "image") {
    return (
      <figure>
        <Image
          src={chart.src}
          alt={chart.alt}
          width={1280}
          height={900}
          className="w-full rounded-lg border border-line"
        />
        <figcaption className="mt-3 text-sm text-muted">{chart.caption}</figcaption>
      </figure>
    );
  }
  return <SimpleTable caption={chart.caption} headers={chart.headers} rows={chart.rows} />;
}

export function CodeBlock({
  title,
  caption,
  code,
}: {
  title: string;
  caption?: string;
  code: string;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-ink text-paper">
      <figcaption className="border-b border-white/10 px-4 py-3 text-sm text-paper/80">
        {title}
      </figcaption>
      <pre className="overflow-x-auto p-4 text-[13px] leading-6">
        <code className="font-mono">{code}</code>
      </pre>
      {caption ? (
        <p className="border-t border-white/10 px-4 py-3 text-xs text-paper/55">
          {caption}
        </p>
      ) : null}
    </figure>
  );
}

export function StakeholderGrid({ items }: { items: Stakeholder[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.name} className="rounded-lg border border-line bg-surface p-4">
          <div className="flex items-start justify-between gap-3">
            <p className="font-medium text-ink">{item.name}</p>
            <Tag
              className={cn(
                item.influence === "High" && "border-accent/30 bg-accent-soft text-accent-ink",
              )}
            >
              {item.influence} influence
            </Tag>
          </div>
          <p className="mt-2 text-sm text-muted">{item.interest}</p>
          <p className="mt-2 text-sm text-ink-soft">
            <span className="font-medium text-ink">Needs. </span>
            {item.need}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function ProcessMap({
  title,
  steps,
}: {
  title: string;
  steps: ProcessStep[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
        {title}
      </h3>
      <ol className="grid gap-3 md:grid-cols-5">
        {steps.map((step, i) => (
          <li
            key={step.id}
            className={cn(
              "relative rounded-lg border bg-surface p-4",
              step.pain ? "border-example/40 bg-example-soft/40" : "border-line",
            )}
          >
            <p className="font-mono text-[11px] text-accent">
              {step.id} · {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-medium text-ink">{step.title}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">{step.actor}</p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">{step.detail}</p>
            {step.pain ? (
              <p className="mt-3 text-sm text-example">Pain: {step.pain}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function BeforeAfter({
  current,
  future,
}: {
  current: ProcessStep[];
  future: ProcessStep[];
}) {
  return (
    <div className="space-y-8">
      <ProcessMap title="Current state" steps={current} />
      <ProcessMap title="Future state" steps={future} />
    </div>
  );
}

export function UserStories({ stories }: { stories: UserStory[] }) {
  return (
    <ul className="space-y-4">
      {stories.map((story) => (
        <li key={story.id} className="rounded-xl border border-line bg-surface p-5">
          <p className="font-mono text-xs text-accent">{story.id}</p>
          <p className="mt-2 text-[15px] leading-7 text-ink">
            As a <strong>{story.asA}</strong>, I want {story.iWant}, so that {story.soThat}.
          </p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            Acceptance criteria
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-ink-soft">
            {story.acceptance.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export function RequirementsTable({ items }: { items: Requirement[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line">
            <th className="px-3 py-2 font-medium text-muted">ID</th>
            <th className="px-3 py-2 font-medium text-muted">Type</th>
            <th className="px-3 py-2 font-medium text-muted">Requirement</th>
            <th className="px-3 py-2 font-medium text-muted">Priority</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-line/70 align-top">
              <td className="px-3 py-3 font-mono text-xs text-accent">{item.id}</td>
              <td className="px-3 py-3 text-ink-soft">{item.type}</td>
              <td className="px-3 py-3 text-ink-soft">{item.statement}</td>
              <td className="px-3 py-3">
                <Tag>{item.priority}</Tag>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
