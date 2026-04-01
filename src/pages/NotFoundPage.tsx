import { Section } from "@/components/layout";
import { Button } from "@/components/ui";

export function NotFoundPage() {
  return (
    <Section className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-text-muted">Page not found</p>
      <Button className="mt-8" onClick={() => (window.location.href = "/")}>
        Back to Home
      </Button>
    </Section>
  );
}
