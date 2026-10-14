import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "./data";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Card className="relative overflow-hidden border-border bg-card/60 py-0 backdrop-blur">
            {/* ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
            </div>

            <CardContent className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
              {/* Left: pitch */}
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                  {"// contact"}
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Let&apos;s build something reliable.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  I&apos;m open to backend roles and contract work — especially
                  in fintech, payments, and distributed systems. Tell me what
                  you&apos;re building.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4 text-brand" />
                    {profile.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="size-4 text-brand" />
                    {profile.email}
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="size-4" />
                      Email me
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={profile.github} target="_blank" rel="noreferrer">
                      <Github className="size-4" />
                      GitHub
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right: quick links */}
              <div className="grid gap-3 sm:grid-cols-1">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactRow
                  icon={Github}
                  label="GitHub"
                  value="github.com"
                  href={profile.github}
                  external
                />
                <ContactRow
                  icon={Linkedin}
                  label="LinkedIn"
                  value="linkedin.com"
                  href={profile.linkedin}
                  external
                />
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center justify-between rounded-lg border border-border bg-background/50 px-4 py-3.5 transition-all hover:border-brand-border hover:bg-brand-soft"
    >
      <span className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-md border border-brand-border bg-brand-soft text-brand">
          <Icon className="size-4" />
        </span>
        <span className="flex flex-col">
          <span className="font-mono text-xs text-muted-foreground">
            {label}
          </span>
          <span className="text-sm font-medium text-foreground">{value}</span>
        </span>
      </span>
      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
    </a>
  );
}
