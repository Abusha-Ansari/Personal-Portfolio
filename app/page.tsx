"use client";

import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { TechStack } from "@/components/home/TechStack";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { Architecture } from "@/components/home/Architecture";
import { GitHubStats } from "@/components/home/GitHubStats";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PROJECTS, EXPERIENCE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <Introduction />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Experience Section */}
      <section className="bg-muted/30">
        <ExperienceSection experiences={EXPERIENCE} />
      </section>

      {/* Architecture / System Design Section */}
      <Architecture />

      {/* Featured Projects Section */}
      <section className="bg-muted/30 py-24">
        <ProjectGrid projects={PROJECTS.filter(project => project.featured)} />
        <div className="flex justify-center mt-8">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <GitHubStats />

      {/* Contact CTA Section */}
      <section className="bg-primary/5 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
            <p className="text-muted-foreground mb-8">
              Need a scalable backend, a well-designed API, or help architecting your system? Let's discuss your project and see how I can help.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}