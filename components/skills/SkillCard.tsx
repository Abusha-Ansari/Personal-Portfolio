"use client";

import { motion } from "framer-motion";
import { Skill } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="h-full  hover:scale-200">
        <CardContent className="pt-6">
          <div className="flex justify-center items-center mb-2">
            <h3 className="font-medium">{skill.name}</h3>
            {/* <span className="text-sm text-muted-foreground">
              {skill.level}%
            </span> */}
          </div>
          {/* <Progress value={skill.level} className="h-2" /> */}
        </CardContent>
      </Card>
    </motion.div>
  );
}