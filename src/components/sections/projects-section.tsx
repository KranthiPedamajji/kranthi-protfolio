
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { portfolioData } from "@/lib/portfolio-data";

const { projects: projectsData } = portfolioData;

export default function ProjectsSection() {
  const { ref } = useSectionInView("projects", 0.1);

  return (
    <section ref={ref} id="projects" className="py-20 md:py-32 bg-card section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            {projectsData.title}
          </h2>
          <p className="text-lg text-foreground/70 mt-2">
            {projectsData.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.items.map((project, index) => (
            <Card key={index} className="overflow-hidden group h-full flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="h-auto min-h-[96px]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-sm text-foreground/60 mb-4">
                    <b>Technologies:</b> {project.technologies}
                  </p>
                  <div className="flex-grow"></div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button variant="secondary" size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
