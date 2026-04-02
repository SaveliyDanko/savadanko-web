import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/utils";
import { useTheme, useTranslation, useLanguage } from "@/app/providers";
import { withBasePath } from "@/config/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-12 w-12 overflow-hidden rounded-lg border border-card-border bg-surface-light transition-transform duration-200 group-hover:scale-110">
            <img
              src={withBasePath("Logo.jpg")}
              alt={t.header.brand}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-xl text-text-muted transition-colors duration-200 group-hover:text-text">
            {t.header.brand}
          </span>
        </Link>

        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "text-[15px] font-medium transition-colors",
                    isActive ? "text-text" : "text-text-muted hover:text-text",
                  )
                }
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          {/* Language toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "ru" : "en")}
            className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold tracking-wide transition-colors hover:bg-surface-lighter"
            aria-label="Switch language"
          >
            <span
              className={cn(
                "transition-colors",
                language === "en" ? "text-text" : "text-text-muted",
              )}
            >
              EN
            </span>
            <span className="text-text-muted">/</span>
            <span
              className={cn(
                "transition-colors",
                language === "ru" ? "text-text" : "text-text-muted",
              )}
            >
              RU
            </span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface-lighter hover:text-text"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className="ml-1 text-text-muted md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/50 bg-surface/95 backdrop-blur-md transition-all md:hidden",
          menuOpen ? "max-h-80" : "max-h-0 border-t-0",
        )}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "text-[15px] font-medium transition-colors",
                    isActive ? "text-text" : "text-text-muted hover:text-text",
                  )
                }
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
