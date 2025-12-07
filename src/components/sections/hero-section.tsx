
"use client";

import { Button } from "@/components/ui/button";
import Typewriter from "@/components/typewriter";
import Link from "next/link";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const { hero, contact, resumeUrl } = portfolioData;

export default function HeroSection() {
  const { ref } = useSectionInView("home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center justify-center py-20 md:py-32 section-fade-in"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter mb-4">
          {hero.title}
        </h1>
        <div className="text-xl md:text-2xl text-foreground/80 mb-8 h-8">
          <Typewriter texts={hero.skills} />
        </div>
        <p className="max-w-3xl mx-auto mb-12 text-foreground/70">
          {hero.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#projects">{hero.cta.projects}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={resumeUrl} download>
              <Download className="mr-2 h-4 w-4" />
              {hero.cta.resume}
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">{hero.cta.contact}</Link>
          </Button>
        </div>
        <div className="flex justify-center gap-6 mt-12">
            <a href={`mailto:${contact.email}`} className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a href={`tel:${contact.phone}`} className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110">
              <Phone className="h-6 w-6" />
              <span className="sr-only">Phone</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
      </div>
    </section>
  );
}
