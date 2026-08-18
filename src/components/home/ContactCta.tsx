import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { emailHref } from "@/lib/utils";

export function ContactCta() {
  const mail = emailHref(site.email);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-line bg-ink px-6 py-10 text-paper sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/55">
            Contact
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            Have an analyst opportunity?
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-paper/70">
            I am looking for graduate roles in business analysis, operations,
            and product. If you have a problem that needs structuring, I would
            like to hear about it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {mail ? (
              <ButtonLink href={mail} variant="accent-soft">
                Email me
              </ButtonLink>
            ) : (
              <p className="rounded-md bg-white/10 px-4 py-2.5 text-sm text-paper/80">
                Email: {site.email}
              </p>
            )}
            <ButtonLink href="/resume" variant="secondary" className="border-white/20 text-paper hover:bg-white/10">
              View resume
            </ButtonLink>
          </div>
          <div className="mt-6 [&_a]:border-white/15 [&_a]:bg-white/5 [&_a]:text-paper [&_span]:border-white/15 [&_span]:bg-white/5 [&_span]:text-paper/70">
            <SocialLinks showLabels />
          </div>
        </div>
      </Container>
    </section>
  );
}
