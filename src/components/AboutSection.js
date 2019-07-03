import React, { Component } from 'react';
import './AboutSection.css';

class AboutSection extends Component {
  render() {
    return (
      <div className="about-section">
        <header></header>
        <div className="about-content">
          <h1>about</h1>
          <img src="https://res.cloudinary.com/dxklaorw6/image/upload/v1562082279/headshot-bw.jpg" alt="headshot" />
          <div className="about-body">
            <p>
              I grew up with a passion for creativity. I spent countless hours working on art, taking photographs, and filming videos - but it wasn't until I discovered my love for music that I really hit my stride. As a teenager, all my free time went to writing, playing, and recording music. My friends and I would drive near and far to watch our favorite bands perform. This passion led me to pursue a career as an audio engineer.
            </p>
            <br/>
            <p>
              I attended Full Sail University, where I earned a BA in Recording Arts and a Pro Tools Operator certificate. After school I worked as an intern for a commercial music and sound design house - then as a monitor engineer for a live music venue. Looking for a new adventure, I decided to move from my home state of Connecticut to Portland, Oregon and get involved with the city's eclectic music scene. In Portland I formed and played in multiple bands, for whom I wrote, recorded, and mixed material. I did the same for other bands and musicians. I worked as an audio-visual technician in downtown Portland setting up and operating audio, lighting, and projection systems for large-scale hotel events. I made sure to take advantage of living in the Pacific Northwest by getting out of the city to explore whenever I had the chance - often bringing my camera along to shoot photos and videos.
            </p>
            <br/>
            <p>
              Though I loved the experience my audio career provided, eventually I began seeking something new. Around this time I had a conversation with a long time friend about his job as a full stack software developer. I decided to try my hand at coding and took to it right away. As time passed I became more and more interested in writing code, specifically user interface design. As time passed, I noticed myself focusing more on development and less on audio. I found that I already had some skills necessary to excel as a front end developer: a good eye for design, the ability to collaborate creatively with others, and experience using technology for creative purposes. I made the decision to move back to Connecticut and pursue development full time.
            </p>
            <br/>
            <p>
              I took a few classes at a local community college and some courses online, but as I began to get a perspective on the field I decided the most productive use of my time was to enroll in a coding camp. I did my research and was lucky enough to find Rithm School in San Francisco, a smaller than average camp with a great staff of instructors. Now I'm back on the west coast, and as my time at Rithm comes to an end, I'm confident I have the skills necessary to succeed as a front end developer. I'm excited to meet folks working in the field, and to talk to potential employers about what I can bring to the table.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
