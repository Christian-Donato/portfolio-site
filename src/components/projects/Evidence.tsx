import { Tag } from "@/components/ui/Tag";

export function EvidenceRow({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  if (!items.length) return null;

  return (
    <div>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectEvidence({
  skills,
  tools,
  deliverables,
}: {
  skills?: string[];
  tools?: string[];
  deliverables?: string[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {skills ? <EvidenceRow label="Skills demonstrated" items={skills} /> : null}
      {tools ? <EvidenceRow label="Tools" items={tools} /> : null}
      {deliverables ? (
        <EvidenceRow label="Deliverables" items={deliverables} />
      ) : null}
    </div>
  );
}
