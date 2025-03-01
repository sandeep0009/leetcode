import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    text: string;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <div className="absolute -top-2 -left-2 text-primary-200">
          <Quote className="h-8 w-8" />
        </div>
        <div className="pt-6">
          <p className="text-gray-600 italic">{testimonial.text}</p>
          <div className="mt-6 flex items-center">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;