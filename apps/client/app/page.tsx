"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion';
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

const imageUrl = "https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80";

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 animate-gradient-x h-[500px]'>
        <div
          className="absolute w-full h-full inset-0 bg-black opacity-50"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-white">
        </div>
      </section>
    </div>
  );
}   