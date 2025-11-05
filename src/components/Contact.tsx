import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "mokshtyagi412@gmail.com",
    href: "mailto:mokshtyagi412@gmail.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@mokshtyagi",
    href: "https://github.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "moksh-tyagi",
    href: "https://linkedin.com/in/moksh-tyagi"
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@mokshtyagi",
    href: "https://twitter.com"
  }
];

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
          </p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Let's <span className="text-primary">Connect</span>
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Feel free to reach out through any of these channels
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group flex items-center gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {link.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{link.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </Card>

        <footer className="text-center text-sm text-muted-foreground">
          <p>© 2024 Portfolio. Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
};
