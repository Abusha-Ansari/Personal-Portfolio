import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import CustomCursor from "@/components/ui/CustomCursor";
import clsx from "clsx";
import { cn } from "@/lib/utils";

// Fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Abusha Ansari | Software Developer",
  description: "Personal portfolio showcasing my projects and skills as a software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={cn(
        inter.variable,
        spaceGrotesk.variable,
        'scroll-smooth',
        'antialiased',
        'bg-gray-950',
        'text-gray-100',
        'selection:bg-primary/20 selection:text-primary-foreground',
        'overflow-x-hidden',
        'motion-reduce:scroll-auto',
        'motion-reduce:transform-none',
        'motion-reduce:transition-none'
      )}
    >
      <body className={cn(
        "min-h-screen bg-gradient-to-b from-gray-900 to-gray-950",
        "flex flex-col",
        "font-sans",
        "relative"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Custom Cursor - Only on desktop */}
          <CustomCursor />
          
          {/* Background Elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-20"></div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}