import {
  Code2,
  Layers,
  Database,
  Server,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./about";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Database,
  Server,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-muted/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="// skills"
            title="The stack I build with"
            description="A focused toolset I've used in production — chosen for reliability, operability, and long-term maintainability."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <Reveal key={cat.title} delay={i * 80}>
                <Card className="group h-full gap-4 border-border bg-card/60 py-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-border">
                  <CardContent className="px-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-lg border border-brand-border bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="font-semibold text-foreground">
                        {cat.title}
                      </h3>
                    </div>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-brand-border hover:text-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
