import {
  Landmark,
  Boxes,
  Workflow,
  CheckCircle2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./about";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Boxes,
  Workflow,
};

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-border bg-muted/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="// projects"
            title="Things I've built"
            description="Selected backend systems — each one designed around correctness, auditability, and the realities of operating in fintech."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Boxes;
            return (
              <Reveal key={p.name} delay={i * 90}>
                <Card
                  className={cn(
                    "group h-full gap-4 border-border bg-card/60 py-5 backdrop-blur transition-all hover:-translate-y-1",
                    p.accent
                      ? "border-brand-border hover:brand-glow"
                      : "hover:border-brand-border"
                  )}
                >
                  <CardContent className="flex h-full flex-col px-5">
                    <div className="flex items-start justify-between">
                      <span
                        className={cn(
                          "flex size-11 items-center justify-center rounded-lg border",
                          p.accent
                            ? "border-brand-border bg-brand text-brand-foreground"
                            : "border-brand-border bg-brand-soft text-brand"
                        )}
                      >
                        <Icon className="size-5" />
                      </span>
                      {p.accent ? (
                        <span className="rounded-full border border-brand-border bg-brand-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand">
                          Featured
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {p.name}
                    </h3>
                    <p className="font-mono text-xs text-brand">{p.tagline}</p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto" />
                  </CardContent>

                  <CardFooter className="flex-col items-stretch gap-4 px-5">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-brand"
                    >
                      Request details
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </CardFooter>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
