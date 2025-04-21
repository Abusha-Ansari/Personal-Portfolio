"use client";

import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      description: "abusha.ansari21@gmail.com",
      href: "mailto:abusha.ansari21@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      description: "+91 xxx xxx xxx",
      href: "tel:+91 1234567890",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      description: "Mumbai, India",
      href: "#",
    },
  ];

  return (
    <main className="pt-24">
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-muted-foreground max-w-md">
                Want to work together or have a question? Feel free to reach out
                using the contact form or through any of the methods below.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="flex items-start p-6">
                      <div className="mr-4 mt-1">{method.icon}</div>
                      <div>
                        <h3 className="font-medium">{method.title}</h3>
                        <a
                          href={method.href}
                          className="text-muted-foreground hover:text-primary"
                        >
                          {method.description}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-4">
                Availability & Response Time
              </h2>
              <p className="text-muted-foreground">
                I typically respond to inquiries within 24-48 hours. I'm
                currently available for freelance work and new opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg shadow-sm p-8"
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Send a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </main>
  );
}