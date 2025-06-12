
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X, RotateCcw } from 'lucide-react';

interface QuizSectionProps {
  onClose: () => void;
}

const QuizSection = ({ onClose }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What is the primary purpose of using AI in academic writing according to ethical guidelines?",
      options: [
        "To write essays for you automatically",
        "To replace your critical thinking process",
        "To enhance learning and support your own thinking",
        "To avoid doing research yourself"
      ],
      correct: 2,
      explanation: "AI should be used as a tool to enhance your learning and support your thinking process, not replace it. The goal is to maintain your authentic voice while using AI responsibly."
    },
    {
      question: "When should you write your first draft?",
      options: [
        "After getting AI to write an outline for you",
        "Independently, using your own research and critical thinking",
        "While actively consulting AI for each paragraph",
        "After AI has helped you plan every sentence"
      ],
      correct: 1,
      explanation: "Your first draft should be written independently to ensure it authentically represents your understanding and voice. AI assistance comes later in the revision process."
    },
    {
      question: "Which of these is an appropriate way to use AI for text clarification?",
      options: [
        "Ask AI to summarize entire research articles for you",
        "Have AI explain your assignment requirements",
        "Request clarification of specific difficult concepts or terms",
        "Get AI to interpret all your source materials"
      ],
      correct: 2,
      explanation: "AI should be used to clarify specific difficult concepts or terms after you've made your own attempt to understand them. This maintains your engagement with the material."
    },
    {
      question: "What should you do before seeking AI feedback on your writing?",
      options: [
        "Ask AI to write your introduction",
        "Complete a full first draft independently",
        "Have AI create your thesis statement",
        "Get AI to organize all your research"
      ],
      correct: 1,
      explanation: "You should complete a full first draft independently before seeking AI feedback. This ensures the work represents your own thinking and voice."
    },
    {
      question: "Which approach best describes ethical AI use in brainstorming essay structure?",
      options: [
        "Start with your own ideas, then use AI to explore organizational options",
        "Let AI create the entire structure based on your topic",
        "Use AI to generate all your main arguments",
        "Have AI determine your thesis statement"
      ],
      correct: 0,
      explanation: "Ethical AI use in brainstorming involves starting with your own ideas and research, then using AI to explore different structural approaches while maintaining ownership of your argument."
    },
    {
      question: "What is essential to include in your final academic work when AI has been used?",
      options: [
        "A disclaimer that AI wrote most of it",
        "Proper disclosure of AI assistance according to institutional guidelines",
        "A note that you didn't really need to do research",
        "An explanation of why you used AI instead of thinking"
      ],
      correct: 1,
      explanation: "You must properly disclose any AI assistance according to your institution's guidelines. This maintains academic integrity and transparency about your writing process."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleShowResults = () => {
    setShowResults(!showResults);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Knowledge Check Quiz</h2>
          <p className="text-gray-600">Test your understanding of ethical AI use in academic writing</p>
        </div>
        <Button variant="ghost" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      {!quizCompleted ? (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <Badge variant="outline">
                {Object.keys(selectedAnswers).length}/{questions.length} Answered
              </Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`quiz-option ${
                      selectedAnswers[currentQuestion] === index ? 'selected' : ''
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        selectedAnswers[currentQuestion] === index 
                          ? 'border-primary bg-primary' 
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-full h-full rounded-full bg-white m-0.5"></div>
                        )}
                      </div>
                      <span className="text-gray-700">{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Results Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Quiz Results</CardTitle>
              <CardDescription>
                You've completed the ethical AI writing quiz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {score}/{questions.length}
                </div>
                <div className="text-2xl font-semibold text-gray-700 mb-2">
                  {percentage}%
                </div>
                <Badge 
                  variant={percentage >= 80 ? "default" : percentage >= 60 ? "secondary" : "destructive"}
                  className="text-lg px-4 py-1"
                >
                  {percentage >= 80 ? "Excellent!" : percentage >= 60 ? "Good Work!" : "Keep Learning!"}
                </Badge>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button onClick={handleShowResults} variant="outline">
                  {showResults ? "Hide" : "Review"} Answers
                </Button>
                <Button onClick={handleRestart} className="flex items-center space-x-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Results */}
          {showResults && (
            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                return (
                  <Card key={index} className={isCorrect ? "border-green-200" : "border-red-200"}>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isCorrect ? "bg-green-500" : "bg-red-500"
                        }`}>
                          {isCorrect ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <X className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Question {index + 1}: {question.question}
                          </h4>
                          
                          <div className="space-y-2 mb-3">
                            {question.options.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className={`p-2 rounded text-sm ${
                                  optionIndex === question.correct
                                    ? "bg-green-100 text-green-800 border border-green-200"
                                    : optionIndex === userAnswer && !isCorrect
                                    ? "bg-red-100 text-red-800 border border-red-200"
                                    : "bg-gray-50"
                                }`}
                              >
                                {option}
                                {optionIndex === question.correct && (
                                  <Badge variant="outline" className="ml-2 text-xs">
                                    Correct
                                  </Badge>
                                )}
                                {optionIndex === userAnswer && !isCorrect && (
                                  <Badge variant="destructive" className="ml-2 text-xs">
                                    Your Answer
                                  </Badge>
                                )}
                              </div>
                            ))}
                          </div>
                          
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-800">
                              <strong>Explanation:</strong> {question.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizSection;
