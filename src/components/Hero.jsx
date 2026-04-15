import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content animate-on-scroll">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Kunal Dev.</h1>
          <h2 className="hero-role">I build intuitive web experiences.</h2>
          <p className="hero-desc">
            I'm a Computer Science student and a passionate Web Developer focused on creating 
            beautiful, high-performance, and scalable full-stack applications.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            
            <div className="hero-socials">
              <a href="https://github.com/ItsKunalDev" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kunal-dev-b837b4252/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:kunaldev9142@gmail.com" className="social-icon">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-on-scroll">
          <div className="glass-panel profile-glass">
            <div className="code-window">
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-body">
                <code>
                  <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'} <br/>
                  &nbsp;&nbsp;name: <span className="code-string">"Kunal Dev"</span>, <br/>
                  &nbsp;&nbsp;role: <span className="code-string">"Full Stack Web Developer"</span>, <br/>
                  &nbsp;&nbsp;skills: [<span className="code-string">"React"</span>, <span className="code-string">"Node"</span>, <span className="code-string">"Firebase"</span>], <br/>
                  &nbsp;&nbsp;passion: <span className="code-string">"Building awesome UIs"</span> <br/>
                  {'}'}; <br/>
                </code>
              </div>
            </div>
          </div>
          {/* A glowing orb effect behind the glass */}
          <div className="glow-orb"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
