"use client";

import { Biography } from "@/components/about/Biography";
import { Timeline } from "@/components/about/Timeline";
import { TIMELINE } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main className="pt-24">
      <Biography />
      <Timeline items={TIMELINE} />
    </main>
  );
}