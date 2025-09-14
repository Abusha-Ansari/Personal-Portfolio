"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Calendar, Award } from "lucide-react";

export function Biography() {
  return (
    <Container className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column - Image and info cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dhi6ul49y/image/upload/v1748359875/mqokdzh397fqyqfowuie.jpg"
              alt="Professional portrait"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BiographyCard
              icon={<MapPin className="h-5 w-5 text-primary" />}
              title="Location"
              content="Mumbai, India"
            />
            <BiographyCard
              icon={<Mail className="h-5 w-5 text-primary" />}
              title="Email"
              content="abusha.ansari21@gmail.com"
            />
            <BiographyCard
              icon={<Calendar className="h-5 w-5 text-primary" />}
              title="Experience"
              content="2+ Years"
            />
            <BiographyCard
              icon={<Award className="h-5 w-5 text-primary" />}
              title="Education"
              content="Btech Degree"
            />
          </div>
        </motion.div>

        {/* Right column - Bio content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold">About Me</h1>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Abusha Ansari, a passionate software developer with over 2 years of experience in creating web applications and digital experiences that users love.
            </p>
            
            <p>
              My journey in tech began during my undergraduate studies at Pillai College of Engineering, where I discovered my passion for creating elegant solutions to complex problems. Since then, I've worked with various technologies and frameworks, always seeking to expand my knowledge and skills.
            </p>
            
            {/* <p>
              After completing my Master's degree at Stanford University, I joined StartUp Ventures in New York as a Software Engineer. There, I honed my skills in full-stack development, working on a financial technology platform that served thousands of users.
            </p> */}
            
            <p>
              I’m Joint Technical Head of CSI PCE the Computer Society of India, and the largest student body in the Mumbai chapter.
            </p>
            
            <p>
              My technical expertise includes React, TypeScript, Next.js, Node.js, and various other modern web technologies. I'm passionate about clean code, user experience, and staying updated with the latest industry trends.
            </p>
            
            <p>
              When I'm not coding, you can find me chilling with my friends, reading science fiction, or experimenting with new recipes in the kitchen.
            </p>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

interface BiographyCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function BiographyCard({ icon, title, content }: BiographyCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center p-4">
        <div className="mr-4">{icon}</div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">
            {title}
          </h3>
          <p className="font-medium">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
}