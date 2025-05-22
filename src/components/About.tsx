
import React, { useEffect } from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          
          // Add a class to trigger additional animations if needed
          if (entry.target.classList.contains('staggered-animation')) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              // Add staggered animation to child elements
              setTimeout(() => {
                (child as HTMLElement).style.opacity = '1';
                (child as HTMLElement).style.transform = 'translateY(0)';
              }, index * 100);
            });
          }
        }
      });
    }, { threshold: 0.2 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .staggered-animation');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-800 overflow-hidden">
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
            <p className="text-lg text-slate-300 leading-relaxed animate-on-scroll opacity-0" 
               style={{ transition: 'all 0.6s ease-out', animationDelay: '0.1s' }}>
              My journey in tech started with a curiosity about how websites work. Today, 
              I specialize in full-stack development, creating everything from responsive 
              web applications to complex backend systems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed animate-on-scroll opacity-0"
               style={{ transition: 'all 0.6s ease-out', animationDelay: '0.3s' }}>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or hiking in the mountains. I believe the best 
              solutions come from understanding both the technical requirements and the 
              human needs behind every project.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8 staggered-animation">
              {[
                {
                  icon: <Code className="mx-auto mb-4 text-blue-400" size={40} />,
                  title: "Development",
                  description: "Clean, efficient code"
                },
                {
                  icon: <Palette className="mx-auto mb-4 text-blue-400" size={40} />,
                  title: "Design",
                  description: "Beautiful interfaces"
                },
                {
                  icon: <Rocket className="mx-auto mb-4 text-blue-400" size={40} />,
                  title: "Innovation",
                  description: "Cutting-edge solutions"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-slate-700 rounded-lg transition-all duration-500" 
                  style={{ 
                    opacity: 0, 
                    transform: 'translateY(20px)',
                    transition: 'all 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)';
                    e.currentTarget.style.backgroundColor = 'rgb(51, 65, 85)'; // slate-600
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.backgroundColor = 'rgb(51, 65, 85, 0.9)'; // back to slate-700
                  }}
                >
                  {item.icon}
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:order-first">
            <div 
              className="relative animate-on-scroll opacity-0"
              style={{ transition: 'all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                alt="Alex Johnson"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto hover:shadow-2xl transition-all duration-300"
                style={{ transform: 'translateY(10px)', transition: 'all 0.5s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(10px) scale(1)';
                }}
              />
              <div 
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20"
                style={{ 
                  animation: 'pulse 3s infinite ease-in-out',
                  transition: 'all 0.3s ease'
                }}
              ></div>
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-lg opacity-30"
                style={{ 
                  animation: 'pulse 4s infinite ease-in-out 1s',
                  transition: 'all 0.3s ease'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
