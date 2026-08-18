import { cn } from "@/lib/utils";

const palette = ["#1a5c55", "#3d3c38", "#8a9a86", "#c4a574", "#6b7c8a"];

export function KpiGrid({
  items,
}: {
  items: { label: string; value: string; hint?: string }[];
}) {
  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.label}
          className="rounded-lg border border-line bg-surface px-4 py-4"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
            {item.label}
          </p>
          <p className="mt-2 font-serif text-3xl tracking-tight text-ink">
            {item.value}
          </p>
          {item.hint ? (
            <p className="mt-1 text-xs text-muted">{item.hint}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function BarChart({
  title,
  unit,
  data,
  horizontal,
}: {
  title: string;
  unit?: string;
  data: { label: string; value: number }[];
  horizontal?: boolean;
}) {
  const max = Math.max(...data.map((d) => Math.abs(d.value)), 1);

  if (horizontal) {
    return (
      <figure>
        <figcaption className="mb-4 text-sm font-medium text-ink">{title}</figcaption>
        <ul className="space-y-3">
          {data.map((d) => (
            <li key={d.label} className="grid grid-cols-[7.5rem_1fr_auto] items-center gap-3">
              <span className="truncate text-sm text-ink-soft">{d.label}</span>
              <div className="h-2.5 overflow-hidden rounded-full bg-paper-deep">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${(Math.abs(d.value) / max) * 100}%` }}
                />
              </div>
              <span className="w-12 text-right text-sm tabular-nums text-ink">
                {d.value}
                {unit ?? ""}
              </span>
            </li>
          ))}
        </ul>
      </figure>
    );
  }

  const height = 180;
  const gap = 16;
  const barWidth = 36;
  const width = data.length * (barWidth + gap) + 24;
  const hasNegative = data.some((d) => d.value < 0);
  const zeroY = hasNegative ? height / 2 : height - 8;

  return (
    <figure>
      <figcaption className="mb-4 text-sm font-medium text-ink">{title}</figcaption>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height + 28}`}
          className="h-52 w-full min-w-[280px]"
          role="img"
          aria-label={title}
        >
          {data.map((d, i) => {
            const x = 12 + i * (barWidth + gap);
            const magnitude = (Math.abs(d.value) / max) * (hasNegative ? height / 2 - 12 : height - 24);
            const y = d.value >= 0 ? zeroY - magnitude : zeroY;
            return (
              <g key={d.label}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={Math.max(magnitude, 2)}
                  rx="4"
                  className={d.value < 0 ? "fill-ink/50" : "fill-accent"}
                />
                <text
                  x={x + barWidth / 2}
                  y={height + 20}
                  textAnchor="middle"
                  className="fill-muted text-[11px]"
                >
                  {d.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
}

export function LineChart({
  title,
  unit,
  data,
}: {
  title: string;
  unit?: string;
  data: { label: string; value: number }[];
}) {
  const width = 560;
  const height = 200;
  const pad = { l: 28, r: 12, t: 16, b: 32 };
  const max = Math.max(...data.map((d) => d.value), 1);
  const min = 0;
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;
  const points = data.map((d, i) => {
    const x = pad.l + (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW);
    const y = pad.t + innerH - ((d.value - min) / (max - min)) * innerH;
    return { ...d, x, y };
  });
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <figure>
      <figcaption className="mb-3 text-sm font-medium text-ink">{title}</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-48 w-full" role="img" aria-label={title}>
        <path d={path} className="stroke-accent" fill="none" strokeWidth="2.2" />
        {points.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="4" className="fill-accent" />
            <text x={p.x} y={height - 8} textAnchor="middle" className="fill-muted text-[11px]">
              {p.label}
            </text>
            <text x={p.x} y={p.y - 10} textAnchor="middle" className="fill-ink text-[11px]">
              {p.value}
              {unit ?? ""}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

export function DonutChart({
  title,
  data,
}: {
  title: string;
  data: { label: string; value: number }[];
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const r = 56;
  const c = 2 * Math.PI * r;
  const segments = data.map((d, i) => {
    const dash = (d.value / total) * c;
    const offset = data
      .slice(0, i)
      .reduce((sum, item) => sum + (item.value / total) * c, 0);
    return { ...d, dash, offset, color: palette[i % palette.length] };
  });

  return (
    <figure className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <svg viewBox="0 0 160 160" className="mx-auto h-40 w-40" role="img" aria-label={title}>
        <g transform="translate(80 80) rotate(-90)">
          {segments.map((d) => (
            <circle
              key={d.label}
              r={r}
              cx="0"
              cy="0"
              fill="none"
              stroke={d.color}
              strokeWidth="18"
              strokeDasharray={`${d.dash} ${c - d.dash}`}
              strokeDashoffset={-d.offset}
            />
          ))}
        </g>
      </svg>
      <div>
        <figcaption className="mb-3 text-sm font-medium text-ink">{title}</figcaption>
        <ul className="space-y-2">
          {data.map((d, i) => (
            <li key={d.label} className="flex items-center gap-2 text-sm text-ink-soft">
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ background: palette[i % palette.length] }}
              />
              <span>{d.label}</span>
              <span className="ml-auto tabular-nums text-ink">{d.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

export function SimpleTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <figure className="overflow-x-auto">
      <figcaption className="mb-3 text-sm font-medium text-ink">{caption}</figcaption>
      <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line">
            {headers.map((header) => (
              <th key={header} className="px-3 py-2 font-medium text-muted">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={cn("border-b border-line/70", i % 2 === 0 && "bg-surface-2/60")}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2.5 text-ink-soft">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
