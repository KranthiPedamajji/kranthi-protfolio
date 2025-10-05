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
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {PlaceHolderImages.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group h-full flex flex-col">
                    <CardContent className="p-0 relative">
                      <Image
                        src={project.imageUrl}
                        alt={`Project ${index + 1}`}
                        width={600}
                        height={400}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Project {index + 1}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <div className="flex-grow"></div>
                    <div className="p-4 pt-0 flex gap-2">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Button>
                      <Button variant="secondary" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
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
