import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ProblemProps {
  problem: {
    id: number;
    title: string;
    difficulty: string;
    category: string;
    completion: number;
  };
}

const ProblemCard: React.FC<ProblemProps> = ({ problem }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-500 bg-green-50';
      case 'medium':
        return 'text-yellow-500 bg-yellow-50';
      case 'hard':
        return 'text-red-500 bg-red-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
          <span className="text-sm text-gray-500">{problem.category}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Completion Rate</span>
            <span className="text-sm font-medium text-gray-700">{problem.completion}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full" 
              style={{ width: `${problem.completion}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 p-4">
        <motion.button
          className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700 font-medium"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Solve Challenge <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProblemCard;