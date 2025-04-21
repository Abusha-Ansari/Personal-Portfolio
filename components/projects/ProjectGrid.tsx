"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else if (activeFilter === "featured") {
      setFilteredProjects(projects.filter((project) => project.featured));
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(activeFilter))
      );
    }
  }, [activeFilter, projects]);

  return (
    <Container className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of my recent work. These projects showcase my skills and
          experience in building web applications.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <FilterButton
          label="All"
          active={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        />
        <FilterButton
          label="Featured"
          active={activeFilter === "featured"}
          onClick={() => setActiveFilter("featured")}
        />
        {allTags.map((tag) => (
          <FilterButton
            key={tag}
            label={tag}
            active={activeFilter === tag}
            onClick={() => setActiveFilter(tag)}
          />
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No projects match the selected filter.
          </p>
        </div>
      )}
    </Container>
  );
}

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={active ? "default" : "outline"}
      size="sm"
      className="rounded-full"
    >
      {label}
    </Button>
  );
}