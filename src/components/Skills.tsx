import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Programming Languages": ["HTML", "CSS", "JavaScript", "Python", "SQL"],
  "Web Technologies": ["React.js", "Node.js", "Express.js", "REST APIs"],
  "Database": ["MongoDB", "MySQL"],
  "Tools": ["Git", "GitHub", "VS Code", "Postman"],
  "Other Skills": ["Cybersecurity Awareness", "Information Security", "Project Planning", "Leadership", "Problem-Solving"]
};

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <h3 className="text-lg font-semibold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
