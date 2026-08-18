import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { emailHref, externalHref, phoneHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Christian Donato for graduate Business Analyst, Data Analyst, and operations opportunities.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: emailHref(site.email),
    icon: Mail,
  },
  {
    label: "Phone",
    value: site.phone,
    href: phoneHref(site.phone),
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: site.linkedinUrl,
    href: externalHref(site.linkedinUrl),
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: site.githubUrl,
    href: externalHref(site.githubUrl),
    icon: GitHubIcon,
  },
].filter((channel) => channel.href);

export default function ContactPage() {
  return (
    <div className="border-b border-line">
      <Container className="py-14 sm:py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Have an analyst opportunity?
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
          I am open to graduate roles in business analysis, operations, and
          product. Email is the fastest way to reach me.
        </p>
        <div className="mt-6">
          <ButtonLink href="/resume" variant="secondary">
            View resume
          </ButtonLink>
        </div>
        <ul className="mt-10 max-w-xl divide-y divide-line rounded-xl border border-line bg-surface">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-surface-2"
                  {...(channel.href?.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-ink">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
