import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ContactCta } from "@/components/home/ContactCta";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { SkillsSection } from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessStrip />
      <FeaturedWork />
      <SkillsSection />
      <AboutTeaser />
      <ContactCta />
    </>
  );
}
