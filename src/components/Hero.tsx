
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  // Animation effect for staggered entrance
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-element');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 200); // staggered delay
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-700/10 rounded-full -top-20 -left-20 animate-pulse" style={{animationDuration: '10s'}}></div>
        <div className="absolute w-96 h-96 bg-purple-700/10 rounded-full -bottom-40 -right-20 animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute w-64 h-64 bg-teal-700/10 rounded-full top-1/2 left-1/3 animate-pulse" style={{animationDuration: '8s'}}></div>
      </div>
      
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-element opacity-0">
            Hi, I'm <span className="text-blue-400">Alex Johnson</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto animate-element opacity-0">
            Full-Stack Developer & UI/UX Designer passionate about creating beautiful, 
            functional digital experiences that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-element opacity-0">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
