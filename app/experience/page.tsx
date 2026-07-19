"use client";

import { motion } from "framer-motion";
import { Briefcase, Laptop, GraduationCap, ArrowDown } from "lucide-react";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { EXPERIENCE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  {
    icon: <Laptop className="h-5 w-5" />,
    value: EXPERIENCE.filter((e) => e.type === "freelance").length.toString() + "+",
    label: "Freelance Projects",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    value: EXPERIENCE.filter((e) => e.type === "internship").length.toString(),
    label: "Internships",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    value: EXPERIENCE.filter((e) => e.type === "college").length.toString() + "+",
    label: "College Involvements",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero Header ─────────────────────────────────────────── */}
      <div className="relative pt-32 pb-20 overflow-hidden grid-bg">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_center,rgba(34,197,94,0.08),transparent_55%)]" />

        <Container>
          <div className="flex flex-col items-center text-center">
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Briefcase className="h-3.5 w-3.5" />
                Professional Journey
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5"
            >
              My{" "}
              <span className="text-primary font-mono">Experience</span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-lg text-muted-foreground mb-12"
            >
              From freelance contracts and internships to leading tech teams at
              college a complete timeline of the engineering work that has
              shaped who I am as a developer.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.35 + i * 0.08 }}
                  className={`flex items-center gap-3 rounded-xl border px-5 py-3 ${stat.bg}`}
                >
                  <span className={stat.color}>{stat.icon}</span>
                  <div className="text-left">
                    <div className={`text-2xl font-bold font-mono ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-center gap-1 text-muted-foreground/50"
            >
              <span className="text-xs font-mono tracking-widest uppercase">scroll to explore</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* ── Experience Timeline ─────────────────────────────────── */}
      <div className="bg-muted/30">
        <ExperienceSection experiences={EXPERIENCE} />
      </div>
    </main>
  );
}
