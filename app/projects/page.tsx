"use client";

import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <main className="pt-24">
      <ProjectGrid projects={PROJECTS} />
    </main>
  );
}