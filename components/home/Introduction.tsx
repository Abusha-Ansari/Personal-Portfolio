"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { SKILLS } from "@/lib/constants";

export function Introduction() {
  const skills = SKILLS.flatMap((category) => category.items.map((item) => item.name)).slice(0, 8);

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
          className="relative h-[450px] rounded-2xl overflow-hidden"
        >
          <Image
            src="https://res.cloudinary.com/dhi6ul49y/image/upload/v1748359875/mqokdzh397fqyqfowuie.jpg"
            alt="Abusha Ansari portrait"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6">
              With over 2 years of experience in software development, I specialize in building modern web applications using React, TypeScript, and Next.js. My passion lies in creating intuitive, performant, and accessible user interfaces that solve real-world problems.
            </p>
            <p className="text-muted-foreground">
            I’m currently a Technical Team Member at CSI PCE — the Computer Society of India and the largest student body in the Mumbai chapter — where I lead the organization of various technical events. I’m passionate about writing clean code, crafting intuitive user experiences, and staying up-to-date with the latest technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}