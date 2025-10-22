import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, BookOpen, Briefcase, Download, RefreshCw } from "lucide-react";
import type { AssessmentData } from "./AssessmentForm";

interface ResultsSectionProps {
  assessmentData: AssessmentData;
  onReset: () => void;
}

// Mock data - will be replaced with AI-generated content
const generateMockResults = (data: AssessmentData) => {
  return {
    careers: [
      {
        title: "Software Engineer",
        match: 95,
        description: "Design, develop, and maintain software applications. Perfect for those with strong programming skills and problem-solving abilities.",
        requirements: ["Programming", "Problem Solving", "Team Collaboration"]
      },
      {
        title: "Data Scientist",
        match: 88,
        description: "Analyze complex data to help organizations make better decisions. Great for analytical minds who love working with numbers.",
        requirements: ["Statistics", "Python/R", "Machine Learning"]
      },
      {
        title: "UX Designer",
        match: 82,
        description: "Create intuitive and engaging user experiences for digital products. Ideal for creative problem-solvers.",
        requirements: ["Design Tools", "User Research", "Prototyping"]
      }
    ],
    courses: [
      {
        title: "Advanced Python Programming",
        platform: "Coursera",
        duration: "8 weeks",
        level: "Intermediate"
      },
      {
        title: "Data Structures & Algorithms",
        platform: "edX",
        duration: "12 weeks",
        level: "Intermediate"
      },
      {
        title: "Machine Learning Fundamentals",
        platform: "Udacity",
        duration: "4 months",
        level: "Advanced"
      }
    ],
    jobs: [
      {
        title: "Junior Software Developer",
        type: "Full-time",
        salary: "$60K - $80K",
        skills: ["JavaScript", "React", "Node.js"]
      },
      {
        title: "Data Analyst",
        type: "Full-time",
        salary: "$55K - $75K",
        skills: ["Python", "SQL", "Data Visualization"]
      },
      {
        title: "Frontend Developer",
        type: "Full-time / Remote",
        salary: "$65K - $85K",
        skills: ["HTML/CSS", "React", "TypeScript"]
      }
    ]
  };
};

export const ResultsSection = ({ assessmentData, onReset }: ResultsSectionProps) => {
  const results = generateMockResults(assessmentData);

  return (
    <section className="py-24 px-4 md:px-6 min-h-screen">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your Personalized <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Career Guide</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Based on your profile, here's what we recommend for you, {assessmentData.name}
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <Button variant="outline" onClick={onReset}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Take Assessment Again
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>

        {/* Career Paths */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold">Recommended Career Paths</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.careers.map((career, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{career.title}</CardTitle>
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                      {career.match}% Match
                    </Badge>
                  </div>
                  <CardDescription>{career.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Key Requirements:</p>
                    <div className="flex flex-wrap gap-2">
                      {career.requirements.map((req, idx) => (
                        <Badge key={idx} variant="outline">{req}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold">Recommended Courses</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.courses.map((course, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Badge variant="secondary">{course.platform}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Level:</span>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Jobs */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold">Job Roles You Qualify For</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.jobs.map((job, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge>{job.type}</Badge>
                    </div>
                    <div className="text-primary font-semibold text-base">{job.salary}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
