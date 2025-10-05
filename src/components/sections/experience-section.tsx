import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led development of core features for a major SaaS platform, mentored junior developers, and improved system performance by 30%.",
  },
  {
    role: "Mid-Level Software Developer",
    company: "Innovate Co.",
    period: "2018 - 2020",
    description: "Developed and maintained client-side applications using React and Redux. Collaborated with designers to create responsive and accessible UIs.",
  },
  {
    role: "Junior Developer",
    company: "Digital Starters",
    period: "2016 - 2018",
    description: "Assisted in building and testing web applications. Gained foundational experience in full-stack development and agile methodologies.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Work Experience</h2>
          <p className="text-lg text-foreground/70 mt-2">My professional journey.</p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          
          {experienceData.map((item, index) => (
            <div key={index} className="mb-12 flex justify-center items-center w-full">
              <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="w-1/2 px-4 group">
                  <Card className={`relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background ${index % 2 === 0 ? '-right-2 translate-x-1/2' : '-left-2 -translate-x-1/2'}`}></div>
                    <CardHeader>
                      <CardTitle className="text-xl">{item.role}</CardTitle>
                      <CardDescription>{item.company} &bull; {item.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
