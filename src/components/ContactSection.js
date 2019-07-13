import React, { Component } from 'react';
import './ContactSection.css';

class ContactSection extends Component {
  render() {
    const { inView } = this.props;
    return (
      <div className="section-holder contact-holder">
        <header></header>
        <div className={inView ? "contact-content visible" : "contact-content"}>
          <h1 className="main-header">contact</h1>
          <div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              San Francisco
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              cole.billys@gmail.com
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/billy-cole-4a3915178/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-chevron-right"></i>
                LinkedIn
              </a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a
                href="https://github.com/colebillys19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-chevron-right"></i>
                GitHub
              </a>
            </div>
            <div className="contact-item">
              <i className="fab fa-twitter"></i>
              <a
                href="https://twitter.com/colebillys19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-chevron-right"></i>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
