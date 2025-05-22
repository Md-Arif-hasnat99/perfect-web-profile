
import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine beautiful design with powerful functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              My journey in tech started with a curiosity about how websites work. Today, 
              I specialize in full-stack development, creating everything from responsive 
              web applications to complex backend systems.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or hiking in the mountains. I believe the best 
              solutions come from understanding both the technical requirements and the 
              human needs behind every project.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Code className="mx-auto mb-4 text-blue-600" size={40} />
                <h3 className="font-semibold text-slate-800 mb-2">Development</h3>
                <p className="text-sm text-slate-600">Clean, efficient code</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Palette className="mx-auto mb-4 text-blue-600" size={40} />
                <h3 className="font-semibold text-slate-800 mb-2">Design</h3>
                <p className="text-sm text-slate-600">Beautiful interfaces</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Rocket className="mx-auto mb-4 text-blue-600" size={40} />
                <h3 className="font-semibold text-slate-800 mb-2">Innovation</h3>
                <p className="text-sm text-slate-600">Cutting-edge solutions</p>
              </div>
            </div>
          </div>

          <div className="lg:order-first">
            <div className="relative">
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
