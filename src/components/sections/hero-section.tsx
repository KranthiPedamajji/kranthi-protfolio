
"use client";

import { Button } from "@/components/ui/button";
import Typewriter from "@/components/typewriter";
import Link from "next/link";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

export default function HeroSection() {
  const { ref } = useSectionInView("home", 0.5);
  const skills = [
    "Full Stack Developer.",
    "Data Engineer.",
    "Machine Learning Practitioner.",
    "Cloud Specialist.",
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center bg-grid-white/[0.05] relative section-fade-in"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter mb-4">
          Kranthi's Kinetic Portfolio
        </h1>
        <div className="text-xl md:text-2xl text-foreground/80 mb-8 h-8">
          <Typewriter texts={skills} />
        </div>
        <p className="max-w-3xl mx-auto mb-12 text-foreground/70">
          Versatile Full Stack & Data Engineer with 3+ years of experience building scalable web applications and end-to-end data solutions. Proficient in Python, JavaScript, .NET, and SQL for both application development and data workflows.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/Kranthi_Pedamajji_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        <div className="flex justify-center gap-6 mt-12">
            <a href="mailto:KranthiPedamajji3@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a href="tel:+18565267280" className="text-foreground/70 hover:text-primary transition-colors">
              <Phone className="h-6 w-6" />
              <span className="sr-only">Phone</span>
            </a>
            <a href="https://www.linkedin.com/in/kranthi-pedamajji-34a10719b/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/KranthiPedamajji" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
      </div>
    </section>
  );
}
