
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
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-foreground to-muted-foreground mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 border-0 shadow-none">
            <CardContent className="p-8 text-lg md:text-xl text-foreground/80 leading-relaxed space-y-4 text-left">
              <User className="h-12 w-12 mx-auto mb-6 text-primary" />
              <p>
                I’m Kranthi Pedamajji, a Python Full Stack Developer and Data Engineer with over 3 years of experience building scalable, cloud-based applications and data solutions. I specialize in Python (FastAPI), C# (.NET Core), Vue.js, React, and SQL/NoSQL databases like PostgreSQL and MongoDB.
              </p>
              <p>
                At Quanti LLC, I work on backend systems, cloud deployments on AWS, and integrations with Google AdSense and Meta Ads APIs. My background also includes data pipelines, CI/CD automation, and visual analytics using Tableau and Power BI.
              </p>
              <p>
                With a Master’s in Data Science from Rowan University, I bring hands-on experience in machine learning, NLP, and big data technologies. I’m passionate about designing clean, efficient, and intelligent systems that bridge data, cloud, and AI to deliver real-world impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
