import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-surface-2 px-2 py-0.5 text-[11px] font-medium tracking-wide text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function UniversityBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-accent/25 bg-accent-soft px-2 py-0.5 text-[11px] font-semibold tracking-wide text-accent-ink",
        className,
      )}
    >
      University assignment
    </span>
  );
}
