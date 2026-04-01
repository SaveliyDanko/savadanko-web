import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";

export function About() {
  return (
    <Section id="about">
      <SectionHeading title="About Me" subtitle="A brief look at who I am" />
      <motion.div
        className="mx-auto max-w-2xl space-y-4 text-text-muted"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Tell visitors about yourself, your experience, interests, and
          motivation. A few paragraphs that help people get to know you as a
          professional.
        </p>
        <p>
          Fill this section with real content — your career path, core skills,
          and approach to work.
        </p>
      </motion.div>
    </Section>
  );
}
