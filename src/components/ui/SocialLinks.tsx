import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";
import { emailHref, externalHref, phoneHref } from "@/lib/utils";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "Email",
    href: emailHref(site.email),
    icon: Mail,
  },
  {
    label: "Phone",
    href: phoneHref(site.phone),
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: externalHref(site.linkedinUrl),
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: externalHref(site.githubUrl),
    icon: GitHubIcon,
  },
].filter((item) => item.href);

export function SocialLinks({
  className,
  showLabels,
}: {
  className?: string;
  showLabels?: boolean;
}) {
  if (!items.length) return null;

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        const href = item.href as string;
        return (
          <li key={item.label}>
            <a
              href={href}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {showLabels ? <span>{item.label}</span> : null}
              <span className="sr-only">{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
