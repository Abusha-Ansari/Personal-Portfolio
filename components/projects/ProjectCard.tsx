"use client";

import { Project } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github as GitHub } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          {project.featured && (
            <div className="absolute top-2 right-2">
              <Badge variant="default" className="bg-primary text-white dark:text-black">
                Featured
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="flex-grow pt-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t pt-4">
          <Link
            href={project.srcCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-primary hover:underline"
          >
            <GitHub className="mr-1 h-4 w-4" />
            Source Code
          </Link>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            Live Demo
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}