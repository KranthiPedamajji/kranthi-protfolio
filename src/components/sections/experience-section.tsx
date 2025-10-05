
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";

const { experience: experienceData } = portfolioData;

export default function ExperienceSection() {
  const { ref } = useSectionInView("experience", 0.2);

  return (
    <section ref={ref} id="experience" className="py-20 md:py-32 bg-card section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{experienceData.title}</h2>
          <p className="text-lg text-foreground/70 mt-2">{experienceData.subtitle}</p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          
          <div className="md:space-y-12 space-y-8">
            {experienceData.jobs.map((item, index) => (
              <div key={index} className="relative">
                <div className="md:absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" style={{ left: '50%', transform: 'translateX(-50%) translateY(-50%)' }}></div>
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12"></div>
                  <div className="w-full md:w-7/12">
                    <Card className={`group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.role}</CardTitle>
                        <CardDescription>{item.company} &bull; {item.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
