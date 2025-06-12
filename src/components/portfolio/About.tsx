
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    "Adobe Creative Suite",
    "Figma",
    "Sketch",
    "Principle",
    "InVision",
    "UI/UX Design",
    "Brand Identity",
    "Typography",
    "Color Theory",
    "Prototyping"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a passionate digital designer with over 5 years of experience creating 
                compelling visual experiences that bridge the gap between aesthetics and functionality.
              </p>
              <p>
                My work spans across brand identity, user interface design, and digital marketing 
                materials. I believe great design should not only look beautiful but also solve 
                real problems and create meaningful connections with users.
              </p>
              <p>
                When I'm not designing, you can find me exploring new design trends, 
                experimenting with emerging technologies, or sketching ideas in my notebook.
              </p>
            </div>
          </div>
          
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold mb-6">Skills & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm py-2 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Experience</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium">Senior Digital Designer</h5>
                    <p className="text-muted-foreground">Creative Agency • 2021 - Present</p>
                  </div>
                  <div>
                    <h5 className="font-medium">UI/UX Designer</h5>
                    <p className="text-muted-foreground">Tech Startup • 2019 - 2021</p>
                  </div>
                  <div>
                    <h5 className="font-medium">Graphic Designer</h5>
                    <p className="text-muted-foreground">Freelance • 2018 - 2019</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
