"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Map icon name to component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="h-5 w-5" />;
      case "Linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "Twitter":
        return <Twitter className="h-5 w-5" />;
      case "Mail":
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-muted/50 py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <p className="text-muted-foreground max-w-md">
              A passionate developer building innovative solutions with modern
              technologies. Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-4 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {getIconComponent(social.icon)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-medium">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">Mumbai, India</li>
                  <li>
                    <a
                      href="mailto:abusha.ansari21@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      abusha.ansari21@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-8 mt-8 border-t border-border text-center text-muted-foreground text-sm"
        >
          © {currentYear} Portfolio. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}