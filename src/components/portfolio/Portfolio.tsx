
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Upload } from 'lucide-react';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Complete brand identity including logo, typography, and color palette for a tech startup.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      tags: ["Branding", "Logo Design", "Identity"],
      link: "#"
    },
    {
      id: 2,
      title: "Mobile App UI/UX",
      description: "User interface and experience design for a productivity mobile application.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      tags: ["UI/UX", "Mobile", "App Design"],
      link: "#"
    },
    {
      id: 3,
      title: "Website Redesign",
      description: "Complete website redesign focusing on user experience and modern aesthetics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      tags: ["Web Design", "UX", "Responsive"],
      link: "#"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Branding', 'UI/UX', 'Web Design', 'Mobile'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.includes(selectedCategory))
      );

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for digital design and user experience.
          </p>
        </div>

        {/* Upload Section */}
        <div className="mb-12 text-center">
          <Card className="max-w-md mx-auto p-6 border-dashed border-2 border-primary/50 hover:border-primary transition-colors">
            <CardContent className="p-0">
              <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload New Work</h3>
              <p className="text-muted-foreground mb-4">Add new projects to your portfolio</p>
              <Button className="w-full">
                Choose Files
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group">
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
