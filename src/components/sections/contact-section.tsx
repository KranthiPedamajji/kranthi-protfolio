
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";

export default function ContactSection() {
  const { ref } = useSectionInView("contact", 0.5);

  return (
    <section ref={ref} id="contact" className="py-20 md:py-32 section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold font-headline">
                Get In Touch
              </CardTitle>
              <CardDescription className="text-lg text-foreground/70 mt-2">
                Have a project in mind or just want to say hi? Reach out via email, phone, or connect with me on social media.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="outline" asChild size="lg">
                        <a href="mailto:KranthiPedamajji3@gmail.com">
                            <Mail className="mr-2 h-4 w-4" /> Email Me
                        </a>
                    </Button>
                     <Button variant="outline" asChild size="lg">
                        <a href="tel:+18565267280">
                            <Phone className="mr-2 h-4 w-4" /> Call Me
                        </a>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                        <a href="https://www.linkedin.com/in/kranthi-pedamajji-34a10719b/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </a>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                        <a href="https://github.com/KranthiPedamajji" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                    </Button>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
