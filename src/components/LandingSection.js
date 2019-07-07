import React, { Component } from 'react';
import './LandingSection.css';

class LandingSection extends Component {
  render() {
    return (
      <div className="landing-section">
        <div className="landing-content">
          <div className="name-flex">
            <div className="name-letter">B</div>
            <div className="name-letter">I</div>
            <div className="name-letter">L</div>
            <div className="name-letter">L</div>
            <div className="name-letter">Y</div>
            <div className="name-letter">C</div>
            <div className="name-letter">O</div>
            <div className="name-letter">L</div>
            <div className="name-letter">E</div>
          </div>
          <p>front end developer</p>
        </div>
      </div>
    );
  }
}

export default LandingSection;
