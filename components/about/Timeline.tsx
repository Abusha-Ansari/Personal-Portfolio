"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TimelineItem } from "@/lib/types";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineProps {
  items: readonly TimelineItem[];
}


export function Timeline({ items }: TimelineProps) {
  // Sort timeline items by date (descending)
  const sortedItems = [...items].sort((a, b) => {
    const dateA = a.date.split("-")[0];
    const dateB = b.date.split("-")[0];
    return parseInt(dateB) - parseInt(dateA);
  });

  return (
    <Container className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">My Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my education and work experience throughout my career.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-border" />

        {/* Timeline items */}
        <div className="space-y-12">
          {sortedItems.map((item, index) => (
            <TimelineElement
              key={item.id}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

interface TimelineElementProps {
  item: TimelineItem;
  index: number;
  isLeft: boolean;
}

function TimelineElement({ item, index, isLeft }: TimelineElementProps) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`flex items-center mb-6 sm:mb-0 ${
          isLeft
            ? "sm:flex-row-reverse sm:mr-auto sm:ml-0"
            : "sm:flex-row sm:ml-auto sm:mr-0"
        } max-w-md sm:max-w-[calc(50%-40px)]`}
      >
        <div
          className={`flex items-center ${
            isLeft ? "sm:justify-start" : "sm:justify-end"
          } w-full`}
        >
          <div className="bg-card shadow-md rounded-lg p-6 w-full">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-primary/10 mr-3">
                {item.type === "education" ? (
                  <GraduationCap className="h-5 w-5 text-primary" />
                ) : (
                  <Briefcase className="h-5 w-5 text-primary" />
                )}
              </div>
              <span className="text-sm text-muted-foreground">{item.date}</span>
            </div>
            
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <div className="text-muted-foreground text-sm mb-3">
              {item.organization} • {item.location}
            </div>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Circle on timeline */}
      <div className="absolute left-0 sm:left-1/2 top-6 transform sm:-translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10" />
    </div>
  );
}