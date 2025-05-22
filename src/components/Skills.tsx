
import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          
          // Animate skill bars when they come into view
          if (entry.target.classList.contains('skill-container')) {
            const bars = entry.target.querySelectorAll('.skill-bar');
            bars.forEach((bar, index) => {
              setTimeout(() => {
                // Cast the element to HTMLElement to access style property
                const htmlBar = bar as HTMLElement;
                htmlBar.style.width = htmlBar.getAttribute('data-width') || '0%';
              }, index * 150); // Slightly longer delay for more noticeable effect
            });
          }
        }
      });
    }, { threshold: 0.2 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    const skillContainers = document.querySelectorAll('.skill-container');
    skillContainers.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      skillContainers.forEach(el => observer.unobserve(el));
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 78 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-slate-800 p-8 rounded-xl shadow-lg animate-on-scroll opacity-0" 
              style={{ 
                animationDelay: `${categoryIndex * 0.2}s`,
                transform: 'translateY(20px)',
                transition: 'transform 0.6s ease-out'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4 skill-container">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{ 
                    opacity: 0, 
                    animation: `fade-in 0.5s ease-out forwards ${0.3 + skillIndex * 0.1}s`
                  }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full skill-bar"
                        data-width={`${skill.level}%`}
                        style={{ 
                          width: '0%', 
                          transition: 'width 1.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
