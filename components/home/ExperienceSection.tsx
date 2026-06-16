"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { ExperienceItem } from "@/lib/types";
import {
  Briefcase,
  GraduationCap,
  Laptop,
  MapPin,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Building2,
} from "lucide-react";

// ─── Tab configuration ───────────────────────────────────────────────────────

const TABS = [
  {
    key: "freelance",
    label: "Freelance",
    icon: <Laptop className="h-4 w-4" />,
    accent: "from-emerald-500/20 via-teal-500/10",
    dot: "bg-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    stripColor: "from-emerald-500 via-teal-400",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    key: "internship",
    label: "Internship",
    icon: <Briefcase className="h-4 w-4" />,
    accent: "from-blue-500/20 via-cyan-500/10",
    dot: "bg-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/25",
    stripColor: "from-blue-500 via-cyan-400",
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    key: "college",
    label: "College & Clubs",
    icon: <GraduationCap className="h-4 w-4" />,
    accent: "from-violet-500/20 via-purple-500/10",
    dot: "bg-violet-400",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/25",
    stripColor: "from-violet-500 via-purple-400",
    iconBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
] as const;

// ─── Props ───────────────────────────────────────────────────────────────────

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

// ─── Single experience card ───────────────────────────────────────────────────

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
  tab: (typeof TABS)[number];
  isLast: boolean;
}

function ExperienceCard({ item, index, tab, isLast }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex gap-5"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        {/* Circle node */}
        <div
          className={`
            relative z-10 flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full border ${tab.iconBg}
            shadow-sm ring-4 ring-background
          `}
        >
          {tab.icon}
        </div>

        {/* Vertical connector line */}
        {!isLast && (
          <div className="mt-1 w-px flex-1 bg-gradient-to-b from-border to-transparent min-h-[2rem]" />
        )}
      </div>

      {/* Card */}
      <div className="mb-10 flex-1 min-w-0">
        <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:-translate-y-0.5">
          {/* Top colour strip */}
          <div className={`h-0.5 w-full bg-gradient-to-r ${tab.stripColor} to-transparent`} />

          {/* Dot-grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative p-5 sm:p-6">
            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                  {item.role}
                </h3>

                <div className="flex items-center gap-1.5 mt-1">
                  <Building2 className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <span className="text-sm text-muted-foreground font-medium truncate">
                    {item.company}
                  </span>
                </div>
              </div>

              {/* Type badge */}
              <Badge
                variant="outline"
                className={`shrink-0 text-[11px] font-mono px-2 py-0.5 capitalize ${tab.badge}`}
              >
                {item.type === "college" ? "Club / College" : item.type}
              </Badge>
            </div>

            {/* Meta: duration + location */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 shrink-0" />
                {item.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {item.location}
              </span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline font-medium"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Visit
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-5">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack chips */}
            <div className="flex flex-wrap gap-1.5">
              {item.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-muted/50 font-mono text-[11px] px-2 py-0.5 border-border/60 text-muted-foreground hover:border-primary/30 hover:text-primary/80 transition-colors duration-150"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Tab button ───────────────────────────────────────────────────────────────

interface TabButtonProps {
  tab: (typeof TABS)[number];
  active: boolean;
  count: number;
  onClick: () => void;
}

function TabButton({ tab, active, count, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary
        ${
          active
            ? "bg-primary text-primary-foreground shadow-md"
            : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground bg-card"
        }
      `}
    >
      {tab.icon}
      {tab.label}
      <span
        className={`
          ml-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold
          ${active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"}
        `}
      >
        {count}
      </span>
    </button>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [activeTab, setActiveTab] = useState<"freelance" | "internship" | "college">("freelance");

  const filtered = experiences.filter((e) => e.type === activeTab);
  const currentTab = TABS.find((t) => t.key === activeTab)!;

  const countOf = (key: string) => experiences.filter((e) => e.type === key).length;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.04),transparent_60%)]" />

      <Container>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Briefcase className="h-3.5 w-3.5" />
            Professional Experience
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Where I&apos;ve Been
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of the freelance contracts, internship roles, and college
            technical responsibilities that have shaped my engineering journey.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {TABS.map((tab) => (
            <TabButton
              key={tab.key}
              tab={tab}
              active={activeTab === tab.key}
              count={countOf(tab.key)}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
            />
          ))}
        </motion.div>

        {/* Timeline content */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.length > 0 ? (
                filtered.map((item, idx) => (
                  <ExperienceCard
                    key={item.id}
                    item={item}
                    index={idx}
                    tab={currentTab}
                    isLast={idx === filtered.length - 1}
                  />
                ))
              ) : (
                <div className="text-center py-16 text-muted-foreground">
                  <ChevronRight className="h-8 w-8 mx-auto mb-3 opacity-30" />
                  No entries in this category yet.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
