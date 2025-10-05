import { Button } from "@/components/ui/button";
import Typewriter from "@/components/typewriter";
import Link from "next/link";

export default function HeroSection() {
  const skills = [
    "Full-Stack Developer.",
    "UI/UX Enthusiast.",
    "Creative Coder.",
    "Problem Solver.",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-grid-white/[0.05] relative"
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
          Welcome to my digital space. I build beautiful, functional, and
          user-centric web experiences. Explore my work and get in touch.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
