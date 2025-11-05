import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Outstanding developer who consistently delivers high-quality code. Their problem-solving skills and attention to detail are impressive.",
    author: "Sarah Johnson",
    role: "CTO, StartUp Inc",
    avatar: "👩‍💼"
  },
  {
    quote: "A pleasure to work with! They transformed our vision into reality with elegant solutions and great communication throughout the project.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCo",
    avatar: "👨‍💻"
  },
  {
    quote: "Incredible technical expertise combined with business acumen. Their solutions from end to end were extremely professional.",
    author: "Emily Rodriguez",
    role: "Founder, TechVision",
    avatar: "👩‍🚀"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-muted-foreground">
            What people say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
