"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { 
  Server, 
  Database, 
  Cloud, 
  Zap, 
  Shield, 
  GitBranch,
  Layers,
  Radio,
  Code2,
} from "lucide-react";

const techItems = [
  { name: "Node.js", icon: <Server className="h-6 w-6" />, color: "text-green-500" },
  { name: "Express.js", icon: <Zap className="h-6 w-6" />, color: "text-yellow-500" },
  { name: "FastAPI", icon: <Zap className="h-6 w-6" />, color: "text-teal-400" },
  { name: "PostgreSQL", icon: <Database className="h-6 w-6" />, color: "text-blue-400" },
  { name: "MongoDB", icon: <Database className="h-6 w-6" />, color: "text-green-400" },
  { name: "Supabase", icon: <Database className="h-6 w-6" />, color: "text-emerald-500" },
  { name: "TypeScript", icon: <Code2 className="h-6 w-6" />, color: "text-blue-500" },
  { name: "Python", icon: <Code2 className="h-6 w-6" />, color: "text-yellow-400" },
  { name: "Vercel AI SDK", icon: <Layers className="h-6 w-6" />, color: "text-pink-400" },
  { name: "OpenAI API", icon: <Shield className="h-6 w-6" />, color: "text-cyan-400" },
  { name: "AWS", icon: <Cloud className="h-6 w-6" />, color: "text-amber-400" },
  { name: "Vercel", icon: <Cloud className="h-6 w-6" />, color: "text-white" },
];

export function TechStack() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I use to build scalable, production-ready applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {techItems.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className={tech.color}>{tech.icon}</div>
              <span className="text-xs font-medium text-muted-foreground text-center font-mono">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
