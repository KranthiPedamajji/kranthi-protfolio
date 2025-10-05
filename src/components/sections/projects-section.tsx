
"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { portfolioData } from "@/lib/portfolio-data";

const { projects: projectsData } = portfolioData;

export default function ProjectsSection() {
  const { ref } = useSectionInView("projects", 0.1);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const updateCarouselClasses = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
  
    const slides = carouselApi.slideNodes();
    const selectedIndex = carouselApi.selectedScrollSnap();
  
    slides.forEach((slide, index) => {
      if (index === selectedIndex) {
        slide.classList.add("is-active");
        slide.classList.remove("is-inactive");
      } else {
        slide.classList.remove("is-active");
        slide.classList.add("is-inactive");
      }
    });
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    
    const handleSelect = (carouselApi: CarouselApi) => {
      setCurrent(carouselApi.selectedScrollSnap());
      updateCarouselClasses(carouselApi);
    };

    api.on("select", handleSelect);
    api.on("reInit", handleSelect);
    
    // Initial setup
    handleSelect(api);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api, updateCarouselClasses]);

  return (
    <section ref={ref} id="projects" className="py-20 md:py-32 bg-background section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            {projectsData.title}
          </h2>
          <p className="text-lg text-foreground/70 mt-2">
            {projectsData.subtitle}
          </p>
        </div>
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-8">
            {projectsData.items.map((project, index) => (
              <CarouselItem key={index} className="carousel-item md:basis-1/2 lg:basis-1/3 pl-8">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden group h-full flex flex-col transition-all duration-500 ease-in-out">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="line-clamp-4 h-[96px]">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <div className="p-4 pt-0">
                      <p className="text-sm text-foreground/60">
                        <b>Technologies:</b> {project.technologies}
                      </p>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="p-4 pt-0 flex gap-2">
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
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-foreground -left-4 md:-left-12 transition-transform hover:scale-110" />
          <CarouselNext className="text-foreground -right-4 md:-right-12 transition-transform hover:scale-110" />
        </Carousel>
      </div>
    </section>
  );
}
