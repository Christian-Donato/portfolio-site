import Link from "next/link";
import { nav, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-paper-deep/50">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-xl text-ink">{site.name}</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {site.role}. {site.headline}
          </p>
          <SocialLinks className="mt-5" />
        </div>
        <nav aria-label="Footer">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Navigate
          </p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="border-t border-line py-5 text-xs text-muted">
        <p>
          University assignments are labelled. They are coursework, not client
          results.
        </p>
      </Container>
    </footer>
  );
}
