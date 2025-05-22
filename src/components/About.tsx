
import React, { useEffect } from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.2 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine beautiful design with powerful functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed animate-on-scroll opacity-0">
              My journey in tech started with a curiosity about how websites work. Today, 
              I specialize in full-stack development, creating everything from responsive 
              web applications to complex backend systems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed animate-on-scroll opacity-0">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or hiking in the mountains. I believe the best 
              solutions come from understanding both the technical requirements and the 
              human needs behind every project.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-700 rounded-lg animate-on-scroll opacity-0 transition-all duration-300 hover:bg-slate-600 hover:scale-105">
                <Code className="mx-auto mb-4 text-blue-400" size={40} />
                <h3 className="font-semibold text-white mb-2">Development</h3>
                <p className="text-sm text-slate-300">Clean, efficient code</p>
              </div>
              <div className="text-center p-6 bg-slate-700 rounded-lg animate-on-scroll opacity-0 transition-all duration-300 hover:bg-slate-600 hover:scale-105">
                <Palette className="mx-auto mb-4 text-blue-400" size={40} />
                <h3 className="font-semibold text-white mb-2">Design</h3>
                <p className="text-sm text-slate-300">Beautiful interfaces</p>
              </div>
              <div className="text-center p-6 bg-slate-700 rounded-lg animate-on-scroll opacity-0 transition-all duration-300 hover:bg-slate-600 hover:scale-105">
                <Rocket className="mx-auto mb-4 text-blue-400" size={40} />
                <h3 className="font-semibold text-white mb-2">Innovation</h3>
                <p className="text-sm text-slate-300">Cutting-edge solutions</p>
              </div>
            </div>
          </div>

          <div className="lg:order-first">
            <div className="relative animate-on-scroll opacity-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                alt="Alex Johnson"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-lg opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
