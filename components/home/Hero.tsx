"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, View, Terminal } from "lucide-react";

const codeLines = [
  { text: 'const app = express();', delay: 0 },
  { text: '', delay: 0.1 },
  { text: 'app.use(cors());', delay: 0.2 },
  { text: 'app.use(rateLimit({ max: 100 }));', delay: 0.3 },
  { text: 'app.use(authenticate);', delay: 0.4 },
  { text: '', delay: 0.5 },
  { text: 'app.get("/api/v1/users", async (req, res) => {', delay: 0.6 },
  { text: '  const users = await db.query(', delay: 0.7 },
  { text: '    "SELECT * FROM users WHERE active = $1",', delay: 0.8 },
  { text: '    [true]', delay: 0.9 },
  { text: '  );', delay: 1.0 },
  { text: '  res.json({ data: users.rows });', delay: 1.1 },
  { text: '});', delay: 1.2 },
  { text: '', delay: 1.3 },
  { text: 'app.listen(3000, () => {', delay: 1.4 },
  { text: '  console.log("🚀 Server running");', delay: 1.5 },
  { text: '});', delay: 1.6 },
];

function TerminalCode() {
  return (
    <div className="terminal-block w-full max-w-lg mx-auto lg:mx-0 shadow-2xl glow-green">
      <div className="terminal-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="p-4 text-sm leading-relaxed overflow-hidden">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.8 + line.delay }}
            className="font-mono"
          >
            {line.text === '' ? (
              <div className="h-4" />
            ) : (
              <div className="flex">
                <span className="text-muted-foreground/40 select-none w-6 text-right mr-4 text-xs leading-relaxed">
                  {index + 1}
                </span>
                <span className="text-green-400/90">{line.text}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center grid-bg">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.06),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
                <Terminal className="h-3.5 w-3.5" />
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Abusha Ansari
              <br />
              <span className="text-primary font-mono">Backend Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-xl text-lg sm:text-xl text-muted-foreground mb-8"
            >
              I architect robust APIs, scalable systems, and resilient server-side
              solutions. Passionate about databases, system design, and writing
              clean, efficient backend code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link
                  href="https://github.com/Abusha-Ansari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
              <a
                href="./Abusha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="rounded-full">
                  <View className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden lg:block"
          >
            <TerminalCode />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
