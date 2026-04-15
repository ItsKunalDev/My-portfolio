import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: "Freelancer Dashboard Web App",
    date: "Dec 2025 - Jan 2026",
    description: "A responsive freelancer dashboard developed to manage projects, tasks, and workflows efficiently. Implemented real-time data handling and intuitive UI for an improved user experience.",
    tech: ["ReactJS", "HTML/CSS", "Firebase", "Vercel"],
    github: "https://github.com/ItsKunalDev/WorkDesk.git", 
    demo: "https://work-desk-one.vercel.app/"
  },
  {
    title: "Disaster Management System",
    date: "Sep 2025 - Oct 2025",
    description: "A response system capable of monitoring disaster events in real-time across multiple regions. Integrated predictive ML models improving early warning accuracy by 90% and reducing manual reporting by 70%.",
    tech: ["Python", "JavaScript", "HTML/CSS", "Google Maps API"],
    github: "https://github.com/ItsKunalDev/Diaster_Management.git", 
    demo: "https://diaster-management-iota.vercel.app/"
  },
  {
    title: "Food Ordering Website",
    date: "Mar 2026 - Apr 2026",
    description: "An interactive web application for browsing food items and menu categories with dynamic components for seamless navigation. Includes authentication and real-time data storage.",
    tech: ["JavaScript", "HTML/CSS", "Firebase", "Vercel"],
    github: "https://github.com/ItsKunalDev/Food-website.git", 
    demo: "https://food-website-nine-steel.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="glass-panel project-card animate-on-scroll">
              <div className="project-content">
                <div className="project-top">
                  <FolderGit2 className="project-folder" size={40} />
                  <div className="project-links">
                    <a href={project.github} className="social-icon"><FaGithub size={20} /></a>
                    <a href={project.demo} className="social-icon"><ExternalLink size={20} /></a>
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <span className="project-date">{project.date}</span>
                
                <p className="project-desc">
                  {project.description}
                </p>
              </div>
              
              <div className="project-bottom">
                <ul className="project-tech-list">
                  {project.tech.map((tech, tIndex) => (
                    <li key={tIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
