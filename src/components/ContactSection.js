import React, { Component } from 'react';
import arrowRight from '../img/arrow-right.svg';
import './ContactSection.css';

class ContactSection extends Component {
  render() {
    return (
      <div className="contact-section">
        <header></header>
        <div className="contact-content">
          <h1>contact</h1>
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
                <img src={arrowRight} alt="arrow-right" />
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
                <img src={arrowRight} alt="arrow-right" />
                GitHub
              </a>
            </div>
            <div className="contact-item">
              <i className="fab fa-stack-overflow"></i>
              <a
                href="https://stackoverflow.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={arrowRight} alt="arrow-right" />
                StackOverflow
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
