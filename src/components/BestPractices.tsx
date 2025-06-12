
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';

const BestPractices = () => {
  const promptExamples = [
    {
      category: "Text Clarification",
      good: "Can you explain the concept of 'epistemic humility' in academic writing and how it relates to acknowledging limitations in research?",
      bad: "What does this whole paragraph mean?",
      explanation: "Be specific about what you need clarified rather than asking for general explanations."
    },
    {
      category: "Structure Brainstorming", 
      good: "I'm arguing that social media impacts teen mental health. I have evidence about sleep disruption, comparison culture, and cyberbullying. What are effective ways to organize these points?",
      bad: "Write an outline for my social media essay.",
      explanation: "Provide your own ideas and evidence first, then ask for organizational suggestions."
    },
    {
      category: "Feedback Seeking",
      good: "Please review this paragraph for clarity and logical flow. Does my transition from discussing the problem to proposing solutions work effectively?",
      bad: "Make this paragraph better.",
      explanation: "Ask for specific types of feedback rather than general improvement requests."
    },
    {
      category: "Research Assistance",
      good: "I'm researching renewable energy policy. Can you help me understand the key differences between feed-in tariffs and renewable portfolio standards?",
      bad: "Find sources about renewable energy for my paper.",
      explanation: "Use AI to understand concepts, not to replace your own research efforts."
    }
  ];

  const ethicalGuidelines = [
    {
      title: "Always Disclose AI Use",
      description: "Follow your institution's guidelines for acknowledging AI assistance in your work",
      icon: CheckCircle,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Maintain Your Voice",
      description: "Ensure your personal perspective and critical thinking remain central to your work",
      icon: MessageSquare,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Verify Information",
      description: "Cross-check AI outputs against authoritative sources and course materials",
      icon: AlertTriangle,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Use as Learning Tool",
      description: "Focus on understanding and learning rather than completing tasks quickly",
      icon: Lightbulb,
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Effective AI Prompting</span>
          </CardTitle>
          <CardDescription>
            Learn how to craft prompts that support ethical AI use
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {promptExamples.map((example, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {example.category}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Good Example:</span>
                    </div>
                    <p className="text-sm text-green-700 italic">"{example.good}"</p>
                  </div>
                  
                  <div className="p-3 bg-red-50 border border-red-200 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium text-red-800">Avoid:</span>
                    </div>
                    <p className="text-sm text-red-700 italic">"{example.bad}"</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Why:</strong> {example.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>Ethical Guidelines</span>
          </CardTitle>
          <CardDescription>
            Core principles for responsible AI use in academics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {ethicalGuidelines.map((guideline, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${guideline.color}`}>
                  <guideline.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{guideline.title}</h4>
                  <p className="text-sm text-gray-600">{guideline.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BestPractices;
