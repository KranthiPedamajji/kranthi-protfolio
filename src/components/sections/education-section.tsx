
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { portfolioData } from "@/lib/portfolio-data";

const { education: educationData } = portfolioData;

export default function EducationSection() {
  const { ref } = useSectionInView("education", 0.2);

  return (
    <section ref={ref} id="education" className="py-20 md:py-32 bg-card section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{educationData.title}</h2>
          <p className="text-lg text-foreground/70 mt-2">{educationData.subtitle}</p>
        </div>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            {educationData.degrees.map((item, index) => (
              <Card key={index} className="group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{item.degree}</CardTitle>
                      <CardDescription>{item.university}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-16">
                  <p className="text-sm text-foreground/80">{item.period}</p>
                  <p className="text-sm text-foreground/70">{item.location}</p>
                  <p className="text-sm text-foreground/70 mt-2">GPA: {item.gpa}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
