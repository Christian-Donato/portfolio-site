import Image from "next/image";
import type { ProjectPreview } from "@/lib/types";

export function WorkflowPreview() {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" className="fill-surface-2" />
      <rect x="20" y="18" width="200" height="10" rx="2" className="fill-ink/20" />
      <rect x="20" y="36" width="90" height="7" rx="2" className="fill-ink/10" />
      <rect x="24" y="72" width="180" height="256" rx="8" className="fill-surface stroke-line" />
      <text x="40" y="96" className="fill-muted" fontSize="11">
        Legacy platform
      </text>
      {["Sequence A", "Sequence B", "Sequence C"].map((label, i) => (
        <g key={label}>
          <rect x="40" y={118 + i * 54} width="148" height="40" rx="6" className="fill-paper-deep" />
          <text x="52" y={142 + i * 54} className="fill-ink" fontSize="12">
            {label}
          </text>
        </g>
      ))}
      <path d="M 220 200 H 268" className="stroke-accent" strokeWidth="2" />
      <polygon points="268,194 280,200 268,206" className="fill-accent" />
      <rect x="292" y="72" width="324" height="256" rx="8" className="fill-surface stroke-line" />
      <text x="312" y="96" className="fill-muted" fontSize="11">
        New platform
      </text>
      {["Rebuilt sequence", "API trigger", "SQL extract"].map((label, i) => (
        <g key={label}>
          <rect
            x="312"
            y={118 + i * 54}
            width="284"
            height="40"
            rx="6"
            className="fill-accent-soft"
          />
          <text x="328" y={142 + i * 54} className="fill-accent-ink" fontSize="12">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function AssistantPreview() {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" className="fill-surface-2" />
      <rect x="20" y="18" width="170" height="10" rx="2" className="fill-ink/20" />
      <rect x="24" y="56" width="280" height="280" rx="8" className="fill-surface stroke-line" />
      <text x="40" y="84" className="fill-muted" fontSize="11">
        Enquiry
      </text>
      {["Gmail thread", "Stripe payment", "Account detail"].map((label, i) => (
        <g key={label}>
          <rect x="40" y={104 + i * 64} width="248" height="48" rx="6" className="fill-paper-deep" />
          <text x="56" y={133 + i * 64} className="fill-ink" fontSize="13">
            {label}
          </text>
        </g>
      ))}
      <rect x="336" y="56" width="280" height="280" rx="8" className="fill-surface stroke-line" />
      <text x="352" y="84" className="fill-muted" fontSize="11">
        Draft reply
      </text>
      <rect x="352" y="104" width="248" height="120" rx="6" className="fill-accent-soft" />
      <text x="368" y="140" className="fill-accent-ink" fontSize="12">
        Policy-aware draft
      </text>
      <text x="368" y="162" className="fill-accent-ink" fontSize="12">
        Operator reviews before send
      </text>
      <rect x="352" y="244" width="248" height="56" rx="6" className="fill-ink" />
      <text x="384" y="278" className="fill-paper" fontSize="13">
        Confirm and send
      </text>
    </svg>
  );
}

export function FinancePreview({
  fit = "cover",
}: {
  fit?: "cover" | "contain";
}) {
  return (
    <Image
      src="/projects/finance-wrapped-spending-analysis.png"
      alt="Finance Wrapped Spending Analysis demo: total spending and top spending categories"
      width={1280}
      height={900}
      className={
        fit === "contain"
          ? "h-auto w-full bg-surface-2 object-contain"
          : "h-full min-h-[12rem] w-full object-cover object-top"
      }
    />
  );
}

export function RpaPreview() {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" className="fill-surface-2" />
      <rect x="20" y="18" width="200" height="10" rx="2" className="fill-ink/20" />
      <rect x="20" y="36" width="128" height="7" rx="2" className="fill-ink/10" />
      {[
        { x: 20, v: "24 wks", l: "Schedule" },
        { x: 172, v: "$200k", l: "Plan cost" },
        { x: 324, v: "12", l: "Risks" },
        { x: 476, v: "3", l: "Extreme" },
      ].map((k) => (
        <g key={k.l} transform={`translate(${k.x} 64)`}>
          <rect width="144" height="72" rx="8" className="fill-surface stroke-line" />
          <text x="14" y="24" className="fill-muted" fontSize="10">
            {k.l}
          </text>
          <text x="14" y="52" className="fill-ink" fontSize="22" fontFamily="ui-serif, Georgia, serif">
            {k.v}
          </text>
        </g>
      ))}
      <rect x="20" y="152" width="380" height="188" rx="8" className="fill-surface stroke-line" />
      <text x="36" y="176" className="fill-ink/70" fontSize="11">
        Extreme risks (score)
      </text>
      {[
        { y: 198, w: 300, l: "Integration", s: "20" },
        { y: 238, w: 240, l: "Data quality", s: "16" },
        { y: 278, w: 240, l: "Staff resistance", s: "16" },
      ].map((b) => (
        <g key={b.l}>
          <text x="36" y={b.y + 10} className="fill-muted" fontSize="10">
            {b.l}
          </text>
          <rect x="148" y={b.y} width={b.w} height="12" rx="3" className="fill-accent" />
          <text x={156 + b.w} y={b.y + 11} className="fill-ink" fontSize="11">
            {b.s}
          </text>
        </g>
      ))}
      <rect x="416" y="152" width="204" height="188" rx="8" className="fill-surface stroke-line" />
      <text x="432" y="176" className="fill-ink/70" fontSize="11">
        3-year NPV
      </text>
      <text x="432" y="220" className="fill-ink" fontSize="18" fontFamily="ui-serif, Georgia, serif">
        −$13k
      </text>
      <text x="432" y="240" className="fill-muted" fontSize="10">
        Conservative 25%
      </text>
      <text x="432" y="278" className="fill-accent-ink" fontSize="18" fontFamily="ui-serif, Georgia, serif">
        +$99k
      </text>
      <text x="432" y="298" className="fill-muted" fontSize="10">
        Realistic 40%
      </text>
    </svg>
  );
}

export function NetworkPreview() {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" className="fill-surface-2" />
      <rect x="20" y="18" width="220" height="10" rx="2" className="fill-ink/20" />
      <rect x="20" y="36" width="140" height="7" rx="2" className="fill-ink/10" />
      {[
        { x: 20, v: "6 sites", l: "Branches" },
        { x: 172, v: "VLSM", l: "Addressing" },
        { x: 324, v: "MPLS", l: "WAN (lab)" },
        { x: 476, v: "7", l: "Risk assets" },
      ].map((k) => (
        <g key={k.l} transform={`translate(${k.x} 64)`}>
          <rect width="144" height="72" rx="8" className="fill-surface stroke-line" />
          <text x="14" y="24" className="fill-muted" fontSize="10">
            {k.l}
          </text>
          <text x="14" y="52" className="fill-ink" fontSize="22" fontFamily="ui-serif, Georgia, serif">
            {k.v}
          </text>
        </g>
      ))}
      <rect x="20" y="152" width="600" height="188" rx="8" className="fill-surface stroke-line" />
      <text x="36" y="176" className="fill-ink/70" fontSize="11">
        Hub-and-spoke to data centre
      </text>
      <rect x="248" y="196" width="144" height="52" rx="8" className="fill-accent-soft stroke-accent/30" />
      <text x="272" y="218" className="fill-accent-ink" fontSize="11">
        Data centre
      </text>
      <text x="268" y="236" className="fill-muted" fontSize="10">
        Intranet 11.189.0.1
      </text>
      {[
        { x: 40, l: "Site 1" },
        { x: 130, l: "Site 2" },
        { x: 220, l: "Site 3" },
        { x: 370, l: "Site 4" },
        { x: 460, l: "Site 5" },
        { x: 550, l: "Site 6" },
      ].map((s) => (
        <g key={s.l}>
          <rect x={s.x} y="272" width="72" height="44" rx="6" className="fill-paper-deep stroke-line" />
          <text x={s.x + 14} y="298" className="fill-ink" fontSize="11">
            {s.l}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function FoodHubPreview() {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" className="fill-surface-2" />
      <rect x="20" y="18" width="180" height="10" rx="2" className="fill-ink/20" />
      <rect x="20" y="36" width="120" height="7" rx="2" className="fill-ink/10" />
      {[
        { x: 20, v: "Surplus", l: "Vendor listings" },
        { x: 172, v: "Pickup", l: "Student orders" },
        { x: 324, v: "IPO", l: "Operating model" },
        { x: 476, v: "SDG 12", l: "Reporting" },
      ].map((k) => (
        <g key={k.l} transform={`translate(${k.x} 64)`}>
          <rect width="144" height="72" rx="8" className="fill-surface stroke-line" />
          <text x="14" y="24" className="fill-muted" fontSize="10">
            {k.l}
          </text>
          <text x="14" y="52" className="fill-ink" fontSize="20" fontFamily="ui-serif, Georgia, serif">
            {k.v}
          </text>
        </g>
      ))}
      <rect x="20" y="152" width="380" height="188" rx="8" className="fill-surface stroke-line" />
      <text x="36" y="176" className="fill-ink/70" fontSize="11">
        Listing status
      </text>
      {[
        { y: 198, l: "Available", w: 220 },
        { y: 238, l: "Reserved", w: 140 },
        { y: 278, l: "Collected", w: 90 },
      ].map((b) => (
        <g key={b.l}>
          <text x="36" y={b.y + 10} className="fill-muted" fontSize="10">
            {b.l}
          </text>
          <rect x="128" y={b.y} width={b.w} height="12" rx="3" className="fill-accent" />
        </g>
      ))}
      <rect x="416" y="152" width="204" height="188" rx="8" className="fill-surface stroke-line" />
      <text x="432" y="176" className="fill-ink/70" fontSize="11">
        Data entities
      </text>
      {["Vendors", "Listings", "Orders", "Impact"].map((item, i) => (
        <g key={item}>
          <rect x="432" y={196 + i * 32} width="172" height="24" rx="4" className="fill-accent-soft" />
          <text x="444" y={212 + i * 32} className="fill-accent-ink" fontSize="12">
            {item}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function StreamingPreview() {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" className="fill-surface-2" />
      <rect x="20" y="18" width="160" height="10" rx="2" className="fill-ink/20" />
      <rect x="20" y="36" width="220" height="7" rx="2" className="fill-ink/10" />
      {[
        { x: 20, v: "Invite", l: "Accounts" },
        { x: 172, v: "206", l: "Range stream" },
        { x: 324, v: "2–6", l: "Watch room" },
        { x: 476, v: "RLS", l: "Postgres" },
      ].map((k) => (
        <g key={k.l} transform={`translate(${k.x} 64)`}>
          <rect width="144" height="72" rx="8" className="fill-surface stroke-line" />
          <text x="14" y="24" className="fill-muted" fontSize="10">
            {k.l}
          </text>
          <text x="14" y="52" className="fill-ink" fontSize="22" fontFamily="ui-serif, Georgia, serif">
            {k.v}
          </text>
        </g>
      ))}
      <rect x="20" y="156" width="392" height="184" rx="8" className="fill-surface stroke-line" />
      <text x="36" y="180" className="fill-ink/70" fontSize="11">
        Catalog on disk · metadata from TMDB
      </text>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={36 + i * 90}
          y="200"
          width="78"
          height="112"
          rx="6"
          className={i === 0 ? "fill-accent" : "fill-accent-soft"}
        />
      ))}
      <rect x="428" y="156" width="192" height="184" rx="8" className="fill-ink" />
      <text x="444" y="184" className="fill-paper/70" fontSize="11">
        Player
      </text>
      <rect x="444" y="248" width="160" height="6" rx="3" className="fill-paper/20" />
      <rect x="444" y="248" width="72" height="6" rx="3" className="fill-accent" />
      <text x="444" y="278" className="fill-paper/80" fontSize="11">
        Seek via byte range
      </text>
    </svg>
  );
}

export function DossierPreview() {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" className="fill-surface-2" />
      <rect x="20" y="18" width="180" height="10" rx="2" className="fill-ink/20" />
      <rect x="20" y="36" width="240" height="7" rx="2" className="fill-ink/10" />
      {[
        { x: 20, v: "<30s", l: "Briefing" },
        { x: 172, v: "3", l: "Sources" },
        { x: 324, v: "Print", l: "Dossier" },
        { x: 476, v: "Mock", l: "Demo mode" },
      ].map((k) => (
        <g key={k.l} transform={`translate(${k.x} 64)`}>
          <rect width="144" height="72" rx="8" className="fill-surface stroke-line" />
          <text x="14" y="24" className="fill-muted" fontSize="10">
            {k.l}
          </text>
          <text x="14" y="52" className="fill-ink" fontSize="22" fontFamily="ui-serif, Georgia, serif">
            {k.v}
          </text>
        </g>
      ))}
      <rect x="20" y="156" width="292" height="184" rx="8" className="fill-surface stroke-line" />
      <text x="36" y="180" className="fill-ink/70" fontSize="11">
        Today’s meetings
      </text>
      {["10:00 · Client A", "13:30 · Client B", "16:00 · Client C"].map((row, i) => (
        <g key={row}>
          <rect x="36" y={196 + i * 40} width="260" height="32" rx="6" className="fill-paper-deep" />
          <text x="48" y={216 + i * 40} className="fill-ink" fontSize="12">
            {row}
          </text>
        </g>
      ))}
      <rect x="328" y="156" width="292" height="184" rx="8" className="fill-surface stroke-line" />
      <text x="344" y="180" className="fill-ink/70" fontSize="11">
        Client dossier
      </text>
      {["Pulse", "Risks", "Opener", "Email tags"].map((row, i) => (
        <g key={row}>
          <rect x="344" y={196 + i * 32} width="260" height="26" rx="4" className="fill-accent-soft" />
          <text x="356" y={214 + i * 32} className="fill-accent-ink" fontSize="12">
            {row}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function ProjectPreview({
  type,
  fit = "cover",
}: {
  type: ProjectPreview;
  fit?: "cover" | "contain";
}) {
  if (type === "assistant") return <AssistantPreview />;
  if (type === "finance") return <FinancePreview fit={fit} />;
  if (type === "rpa") return <RpaPreview />;
  if (type === "network") return <NetworkPreview />;
  if (type === "foodhub") return <FoodHubPreview />;
  if (type === "streaming") return <StreamingPreview />;
  if (type === "dossier") return <DossierPreview />;
  return <WorkflowPreview />;
}
