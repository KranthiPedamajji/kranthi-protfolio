import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Projects</h2>
          <p className="text-lg text-foreground/70 mt-2">
            A selection of my recent work.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {PlaceHolderImages.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden group h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="h-24 overflow-y-auto">{project.description}</CardDescription>
                    </CardHeader>
                    <div className="p-4 pt-0">
                      <p className="text-sm text-foreground/60"><b>Technologies:</b> {project.technologies}</p>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="p-4 pt-0 flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button variant="secondary" size="sm" asChild>
                           <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                           </a>
                        </Button>
                      )}
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-foreground" />
          <CarouselNext className="text-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
