import React from 'react';
import { BookOpen, MapPin, Calendar, Code } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text animate-on-scroll">
            <p>
              Hello! I'm <span className="highlight-text">Kunal Dev</span>, a passionate student and developer with a knack for building 
              dynamic, user-centric online experiences. My interest in web development started 
              when I realized the boundless creativity that coding allows.
            </p>
            <p>
              I thrive on tackling complex problems and transforming them into elegant, intuitive interfaces. 
              Always eager to learn new technologies and best practices, I continually strive to improve my craft.
            </p>
            <div className="hobbies-container">
              <h3>Hobbies & Interests</h3>
              <ul className="hobbies-list">
                <li><Code className="hobby-icon" size={20} /> Solving challenges on LeetCode & HackerRank</li>
                <li><BookOpen className="hobby-icon" size={20} /> Reading Books</li>
              </ul>
            </div>
          </div>
          
          <div className="about-education animate-on-scroll">
            <div className="glass-panel education-card">
              <h3 className="card-title">Education</h3>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-degree">B.Tech in Computer Science and Engineering</h4>
                  <h5 className="timeline-school">Vellore Institute of Technology</h5>
                  <div className="timeline-meta">
                    <span className="meta-item"><Calendar size={16}/> Expected May 2026</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-degree">Class 12th (Science)</h4>
                  <h5 className="timeline-school">Holy Mission Senior Secondary School (CBSE)</h5>
                  <div className="timeline-meta">
                    <span className="meta-item"><Calendar size={16}/> Completed in July 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
