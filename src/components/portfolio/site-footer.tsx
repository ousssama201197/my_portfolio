import { Terminal } from "lucide-react";
import { profile, navLinks } from "./data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="flex size-7 items-center justify-center rounded-md border border-brand-border bg-brand-soft text-brand">
              <Terminal className="size-3.5" />
            </span>
            <span className="text-foreground">
              {profile.firstName}
              <span className="text-brand">.</span>
              {profile.lastName}
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} {profile.name}. Built with Next.js &amp; Spring-mindset.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-brand">$</span> echo &quot;stay reliable&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
