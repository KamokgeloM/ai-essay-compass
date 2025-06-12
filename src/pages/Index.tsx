
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BookOpen, Brain, Users } from 'lucide-react';
import StepGuide from '@/components/StepGuide';
import QuizSection from '@/components/QuizSection';
import BestPractices from '@/components/BestPractices';
import ProgressTracker from '@/components/ProgressTracker';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [overallProgress, setOverallProgress] = useState(0);

  const steps = [
    {
      title: "Understand AI Background & Context",
      description: "Learn what AI and machine learning are, and understand their role in academic writing",
      icon: Brain,
      color: "bg-blue-500"
    },
    {
      title: "Actively Read Source Materials", 
      description: "Develop critical reading skills and engage deeply with your research sources",
      icon: BookOpen,
      color: "bg-green-500"
    },
    {
      title: "Use AI to Clarify Difficult Texts",
      description: "Learn how to use AI as a comprehension tool while maintaining critical thinking",
      icon: Brain,
      color: "bg-purple-500"
    },
    {
      title: "Brainstorm Essay Layouts with AI",
      description: "Collaborate with AI to structure your ideas while keeping your voice central",
      icon: Users,
      color: "bg-orange-500"
    },
    {
      title: "Write First Draft Independently",
      description: "Create your original work using your own knowledge and critical thinking",
      icon: BookOpen,
      color: "bg-teal-500"
    },
    {
      title: "Seek AI Feedback for Refinement",
      description: "Use AI as a revision tool to improve clarity and coherence",
      icon: CheckCircle,
      color: "bg-pink-500"
    },
    {
      title: "Proofread & Check for Plagiarism",
      description: "Ensure originality and maintain your personal academic voice",
      icon: CheckCircle,
      color: "bg-indigo-500"
    }
  ];

  useEffect(() => {
    const progress = (completedSteps.length / steps.length) * 100;
    setOverallProgress(progress);
  }, [completedSteps, steps.length]);

  const handleStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                AI Essay Compass
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Navigate ethical AI use in academic writing
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-sm">
                Progress: {Math.round(overallProgress)}%
              </Badge>
              <ProgressTracker 
                completedSteps={completedSteps} 
                totalSteps={steps.length}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction Section */}
        <div className="mb-12 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Master Ethical AI Writing in 7 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This interactive guide helps you learn to use AI as a powerful learning tool 
              while maintaining academic integrity and developing your unique voice as a writer.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Learn Responsibly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Write Authentically</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Maintain Integrity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Your Learning Journey</span>
              <Badge variant="secondary">{completedSteps.length}/{steps.length} Complete</Badge>
            </CardTitle>
            <CardDescription>
              Track your progress through the 7-step ethical AI writing process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={overallProgress} className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-card cursor-pointer ${
                    completedSteps.includes(index) ? 'ring-2 ring-green-500' : ''
                  } ${currentStep === index ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-gray-600">{step.description}</p>
                      {completedSteps.includes(index) && (
                        <Badge variant="outline" className="mt-2 text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step Guide */}
          <div className="lg:col-span-2">
            <StepGuide 
              currentStep={currentStep}
              steps={steps}
              onStepComplete={handleStepComplete}
              completedSteps={completedSteps}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quiz Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Test Your Knowledge</CardTitle>
                <CardDescription>
                  Take interactive quizzes to reinforce your learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={handleStartQuiz}
                  className="w-full"
                  variant={showQuiz ? "outline" : "default"}
                >
                  {showQuiz ? "Hide Quiz" : "Start Quiz"}
                </Button>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <BestPractices />

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    Always cite AI assistance in your work
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    Use AI to enhance, not replace, your thinking
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">
                    Maintain your unique voice throughout
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quiz Modal */}
        {showQuiz && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <QuizSection onClose={() => setShowQuiz(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
