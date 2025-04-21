"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SkillCard } from "./SkillCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillCategory } from "@/lib/types";

interface SkillGridProps {
  skillCategories: SkillCategory[];
}

export function SkillGrid({ skillCategories }: SkillGridProps) {
  return (
    <Container className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I've worked with a variety of technologies and tools. Here's a
          breakdown of my technical skills and proficiency levels.
        </p>
      </motion.div>

      <Tabs defaultValue={skillCategories[0].category.toLowerCase()} className="space-y-8">
        <div className="flex justify-center">
          <TabsList className="h-auto p-1">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.category}
                value={category.category.toLowerCase()}
                className="px-4 py-2"
              >
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {skillCategories.map((category) => (
          <TabsContent
            key={category.category}
            value={category.category.toLowerCase()}
            className="space-y-8 mt-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Container>
  );
}