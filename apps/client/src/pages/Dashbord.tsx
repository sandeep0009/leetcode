import  { useState } from 'react';
import {motion} from "framer-motion";
import Footer from "../components/Footer"
import TestimonialCard from "../components/TestimonialCard"
import Navbar from "../components/Navbar";
import { 
    Code2, 
    Trophy, 
    Users, 
    Zap, 
    CheckCircle, 
    BarChart, 
    Brain, 
    Rocket,
    ChevronRight,
    Github,
    Linkedin,
    Twitter
  } from 'lucide-react';
import { testimonials } from '../Helper/testimonial';
import ProblemCard from '../components/ProblemCard';
import { problems } from '../Helper/problem';

function Dashboard(){
    const [activeTab, setActiveTab] = useState('all');

    return(
        <div className="min-h-screen bg-gray-50">
        <Navbar />
        <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-700 animate-gradient-x">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80')] bg-cover opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Master Coding Challenges. 
                    <span className="text-primary-200"> Ace Your Interviews.</span>
                  </h1>
                  <p className="mt-6 text-xl text-primary-100 max-w-2xl">
                    Practice with over 2,000 coding challenges, track your progress, and join a community of developers preparing for technical interviews.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
                    >
                      Start Coding <ChevronRight className="ml-2 h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300 flex items-center justify-center"
                    >
                      View Problems
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-2xl">
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="ml-4 text-white/80 text-sm">problem.js</div>
                    </div>
                    <pre className="text-sm text-primary-100 overflow-x-auto">
                      <code>
  {`function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      
      map.set(nums[i], i);
    }
    
    return null;
  }`}
                      </code>
                    </pre>
                  </div>
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-secondary-500 text-white p-3 rounded-lg shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <CheckCircle className="h-6 w-6" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white">2,000+</p>
                  <p className="mt-2 text-primary-100">Coding Problems</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white">500K+</p>
                  <p className="mt-2 text-primary-100">Active Users</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
                  <p className="mt-2 text-primary-100">Programming Languages</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white">98%</p>
                  <p className="mt-2 text-primary-100">Success Rate</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Our Platform?</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                We provide everything you need to prepare for technical interviews and improve your coding skills.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Problem Set</h3>
                <p className="text-gray-600">
                  Access over 2,000 coding problems across various difficulty levels and categories, from arrays to dynamic programming.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Coding Environment</h3>
                <p className="text-gray-600">
                  Write, test, and debug your code directly in the browser with our powerful IDE that supports multiple programming languages.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Progress Tracking</h3>
                <p className="text-gray-600">
                  Monitor your progress with detailed statistics, track your problem-solving speed, and identify areas for improvement.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Discussions</h3>
                <p className="text-gray-600">
                  Join discussions with other developers, share your solutions, and learn from different approaches to the same problem.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interview Preparation</h3>
                <p className="text-gray-600">
                  Practice with mock interviews, timed challenges, and company-specific problem sets to prepare for your dream job.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 mb-6">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contests & Challenges</h3>
                <p className="text-gray-600">
                  Participate in weekly coding contests and challenges to test your skills against other developers and win prizes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Our Problems</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                From easy warm-ups to challenging algorithmic puzzles, we have problems for every skill level.
              </p>
            </motion.div>
            
            <div className="flex justify-center mb-10">
              <div className="inline-flex p-1 bg-gray-100 rounded-lg">
                {['all', 'easy', 'medium', 'hard'].map((tab) => (
                  <motion.button
                    key={tab}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      activeTab === tab 
                        ? 'bg-white text-primary-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 transition duration-300"
              >
                View All Problems
              </motion.button>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700 animate-gradient-x">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Ready to Ace Your Next Technical Interview?
                </h2>
                <p className="mt-4 text-xl text-primary-100 max-w-2xl">
                  Join thousands of developers who have landed jobs at top tech companies through our platform.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
                  >
                    Sign Up Free <Rocket className="ml-2 h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">Success Stories</h3>
                      <p className="text-primary-100">From our community</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <p className="text-primary-100 italic">"Practiced for 3 months and landed a job at Google!"</p>
                      <p className="text-white font-medium mt-2">- David K.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <p className="text-primary-100 italic">"The mock interviews were incredibly helpful for my preparation."</p>
                      <p className="text-white font-medium mt-2">- Priya M.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Users Say</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from developers who have transformed their careers with our platform.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
  
    )
}

export default Dashboard