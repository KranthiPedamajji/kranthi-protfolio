
"use client";

import * as React from "react";
import Link from "next/link";
import { Code2, Menu, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { portfolioData } from "@/lib/portfolio-data";

const { name, resumeUrl, navLinks } = portfolioData;

const basePath = "/kranthi-protfolio"

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("#home");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resumePath = `${basePath}${resumeUrl}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2" aria-label="Homepage">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${activeLink === link.href ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
           <Button asChild size="sm" variant="outline">
            <a href={resumePath} download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Button asChild size="icon" variant="ghost">
            <a href={resumePath} download>
              <Download className="h-5 w-5" />
               <span className="sr-only">Download Resume</span>
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
