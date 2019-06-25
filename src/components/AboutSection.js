import React, { Component } from 'react';
import './AboutSection.css';

class AboutSection extends Component {
  render() {
    return (
      <div className="about-section">
        <header></header>
        <div className="about-content">
          <h1>about</h1>
          <p>
            I grew up with a passion for creativity. I spent hours and hours
            working on art, taking photographs, and creating videos - but it
            wasn't until I started playing and recording music that I really
            hit my stride. After high school I pursued a career in audio
            engineering/music production. I formed multiple bands, recorded and
            produced bands and artists, worked at concert venues, produced my
            own music videos, and worked as an audio visual technician for
            large scale hotel events. Though I loved these experiences,
            eventually I began looking for a new adventure. This led me to the
            world of web development and design.
            <br /><br />
            Since then I've been busy learning everything I can about the field
            and its technologies. I started with HTML, CSS, and Javascript -
            and lately I've moved on to more advanced tech like Node, React,
            and Redux. I'm excited about this path and everything it has to
            offer. My goal is to become a full stack developer, specializing in
            React + UI design.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutSection;
