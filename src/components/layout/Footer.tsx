import { SOCIAL_LINKS } from "@/constants/socials";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-light">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Sava Danko
        </p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
