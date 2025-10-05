
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";

export default function AboutSection() {
  const { ref } = useSectionInView("about", 0.5);

  return (
    <section ref={ref} id="about" className="py-20 md:py-32 bg-background/50 section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 border-0 shadow-none">
            <CardContent className="p-8 text-center text-lg md:text-xl text-foreground/80 leading-relaxed">
              <User className="h-12 w-12 mx-auto mb-6 text-primary" />
              <p>
                Versatile Full Stack & Data Engineer with 2+ years of experience building scalable web applications and end-to-end data solutions. Proficient in Python, JavaScript, .NET, and SQL for both application development and data workflows. Skilled in data analysis, machine learning, and data engineering with hands-on experience in ETL pipelines, API integration, and cloud-based data warehouses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
