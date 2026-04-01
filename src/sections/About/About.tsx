import { Section } from "@/components/layout";
import { AboutShowcase } from "./AboutShowcase";

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      <AboutShowcase />
    </Section>
  );
}
