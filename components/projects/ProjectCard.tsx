"use client";

import { Project } from "@/lib/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github as GitHub, Server, Layers, Star, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Returns a deterministic gradient pattern based on project id / index
function getCardAccent(index: number) {
  const accents = [
    { from: "from-emerald-500/20", via: "via-teal-500/10", to: "to-transparent", dot: "bg-emerald-400", glow: "shadow-emerald-500/10" },
    { from: "from-cyan-500/20",    via: "via-sky-500/10",   to: "to-transparent", dot: "bg-cyan-400",    glow: "shadow-cyan-500/10" },
    { from: "from-teal-500/20",    via: "via-green-500/10", to: "to-transparent", dot: "bg-teal-400",    glow: "shadow-teal-500/10" },
    { from: "from-green-500/20",   via: "via-emerald-500/10",to: "to-transparent",dot: "bg-green-400",   glow: "shadow-green-500/10" },
    { from: "from-sky-500/20",     via: "via-cyan-500/10",  to: "to-transparent", dot: "bg-sky-400",     glow: "shadow-sky-500/10" },
    { from: "from-violet-500/15",  via: "via-teal-500/10",  to: "to-transparent", dot: "bg-violet-400",  glow: "shadow-violet-500/10" },
  ];
  return accents[index % accents.length];
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = getCardAccent(index);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group h-full"
    >
      <div
        className={`
          relative h-full flex flex-col
          rounded-xl border border-border bg-card
          transition-all duration-300
          hover:border-primary/30 hover:shadow-lg hover:${accent.glow}
          hover:-translate-y-1
          overflow-hidden
        `}
      >
        {/* Top gradient strip */}
        <div className={`h-1 w-full bg-gradient-to-r ${accent.from.replace("/20", "")} via-primary/60 to-transparent`} />

        {/* Card Header — replaces image */}
        <div className={`relative px-5 pt-5 pb-4 bg-gradient-to-br ${accent.from} ${accent.via} ${accent.to}`}>
          {/* Decorative grid dots */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Header row: icon + badges */}
          <div className="relative flex items-start justify-between gap-2">
            {/* Project type icon */}
            <div className="flex items-center gap-2">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-background/60 backdrop-blur-sm shadow-sm`}>
                {project.projectType === "backend" ? (
                  <Server className="h-5 w-5 text-primary" />
                ) : (
                  <Layers className="h-5 w-5 text-primary" />
                )}
              </div>

              {/* Type label */}
              <Badge
                variant="outline"
                className={`text-xs font-mono px-2 py-0.5 ${
                  project.projectType === "backend"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
                    : "bg-blue-500/10 text-blue-400 border-blue-500/25"
                }`}
              >
                {project.projectType === "backend" ? "Backend" : "Full-Stack"}
              </Badge>
            </div>

            {/* Featured star */}
            {project.featured && (
              <div className="flex items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-wide text-primary">Featured</span>
              </div>
            )}
          </div>

          {/* Decorative code snippet line */}
          <div className="relative mt-3 font-mono text-[10px] text-muted-foreground/50 leading-relaxed">
            <span className="text-primary/50">{"// "}</span>
            <span>{project.title.toLowerCase().replace(/\s+/g, "-")}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex flex-col flex-grow px-5 pt-4 pb-2">
          <h3 className="text-lg font-bold leading-snug text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-muted/50 font-mono text-[11px] px-2 py-0.5 border-border/60 text-muted-foreground hover:border-primary/30 hover:text-primary/80 transition-colors duration-150"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between border-t border-border/60 mx-5 mt-4 py-4">
          {project.srcCode && (
            <Link
              href={project.srcCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-150"
            >
              <GitHub className="h-4 w-4" />
              <span>Source</span>
            </Link>
          )}

          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-150"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}