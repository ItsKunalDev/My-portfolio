import React from 'react';
import { Code2, Layout, Database, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={24} />,
    skills: ["Java", "Python", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layout size={24} />,
    skills: ["React.js", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: ["MySQL", "Firebase"]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={24} />,
    skills: ["Git", "GitHub", "Linux"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`glass-panel skill-card animate-on-scroll delay-${index + 1}`}
            >
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-tags">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-tag">
                    {skill}
                  </span>
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
