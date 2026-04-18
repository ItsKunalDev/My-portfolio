import React from 'react';
import { Award, Mail, Send, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section bg-secondary">
      <div className="container">

        {/* Achievements Section */}
        <div className="achievements-section animate-on-scroll">
          <h2 className="section-title">Achievements</h2>
          <div className="glass-panel achievement-card">
            <div className="achievement-icon">
              <Award size={40} />
            </div>
            <div className="achievement-info">
              <h3>Semi-finalist, Flipkart GRID 7.0</h3>
              <p>
                Qualified for the national semi-final round among thousands of participants
                in a highly competitive technical challenge.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-wrapper animate-on-scroll">
          <div className="contact-header">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
            <p className="contact-subtitle">
              Have a project in mind or just want to say hi? My inbox is always open.
              I will try my best to get back to you!
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-method glass-panel">
                <Mail className="contact-icon" size={24} />
                <div>
                  <h4>Email Me</h4>
                  <a href="mailto:kunaldev13062020@gmail.com">kunaldev13062020@gmail.com</a>
                </div>
              </div>

            </div>

            <form className="contact-form glass-panel" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
