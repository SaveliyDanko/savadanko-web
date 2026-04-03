import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/utils";
import { useTheme, useTranslation, useLanguage } from "@/app/providers";
import { withBasePath } from "@/config/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reopenGuardUntilRef = useRef(0);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const closeMenu = () => {
    reopenGuardUntilRef.current = performance.now() + 320;
    setMenuOpen(false);
  };

  const openMenu = () => {
    if (performance.now() < reopenGuardUntilRef.current) {
      return;
    }

    setMenuOpen(true);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
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
            <button
              type="button"
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

            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface-lighter hover:text-text"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              className={cn(
                "ml-1 flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-surface-light/60 text-text-muted transition-all duration-200 hover:border-section-label/30 hover:text-text md:hidden",
                menuOpen && "pointer-events-none opacity-0",
              )}
              onClick={openMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] transition-opacity duration-300 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 z-0 bg-[#040611]/58 backdrop-blur-[3px]"
          aria-label="Close mobile menu"
          onClick={closeMenu}
        />

        <aside
          className={cn(
            "absolute inset-y-0 right-0 z-10 w-[min(82vw,380px)] overflow-hidden border-l border-card-border/80 bg-surface/96 shadow-[0_28px_90px_rgba(2,6,23,0.52)] backdrop-blur-2xl transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-modal="true"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-section-label/70 to-transparent" />
          <div className="pointer-events-none absolute -left-16 top-20 h-48 w-48 rounded-full bg-section-label/10 blur-[110px]" />
          <div className="pointer-events-none absolute -right-10 bottom-24 h-44 w-44 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative flex h-full flex-col px-5 pb-8 pt-12">
            <div className="flex items-start justify-between gap-4">
              <Link
                to="/"
                onClick={closeMenu}
                className="group flex min-w-0 items-center gap-3 rounded-[24px] border border-card-border bg-surface-light/55 px-3.5 py-3 shadow-[0_18px_44px_rgba(5,8,20,0.16)] transition-colors duration-200 hover:border-section-label/20 hover:bg-surface-light/70"
              >
                <span className="flex h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-card-border bg-surface-light">
                  <img
                    src={withBasePath("Logo.jpg")}
                    alt={t.header.brand}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-heading">
                    {t.header.brand}
                  </span>
                  <span className="block text-xs text-body-secondary">
                    savadanko.dev
                  </span>
                </span>
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-card-border bg-surface-light/70 text-body transition-colors duration-200 hover:border-section-label/20 hover:text-heading"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-8 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "group flex items-center rounded-2xl border px-5 py-4 text-lg font-semibold tracking-tight transition-all duration-200",
                      isActive
                        ? "border-section-label/25 bg-section-label/12 text-heading shadow-[0_0_24px_rgba(111,141,253,0.15)]"
                        : "border-card-border/60 bg-surface-light/40 text-text-muted hover:border-section-label/20 hover:bg-surface-light/70 hover:text-heading",
                    )
                  }
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </NavLink>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
