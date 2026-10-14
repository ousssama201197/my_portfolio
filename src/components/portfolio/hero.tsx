"use client";

import { MapPin, ArrowDown, Mail, Github, Linkedin, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70" />
        <div className="float-slow absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-24">
        {/* Left: intro */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-soft px-3 py-1 font-mono text-xs text-brand">
            <Circle className="size-2 fill-current" />
            {profile.availability}
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.firstName}{" "}
            <span className="text-brand">{profile.lastName}</span>
          </h1>

          <p className="mt-3 font-mono text-sm text-muted-foreground sm:text-base">
            <span className="text-brand">$</span> whoami{" "}
            <span className="cursor-blink text-brand">_</span>
          </p>

          <p className="mt-4 text-xl text-foreground sm:text-2xl">
            {profile.title}{" "}
            <span className="text-muted-foreground">· Fintech infrastructure</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-brand" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Circle className="size-2 fill-brand text-brand" />
              5+ years building backends
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View projects
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                Contact
              </a>
            </Button>

            <div className="ml-1 flex items-center gap-1">
              <Button asChild size="icon" variant="ghost" aria-label="GitHub">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github className="size-5" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost" aria-label="LinkedIn">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right: terminal card */}
        <div className="reveal" style={{ animationDelay: "120ms" }}>
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-brand/30 to-transparent blur" />
      <div className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl backdrop-blur">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
          <span className="size-3 rounded-full bg-destructive/70" />
          <span className="size-3 rounded-full bg-amber-500/70" />
          <span className="size-3 rounded-full bg-brand/70" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            oussama@portfolio: ~/profile
          </span>
        </div>

        {/* Body */}
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted-foreground">
          <code>{`{
  `}<span className="text-brand">"role"</span>{`: `}<span className="text-emerald-300">"Backend Engineer"</span>{`,
  `}<span className="text-brand">"location"</span>{`: `}<span className="text-emerald-300">"Algeria"</span>{`,
  `}<span className="text-brand">"experience_years"</span>{`: `}<span className="text-amber-300">5</span>{`,
  `}<span className="text-brand">"focus"</span>{`: `}<span className="text-emerald-300">"fintech"</span>{`,
  `}<span className="text-brand">"stack"</span>{`: [
    `}<span className="text-emerald-300">"Java"</span>{`, `}<span className="text-emerald-300">"Spring Boot"</span>{`,
    `}<span className="text-emerald-300">"Python"</span>{`, `}<span className="text-emerald-300">"PostgreSQL"</span>{`,
    `}<span className="text-emerald-300">"Redis"</span>{`, `}<span className="text-emerald-300">"Docker"</span>{`,
    `}<span className="text-emerald-300">"Kubernetes"</span>{`, `}<span className="text-emerald-300">"gRPC"</span>{`
  ],
  `}<span className="text-brand">"principles"</span>{`: [
    `}<span className="text-emerald-300">"correctness first"</span>{`,
    `}<span className="text-emerald-300">"idempotency by default"</span>{`,
    `}<span className="text-emerald-300">"observability is a feature"</span>{`
  ],
  `}<span className="text-brand">"status"</span>{`: `}<span className="text-emerald-300">"open_to_opportunities"</span>{`
}`}</code>
        </pre>

        <div className="border-t border-border bg-muted/30 px-5 py-3 font-mono text-xs text-muted-foreground">
          <span className="text-brand">$</span> ./run --status
          <span className="cursor-blink ml-1 text-brand">▋</span>
        </div>
      </div>
    </div>
  );
}
