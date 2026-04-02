import { Mail, Send } from "lucide-react";
import { Section } from "@/components/layout";
import { SectionHeading, Button } from "@/components/ui";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Contact"
        subtitle="Open to collaboration and new projects"
      />
      <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
        <p className="text-text-muted">
          Have a proposal, a question, or just want to say hi — feel free to
          reach out.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => (window.location.href = "mailto:dankosaveliy.m@gmail.com")}
          >
            <Mail size={18} />
            Write me
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.open("https://t.me/", "_blank")}
          >
            <Send size={18} />
            Telegram
          </Button>
        </div>
      </div>
    </Section>
  );
}
