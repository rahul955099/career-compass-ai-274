import { Target, BookOpen, Briefcase, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Career Path Discovery",
    description: "Get personalized career recommendations based on your unique skills, interests, and goals.",
    gradient: "from-primary to-primary/80"
  },
  {
    icon: BookOpen,
    title: "Course Recommendations",
    description: "Discover the perfect courses and learning resources to develop skills for your dream career.",
    gradient: "from-accent to-accent/80"
  },
  {
    icon: Briefcase,
    title: "Job Role Matching",
    description: "Find job roles that align with your current qualifications and career aspirations.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description: "Leverage advanced AI to get smart, data-driven guidance for your career journey.",
    gradient: "from-accent to-primary"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CareerCoach AI?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to navigate your career journey with confidence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
