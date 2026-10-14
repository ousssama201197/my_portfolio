import { ShieldCheck, GitBranch, Activity, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { profile, stats } from "./data";
import { Reveal } from "./reveal";

const principles = [
  {
    icon: ShieldCheck,
    title: "Correctness first",
    desc: "Money and approvals can't be approximate. Ledgers balance, retries are safe, states are explicit.",
  },
  {
    icon: Activity,
    title: "Observability is a feature",
    desc: "Structured logs, metrics, and traces so production behavior is explainable, not guessed.",
  },
  {
    icon: GitBranch,
    title: "Clean service boundaries",
    desc: "Small, well-named services with clear contracts — easier to reason about, test, and evolve.",
  },
  {
    icon: Lock,
    title: "Secure by default",
    desc: "Authn/authz, input validation, and least privilege baked in — not bolted on later.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="// about"
            title="Engineering backends you can trust"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {profile.bio}
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              My work lives where reliability matters most: payments, account
              operations, inventory movements, and approval workflows. I focus
              on the unglamorous fundamentals — transactional integrity,
              idempotency, auditability — because that&apos;s what keeps systems
              standing at 3am.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <Card
                  key={s.label}
                  className="gap-0 border-border bg-card/60 py-5 backdrop-blur transition-colors hover:border-brand-border"
                >
                  <CardContent className="px-5">
                    <div className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      {s.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Card className="h-full gap-3 border-border bg-card/60 py-5 backdrop-blur transition-colors hover:border-brand-border">
                <CardContent className="px-5">
                  <p.icon className="size-5 text-brand" />
                  <h3 className="mt-3 font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
