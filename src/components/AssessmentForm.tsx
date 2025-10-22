import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AssessmentFormProps {
  onSubmit: (data: AssessmentData) => void;
}

export interface AssessmentData {
  name: string;
  education: string;
  skills: string;
  interests: string;
  goals: string;
}

export const AssessmentForm = ({ onSubmit }: AssessmentFormProps) => {
  const [formData, setFormData] = useState<AssessmentData>({
    name: "",
    education: "",
    skills: "",
    interests: "",
    goals: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.skills || !formData.interests) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least your name, skills, and interests.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (field: keyof AssessmentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 px-4 md:px-6 min-h-screen flex items-center">
      <div className="container max-w-3xl">
        <Card className="border-2 shadow-2xl">
          <CardHeader className="space-y-2 text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl">
              Tell Us About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Yourself</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Share your background, skills, and aspirations to get personalized career guidance
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education Level</Label>
                <Input 
                  id="education"
                  placeholder="e.g., High School, Bachelor's in Computer Science, etc."
                  value={formData.education}
                  onChange={(e) => handleChange("education", e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Your Skills *</Label>
                <Textarea 
                  id="skills"
                  placeholder="List your skills, technical abilities, soft skills, etc. (e.g., Python, public speaking, problem-solving)"
                  value={formData.skills}
                  onChange={(e) => handleChange("skills", e.target.value)}
                  className="min-h-24 resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Interests & Passions *</Label>
                <Textarea 
                  id="interests"
                  placeholder="What are you passionate about? What topics excite you? (e.g., technology, healthcare, creative arts)"
                  value={formData.interests}
                  onChange={(e) => handleChange("interests", e.target.value)}
                  className="min-h-24 resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Career Goals</Label>
                <Textarea 
                  id="goals"
                  placeholder="What do you hope to achieve in your career? Any specific aspirations or dream jobs?"
                  value={formData.goals}
                  onChange={(e) => handleChange("goals", e.target.value)}
                  className="min-h-24 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full text-lg py-6 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Your Profile...
                  </>
                ) : (
                  <>
                    Get Your Career Guidance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
