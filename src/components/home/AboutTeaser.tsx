import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function AboutTeaser() {
  return (
    <section className="border-y border-line bg-surface py-16">
      <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            About
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            Business, data, and the systems that sit between them
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
            I am a Business Information Systems student at Macquarie University.
            I interned at Plenti on workflow automation, API-driven systems,
            and SQL analysis — the point where a process, a system, and a
            dataset have to move together.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-paper p-6">
          <p className="text-sm text-muted">Currently</p>
          <p className="mt-2 font-medium text-ink">{site.education.degree}</p>
          <p className="mt-1 text-sm text-ink-soft">{site.education.institution}</p>
          <p className="mt-1 text-sm text-muted">{site.education.period}</p>
          <div className="mt-6">
            <ButtonLink href="/about" variant="secondary">
              More about me
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
