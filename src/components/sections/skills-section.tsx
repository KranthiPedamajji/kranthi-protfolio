
"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { portfolioData } from "@/lib/portfolio-data";

const { skills: skillsData } = portfolioData;

const AnimatedSkillBar = ({
  level,
  isVisible,
}: {
  level: number;
  isVisible: boolean;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(level), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  return <Progress value={progress} className="w-full h-2 progress-gradient" />;
};

export default function SkillsSection() {
  const { ref, inView } = useSectionInView("skills", 0.1);
  const isVisible = inView;

  return (
    <section ref={ref} id="skills" className="py-20 md:py-32 bg-background section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            {skillsData.title}
          </h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-foreground to-muted-foreground mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData.categories).map(([category, skills]) => (
            <Card
              key={category}
              className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground text-transparent bg-clip-text">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/80">{skill.level}%</span>
                    </div>
                    <AnimatedSkillBar level={skill.level} isVisible={isVisible} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
