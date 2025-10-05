"use client";

import { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Cloud,
  Palette,
  Server,
  TerminalSquare,
  Component,
  BrainCircuit,
  GitGraph,
  ChevronDown,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skillsData = [
  { name: "Python", level: 95, icon: <Code className="w-6 h-6" /> },
  { name: "AWS", level: 85, icon: <Cloud className="w-6 h-6" /> },
  { name: "Snowflake", level: 80, icon: <Database className="w-6 h-6" /> },
  { name: "SQL & SQL Server", level: 90, icon: <Database className="w-6 h-6" /> },
  { name: "Machine Learning", level: 85, icon: <BrainCircuit className="w-6 h-6" /> },
  { name: "Data Visualization", level: 85, icon: <Palette className="w-6 h-6" /> },
  { name: "C# & .NET Core", level: 90, icon: <Code className="w-6 h-6" /> },
  { name: "Angular", level: 80, icon: <Component className="w-6 h-6" /> },
  { name: "Apache Cassandra", level: 75, icon: <Database className="w-6 h-6" /> },
  { name: "FHIR & HL7", level: 75, icon: <TerminalSquare className="w-6 h-6" /> },
  { name: "IoT", level: 70, icon: <Server className="w-6 h-6" /> },
  { name: "Git", level: 90, icon: <GitGraph className="w-6 h-6" /> },
];

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
      const timer = setTimeout(() => setProgress(level), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  return <Progress value={progress} className="w-full h-2" />;
};

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const displayedSkills = showAll ? skillsData : skillsData.slice(0, 6);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Technical Skills
          </h2>
          <p className="text-lg text-foreground/70 mt-2">
            A snapshot of my technical proficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSkills.map((skill) => (
            <Card
              key={skill.name}
              className="bg-card border border-border/50 hover:border-accent transition-colors"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">
                  {skill.name}
                </CardTitle>
                <div className="text-accent-foreground">{skill.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <AnimatedSkillBar level={skill.level} isVisible={isVisible} />
                  <span className="font-semibold text-lg">{skill.level}%</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {skillsData.length > 6 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="group"
            >
              {showAll ? "Show Less" : "Show More"}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
