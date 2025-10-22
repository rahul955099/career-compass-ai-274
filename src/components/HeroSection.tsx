import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Career Guidance</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  CareerCoach AI
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
                Your Personal Career & Course Guide
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Discover your ideal career path, learn what courses to take next, and explore job roles 
                that match your unique skills and interests—all powered by advanced AI.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:shadow-glow transition-all duration-300"
                onClick={onGetStarted}
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                See How It Works
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Career Paths</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Courses Mapped</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">100K+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img 
              src={heroImage} 
              alt="Students learning together" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
