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
              src="/images/abusha-image.jpg"
              alt="Abusha Ansari"
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
              Hello! I'm Abusha Ansari, a backend-focused developer with over 2 years of experience in building server-side applications, APIs, and database systems that power real-world products.
            </p>
            
            <p>
              My journey in tech began during my undergraduate studies at Pillai College of Engineering, where I discovered my passion for system design and building the infrastructure that powers applications. Since then, I've dived deep into Node.js, Express, PostgreSQL, MongoDB, and cloud services.
            </p>
            
            <p>
              I'm Joint Technical Head of CSI PCE — the Computer Society of India, and the largest student body in the Mumbai chapter. This role has sharpened my ability to architect technical solutions and lead development teams.
            </p>
            
            <p>
              My technical expertise includes designing RESTful APIs, database schema architecture, GraphQL, real-time communication with Socket.io and WebRTC, and deploying with Docker and cloud infrastructure. I believe the best backend code is the code that's reliable, well-tested, and invisible to the end user.
            </p>
            
            <p>
              When I'm not coding, you can find me chilling with my friends, reading about distributed systems, or experimenting with new recipes in the kitchen.
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