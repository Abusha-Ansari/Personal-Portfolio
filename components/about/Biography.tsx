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
              content="1+ Year"
            />
            <BiographyCard
              icon={<Award className="h-5 w-5 text-primary" />}
              title="Education"
              content="B.Tech — PCE, 2027"
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
              Hello! I&apos;m Abusha Ansari, a developer focused on building scalable backend systems, AI-powered applications, and full-stack web products that solve real problems.
            </p>
            
            <p>
              I&apos;m currently pursuing my B.Tech in Electronics &amp; Computer Engineering at Pillai College of Engineering (2023–2027), where I&apos;ve been deeply involved in the tech community as the Head of Technical Student Chapter at CSI-PCE — leading 8+ initiatives and organizing 6+ technical events for 200+ students.
            </p>
            
            <p>
              My professional experience includes a Backend Developer Internship at UTSAVY (Dec 2025 – Feb 2026), where I built responsive digital invitation templates, contributed to Supabase-powered backend integrations, and collaborated on custom domain (DNS) mapping infrastructure for a production platform.
            </p>
            
            <p>
              My technical toolkit spans TypeScript, Python, Node.js, FastAPI, PostgreSQL, MongoDB, Supabase, Vercel AI SDK, and OpenAI API. I love building things at the intersection of AI and backend engineering — from embedded NoSQL databases to AI-powered developer tools.
            </p>
            
            <p>
              When I&apos;m not coding, you can find me organizing tech workshops, participating in hackathons, or experimenting with new tools and ideas.
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