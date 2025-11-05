import { Card } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Database, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building modern, responsive web applications with the latest technologies and best practices"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating native and cross-platform mobile apps with native performance and seamless UX"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Developing and deploying scalable cloud infrastructure on AWS, Azure, and GCP"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Designing robust APIs and complex systems that scale with your business needs"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive experiences with attention to detail and accessibility"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Streamlining application speed, reducing load times, and optimizing resource usage"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive software development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
