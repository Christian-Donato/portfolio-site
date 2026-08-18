import type { Metadata } from "next";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { isPlaceholder } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Business Information Systems background and interest in business analysis, data analysis, and the work between business and technology.",
};

export default function AboutPage() {
  return (
    <div className="border-b border-line">
      <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            About
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            I work at the point where a business problem meets data and a system.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-ink-soft">
            <p>
              I am studying {site.education.degree} at {site.education.institution}.
              The degree sits between business and technology — which is also
              where I want to work.
            </p>
            <p>
            I interned at Plenti as a Process Improvement Specialist, migrating
            automated communication workflows, rebuilding 300+ email sequences,
            reworking API triggers with zero customer-facing disruption, and
            using SQL so product, operations, and compliance could decide from
            the same facts. That is the kind of problem I want more of: a
            system that almost works, until you have to change it.
            </p>
            <p>
              The problems I want to take on are practical. Why are customers
              leaving? Where does an order stall? Which number should a Monday
              meeting trust? I am not looking for a title that sounds senior. I
              am looking for a seat where I can structure a problem, work with
              the evidence, and recommend a next step.
            </p>
            <p>
              I am targeting graduate roles in business analysis, operations,
              and product — work that combines analytical thinking with
              technical execution.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View my work</ButtonLink>
            <ButtonLink href="/resume" variant="secondary">
              View resume
            </ButtonLink>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Education
            </p>
            <p className="mt-3 font-medium text-ink">{site.education.degree}</p>
            <p className="mt-1 text-sm text-ink-soft">{site.education.institution}</p>
            <p className="mt-1 text-sm text-muted">{site.education.period}</p>
            {!isPlaceholder(site.education.notes) ? (
              <p className="mt-3 text-sm text-muted">{site.education.notes}</p>
            ) : null}
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Location
            </p>
            <p className="mt-3 text-sm text-ink">{site.location}</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Contact
            </p>
            <SocialLinks className="mt-4" showLabels />
          </div>
        </aside>
      </Container>
    </div>
  );
}
