
import { CheckCircle, Circle } from 'lucide-react';

interface ProgressTrackerProps {
  completedSteps: number[];
  totalSteps: number;
}

const ProgressTracker = ({ completedSteps, totalSteps }: ProgressTrackerProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-600">Steps:</span>
      <div className="flex items-center space-x-1">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className="relative">
            {completedSteps.includes(index) ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
