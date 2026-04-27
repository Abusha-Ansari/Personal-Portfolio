"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ARCHITECTURE_CONCEPTS } from "@/lib/constants";
import { useEffect, useRef } from "react";

// Simple Mermaid-like diagram renderer using CSS and HTML
// We avoid the actual mermaid library to keep things lightweight
function DiagramRenderer({ diagram, id }: { diagram: string; id: string }) {
  // Parse the mermaid-like syntax and render as styled HTML
  const nodes = parseDiagram(diagram);

  return (
    <div className="mermaid-container overflow-x-auto">
      <div className="flex flex-wrap items-center justify-center gap-3 py-4 min-h-[120px]">
        {nodes.map((node, index) => (
          <div key={`${id}-${index}`} className="flex items-center gap-2">
            {index > 0 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="w-6 h-[2px] bg-primary/40" />
                <div className="w-0 h-0 border-l-[5px] border-l-primary/40 border-y-[4px] border-y-transparent" />
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-3 py-2 rounded-lg text-xs font-mono whitespace-nowrap ${
                node.isDatabase
                  ? "bg-primary/20 text-primary border border-primary/30 rounded-full"
                  : "bg-muted/50 text-foreground/80 border border-border/50"
              }`}
            >
              {node.label}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface DiagramNode {
  label: string;
  isDatabase: boolean;
}

function parseDiagram(diagram: string): DiagramNode[] {
  // Extract node definitions from the mermaid syntax
  const nodeMap = new Map<string, DiagramNode>();
  const lines = diagram.split('\n').map(l => l.trim()).filter(Boolean);
  
  for (const line of lines) {
    if (line.startsWith('graph')) continue;
    
    // Match patterns like: NodeId[Label], NodeId[(Label)], NodeId{Label}
    const nodePattern = /(\w+)\[([^\]]+)\]|(\w+)\[\(([^)]+)\)\]|(\w+)\{([^}]+)\}/g;
    let match;
    while ((match = nodePattern.exec(line)) !== null) {
      const id = match[1] || match[3] || match[5];
      const label = match[2] || match[4] || match[6];
      if (id && label) {
        nodeMap.set(id, {
          label: label.replace(/['"]/g, ''),
          isDatabase: line.includes('[(') && (match[3] !== undefined || match[4] !== undefined),
        });
      }
    }
    
    // Also handle simple node references that might not have brackets
    const arrowPattern = /(\w+)\s*(?:-->|-.->)\s*(\w+)/g;
    let arrowMatch;
    while ((arrowMatch = arrowPattern.exec(line)) !== null) {
      if (!nodeMap.has(arrowMatch[1])) {
        nodeMap.set(arrowMatch[1], { label: arrowMatch[1], isDatabase: false });
      }
      if (!nodeMap.has(arrowMatch[2])) {
        nodeMap.set(arrowMatch[2], { label: arrowMatch[2], isDatabase: false });
      }
    }
  }
  
  return Array.from(nodeMap.values());
}

export function Architecture() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">System Design Thinking</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I think in systems, not just endpoints. Here's how I approach backend architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARCHITECTURE_CONCEPTS.map((concept, index) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <h3 className="text-lg font-bold mb-3 font-mono text-primary">
                {concept.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {concept.description}
              </p>
              <DiagramRenderer diagram={concept.diagram} id={concept.id} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
