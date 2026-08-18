import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-motif pointer-events-none absolute inset-0" />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {site.availability}
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
          {site.name}
        </h1>
        <p className="mt-3 text-base font-medium text-ink-soft sm:text-lg">
          {site.role}
        </p>
        <p className="mt-6 max-w-2xl font-serif text-2xl leading-snug tracking-tight text-ink sm:text-[1.7rem]">
          {site.headline}
        </p>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
          {site.supporting}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/projects">View my work</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">
            View resume
          </ButtonLink>
          <SocialLinks className="sm:ml-2" />
        </div>
        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Target roles">
          {site.targeting.map((role) => (
            <li
              key={role}
              className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft"
            >
              {role}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
