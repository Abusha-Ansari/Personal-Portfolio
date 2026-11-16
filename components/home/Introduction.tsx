"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { SKILLS } from "@/lib/constants";
import { Server, Database, Cloud, Code2 } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Backend & APIs": <Server className="h-4 w-4" />,
  "Databases & AI": <Database className="h-4 w-4" />,
  "Languages": <Code2 className="h-4 w-4" />,
  "Cloud & Tools": <Cloud className="h-4 w-4" />,
};

export function Introduction() {
  // Prioritize backend skills
  const skills = SKILLS.slice(0, 3).flatMap((category) => category.items.map((item) => item.name)).slice(0, 10);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container className="py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-2xl"
        >
          <Image
            src="/images/abusha-image.jpg"
            alt="Abusha Ansari portrait"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        {/* Content Section */}
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I&apos;m a developer building scalable backend systems, AI-powered tools, and full-stack web applications. With hands-on experience in Node.js, FastAPI, Supabase, TypeScript, and AI APIs, I focus on writing clean, production-ready code.
            </p>
            <p className="text-muted-foreground">
              I&apos;m Head of Technical Student Chapter at CSI-PCE — the Computer Society of India — where I lead technical initiatives and workshops for 200+ students. I&apos;m passionate about AI-integrated backend engineering and building tools that developers actually love.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SKILLS.map((category) => (
                <div
                  key={category.category}
                  className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2"
                >
                  {categoryIcons[category.category]}
                  <span className="truncate">{category.category}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}