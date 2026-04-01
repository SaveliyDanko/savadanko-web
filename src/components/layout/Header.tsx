import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-sm font-bold text-primary transition-transform duration-200 group-hover:scale-110">
            SD
          </span>
          <span className="text-xl text-text-muted transition-colors duration-200 group-hover:text-text">
            savadanko.dev
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
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <button
            className="text-text-muted md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden w-[150px] md:block" />
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
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
