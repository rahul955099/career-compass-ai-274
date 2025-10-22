import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AssessmentForm, type AssessmentData } from "@/components/AssessmentForm";
import { ResultsSection } from "@/components/ResultsSection";

const Index = () => {
  const [currentView, setCurrentView] = useState<"landing" | "assessment" | "results">("landing");
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);

  const handleGetStarted = () => {
    setCurrentView("assessment");
  };

  const handleAssessmentSubmit = (data: AssessmentData) => {
    setAssessmentData(data);
    setCurrentView("results");
  };

  const handleReset = () => {
    setCurrentView("landing");
    setAssessmentData(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {currentView === "landing" && (
        <>
          <HeroSection onGetStarted={handleGetStarted} />
          <FeaturesSection />
        </>
      )}
      
      {currentView === "assessment" && (
        <AssessmentForm onSubmit={handleAssessmentSubmit} />
      )}
      
      {currentView === "results" && assessmentData && (
        <ResultsSection assessmentData={assessmentData} onReset={handleReset} />
      )}
    </div>
  );
};

export default Index;
