
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, ArrowLeft, Lightbulb, AlertTriangle } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface StepGuideProps {
  currentStep: number;
  steps: Step[];
  onStepComplete: (stepIndex: number) => void;
  completedSteps: number[];
}

const StepGuide = ({ currentStep, steps, onStepComplete, completedSteps }: StepGuideProps) => {
  const [showActivity, setShowActivity] = useState(false);

  const stepContent = [
    {
      overview: "Understanding AI and machine learning is crucial for ethical academic use. AI refers to computer systems that can perform tasks typically requiring human intelligence, while machine learning enables systems to learn from data.",
      keyPoints: [
        "AI can assist with research and writing but shouldn't replace critical thinking",
        "Machine learning algorithms can have biases that affect their outputs",
        "Academic integrity requires understanding how AI works",
        "AI should complement, not substitute, your learning process"
      ],
      activity: {
        type: "reflection",
        title: "AI Awareness Check",
        prompt: "Before using AI in your academic work, reflect on these questions:",
        questions: [
          "What are the potential benefits of using AI in my writing process?",
          "What risks might arise from uncritical AI use?",
          "How can I ensure AI enhances rather than replaces my learning?",
          "What ethical considerations should guide my AI use?"
        ]
      },
      tips: [
        "Research your institution's AI policy before using any tools",
        "Understand that AI outputs may contain errors or biases",
        "View AI as a collaborative tool, not a replacement for thinking"
      ]
    },
    {
      overview: "Active reading involves engaging critically with texts, taking notes, asking questions, and making connections. This foundational skill ensures you understand source materials before seeking AI assistance.",
      keyPoints: [
        "Read sources multiple times with different purposes",
        "Take detailed notes and highlight key arguments",
        "Question the author's assumptions and evidence",
        "Connect ideas across different sources"
      ],
      activity: {
        type: "practice",
        title: "Active Reading Checklist",
        prompt: "Use this checklist when reading academic sources:",
        questions: [
          "What is the main argument or thesis?",
          "What evidence supports the author's claims?",
          "What are the limitations or counterarguments?",
          "How does this connect to other sources I've read?",
          "What questions does this raise for my research?"
        ]
      },
      tips: [
        "Read without AI assistance first to form your own understanding",
        "Create mind maps to visualize connections between ideas",
        "Discuss readings with peers before consulting AI"
      ]
    },
    {
      overview: "When texts are challenging, AI can help clarify complex concepts, unfamiliar terminology, or dense academic language. The key is using AI to understand, not to bypass the thinking process.",
      keyPoints: [
        "Use AI to explain difficult concepts after attempting to understand them yourself",
        "Ask for clarification of specific terms or passages, not entire arguments",
        "Verify AI explanations against authoritative sources",
        "Maintain your critical perspective on the material"
      ],
      activity: {
        type: "practice",
        title: "Effective Clarification Prompts",
        prompt: "Practice creating good prompts for text clarification:",
        questions: [
          "\"Can you explain the concept of [specific term] in simpler language?\"",
          "\"What does the author mean by [specific phrase] in this context?\"",
          "\"Can you help me understand the relationship between [concept A] and [concept B]?\"",
          "\"What are the key steps in [process/methodology] described here?\""
        ]
      },
      tips: [
        "Be specific about what you need clarified",
        "Cross-reference AI explanations with your course materials",
        "Don't ask AI to summarize entire articles for you"
      ]
    },
    {
      overview: "AI can help you organize your ideas and explore different structural approaches to your essay. This collaborative brainstorming should build on your initial ideas and research, not replace them.",
      keyPoints: [
        "Start with your own ideas and research before involving AI",
        "Use AI to explore different organizational strategies",
        "Consider multiple structural approaches suggested by AI",
        "Adapt AI suggestions to fit your specific argument and evidence"
      ],
      activity: {
        type: "practice",
        title: "Structure Brainstorming Session",
        prompt: "Try these prompts for essay structure development:",
        questions: [
          "\"I'm writing about [topic] and my main argument is [thesis]. What are some effective ways to organize this essay?\"",
          "\"Can you suggest different approaches for structuring an argument about [topic]?\"",
          "\"How might I sequence these main points: [list your points]?\"",
          "\"What are the pros and cons of [specific organizational approach] for my essay?\""
        ]
      },
      tips: [
        "Always start with your own outline before consulting AI",
        "Use AI to refine, not create, your organizational strategy",
        "Ensure the structure serves your argument, not AI's suggestions"
      ]
    },
    {
      overview: "Your first draft should be written independently, drawing on your research, critical thinking, and personal insights. This ensures the work authentically represents your understanding and voice.",
      keyPoints: [
        "Write without AI assistance to develop your authentic voice",
        "Use your notes and outlines as guides, not AI-generated content",
        "Focus on developing your arguments with your own analysis",
        "Accept that first drafts are imperfect – that's normal and valuable"
      ],
      activity: {
        type: "reflection",
        title: "Independent Writing Commitment",
        prompt: "Before writing your first draft, commit to these practices:",
        questions: [
          "I will write based on my own understanding of the sources",
          "I will develop my arguments using my own critical thinking",
          "I will use my personal voice and writing style",
          "I will save AI consultation for the revision stage",
          "I will cite all sources using proper academic conventions"
        ]
      },
      tips: [
        "Turn off AI tools while writing your first draft",
        "Set aside dedicated time for uninterrupted writing",
        "Trust your preparation and knowledge from previous steps"
      ]
    },
    {
      overview: "After completing your independent first draft, AI can provide valuable feedback on clarity, organization, and argument development. Use this feedback to refine your work while maintaining your voice.",
      keyPoints: [
        "Only seek AI feedback after completing a full first draft",
        "Ask for specific types of feedback (clarity, flow, argument strength)",
        "Critically evaluate AI suggestions before implementing them",
        "Ensure revisions enhance rather than replace your ideas"
      ],
      activity: {
        type: "practice",
        title: "Effective Feedback Prompts",
        prompt: "Use these prompts to get constructive AI feedback:",
        questions: [
          "\"Please review this paragraph for clarity and suggest improvements while maintaining my writing style.\"",
          "\"Does my argument flow logically from this evidence? How could I strengthen the connection?\"",
          "\"Are there any gaps in my reasoning that I should address?\"",
          "\"How can I make my conclusion more compelling while staying true to my argument?\""
        ]
      },
      tips: [
        "Request feedback on specific aspects, not general rewriting",
        "Compare AI suggestions with feedback from human peers or instructors",
        "Maintain ownership of your argument and voice"
      ]
    },
    {
      overview: "The final step ensures your work maintains academic integrity, is free from errors, and authentically represents your voice. This includes checking for unintentional plagiarism and ensuring proper attribution.",
      keyPoints: [
        "Proofread carefully for grammar, spelling, and formatting errors",
        "Check all citations and references for accuracy",
        "Verify that your personal voice comes through clearly",
        "Use plagiarism detection tools to ensure originality"
      ],
      activity: {
        type: "checklist",
        title: "Final Review Checklist",
        prompt: "Complete this checklist before submitting:",
        questions: [
          "All sources are properly cited and referenced",
          "The work reflects my own understanding and analysis",
          "AI assistance (if any) is properly disclosed",
          "The essay maintains my personal writing voice",
          "Grammar, spelling, and formatting are correct",
          "The argument is coherent and well-supported"
        ]
      },
      tips: [
        "Read your essay aloud to catch errors and awkward phrasing",
        "Have a peer review your work for clarity and voice",
        "Document any AI assistance according to your institution's guidelines"
      ]
    }
  ];

  const current = stepContent[currentStep];
  const isCompleted = completedSteps.includes(currentStep);

  const handleMarkComplete = () => {
    onStepComplete(currentStep);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      // Auto-scroll to top when changing steps
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      // Auto-scroll to top when changing steps
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <Card className="animate-slide-up">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${steps[currentStep].color} rounded-full flex items-center justify-center`}>
                {React.createElement(steps[currentStep].icon, { className: "w-6 h-6 text-white" })}
              </div>
              <div>
                <CardTitle className="text-xl">
                  Step {currentStep + 1}: {steps[currentStep].title}
                </CardTitle>
                <CardDescription className="text-base">
                  {steps[currentStep].description}
                </CardDescription>
              </div>
            </div>
            {isCompleted && (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <CheckCircle className="w-4 h-4 mr-1" />
                Completed
              </Badge>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* Step Content */}
      <Card className="animate-slide-up">
        <CardHeader>
          <CardTitle className="text-lg">Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-6">
            {current.overview}
          </p>
          
          <h4 className="font-semibold text-gray-900 mb-3">Key Points:</h4>
          <ul className="space-y-2 mb-6">
            {current.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <h4 className="font-semibold text-gray-900">Pro Tips:</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mb-6">
            {current.tips.map((tip, index) => (
              <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Activity */}
      <Card className="animate-slide-up">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Interactive Activity</CardTitle>
            <Button 
              variant="outline" 
              onClick={() => setShowActivity(!showActivity)}
            >
              {showActivity ? "Hide Activity" : "Show Activity"}
            </Button>
          </div>
        </CardHeader>
        {showActivity && (
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">{current.activity.title}</h4>
              <p className="text-blue-800 mb-3">{current.activity.prompt}</p>
            </div>
            
            <div className="space-y-3">
              {current.activity.questions.map((question, index) => (
                <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-gray-700">
                    <span className="font-medium">{index + 1}.</span> {question}
                  </p>
                </div>
              ))}
            </div>
            
            {current.activity.type === "checklist" && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2 text-green-800">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium">Complete each item before submitting your work</span>
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Navigation and Completion */}
      <Card className="animate-slide-up">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Step</span>
            </Button>

            <div className="flex items-center space-x-3">
              {!isCompleted && (
                <Button 
                  onClick={handleMarkComplete}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Mark Complete</span>
                </Button>
              )}
              
              <Button 
                variant="outline" 
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="flex items-center space-x-2"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepGuide;
