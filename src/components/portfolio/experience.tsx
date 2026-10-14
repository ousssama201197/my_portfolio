import { Briefcase, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { experiences } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./about";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="// experience"
            title="Where I've shipped"
            description="5 years of building backends — the last 3+ in fintech, where correctness is non-negotiable."
          />
        </Reveal>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand via-border to-transparent sm:left-[11px]"
          />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal as="li" key={`${exp.company}-${exp.period}`} delay={i * 80}>
                <div className="relative pl-8 sm:pl-12">
                  {/* Node */}
                  <span
                    className={cn(
                      "absolute left-0 top-1.5 flex size-4 items-center justify-center rounded-full border-2 sm:size-6",
                      exp.current
                        ? "border-brand bg-brand text-brand-foreground"
                        : "border-border bg-background"
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        exp.current ? "bg-brand-foreground" : "bg-muted-foreground"
                      )}
                    />
                  </span>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm text-brand">
                      <Briefcase className="size-3.5" />
                      {exp.company}
                    </span>
                    {exp.current ? (
                      <Badge
                        variant="outline"
                        className="border-brand-border bg-brand-soft text-brand"
                      >
                        Current
                      </Badge>
                    ) : null}
                  </div>

                  <div className="mt-1 font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </div>

                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 max-w-3xl space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <ChevronRight className="mt-0.5 size-4 shrink-0 text-brand" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
