import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function ProcessStrip() {
  return (
    <section className="border-b border-line bg-surface" aria-labelledby="how-i-work">
      <Container className="py-10">
        <p
          id="how-i-work"
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
        >
          How I work
        </p>
        <ol className="mt-5 grid gap-4 sm:grid-cols-5">
          {processSteps.map((step, i) => (
            <li key={step.n} className="relative">
              <p className="font-mono text-xs text-accent">{step.n}</p>
              <p className="mt-1 text-sm font-medium text-ink">{step.label}</p>
              {i < processSteps.length - 1 ? (
                <span
                  className="absolute right-0 top-3 hidden h-px w-8 bg-line-strong sm:block lg:w-12"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
