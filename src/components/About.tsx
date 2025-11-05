import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, MapPin, Phone } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dedicated to continuous learning and applying technical knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed">
              Motivated and detail-oriented B.Tech CSE student passionate about cybersecurity and information protection. 
              Currently gaining hands-on experience in full-stack web development, with a strong interest in transitioning 
              towards cybersecurity analysis and risk management. Dedicated to continuous learning and applying technical 
              knowledge to build secure, efficient, and user-focused digital solutions.
            </p>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Education</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Lovely Professional University (LPU)</p>
                      <p>B.Tech, Computer Engineering</p>
                      <p className="text-xs">Jul 2025 – Jun 2029</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Delhi Public School, India</p>
                      <p className="text-xs">Apr 2014 – May 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Experience</h4>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">Full Stack Web Developer Intern</p>
                    <p>Future Interns | Remote</p>
                    <p className="text-xs mb-2">Nov 2025 – Present</p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Developing responsive web applications</li>
                      <li>Collaborating on API integration and UI/UX</li>
                      <li>Ensuring optimized performance and security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Roorkee, Uttarakhand</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+91 9119069025</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
