import { Zap, Shield, Sparkles, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Comfort",
    description: "Advanced algorithms adapt to your unique running style in real-time",
  },
  {
    icon: Shield,
    title: "Quantum Protection",
    description: "Military-grade materials engineered for maximum durability",
  },
  {
    icon: Sparkles,
    title: "Smart Energy Return",
    description: "Proprietary foam technology returns 95% of energy with each step",
  },
  {
    icon: Rocket,
    title: "Zero Gravity Feel",
    description: "Ultralight construction that makes you feel like you're flying",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Engineered for <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every detail crafted with cutting-edge AI and human expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="glass p-8 rounded-2xl hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
