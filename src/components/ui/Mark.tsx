export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect x="1" y="1" width="30" height="30" rx="6" className="stroke-ink" strokeWidth="1.4" />
      <rect x="6" y="18" width="6" height="8" rx="1" className="fill-ink" />
      <rect x="13" y="12" width="6" height="14" rx="1" className="fill-ink/35" />
      <rect x="20" y="7" width="6" height="19" rx="1" className="fill-accent" />
    </svg>
  );
}
