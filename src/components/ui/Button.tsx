import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent-soft";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink-soft border-ink",
  secondary:
    "bg-transparent text-ink border-line-strong hover:border-ink hover:bg-surface",
  ghost:
    "bg-transparent text-ink border-transparent hover:bg-paper-deep",
  "accent-soft":
    "bg-accent-soft text-accent-ink border-transparent hover:bg-accent hover:text-paper",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  external,
  download,
  onClick,
}: Common & {
  href: string;
  external?: boolean;
  download?: boolean;
  onClick?: () => void;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium tracking-wide transition-colors",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (download || href.endsWith(".pdf")) {
    return (
      <a href={href} className={classes} download={download || undefined} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  onClick,
  ...props
}: Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: "button" | "submit";
  }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium tracking-wide transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
