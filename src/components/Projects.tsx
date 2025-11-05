import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, product management and payment integration",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    codeUrl: "#",
    demoUrl: "#"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Modern analytics platform with AI-driven insights and interactive data visualizations",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    codeUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Real-Time Collaboration Tool",
    description: "Real-time collaborative workspace with live editing capabilities for teams",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    codeUrl: "#",
    demoUrl: "#"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Some of my recent work showcasing different aspects of software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-primary/30 text-primary text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary">
                  <Code className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
