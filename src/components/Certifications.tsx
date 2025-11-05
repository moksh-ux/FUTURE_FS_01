import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "CSS for Programmers",
    issuer: "LinkedIn",
    icon: "🎓"
  },
  {
    title: "Project Management Foundations: Integration",
    issuer: "LinkedIn",
    icon: "📊"
  },
  {
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE",
    icon: "🔒"
  },
  {
    title: "Goldman Sachs - Operations Job Simulation",
    issuer: "Forage",
    icon: "💼"
  }
];

const achievements = [
  "Participated in a Web Development Competition showcasing responsive and dynamic web designs",
  "Represented school in Model United Nations (MUN), enhancing communication, leadership, and diplomacy skills"
];

export const Certifications = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <Award className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Achievements & <span className="text-primary">Activities</span>
          </h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground flex-1">{achievement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
