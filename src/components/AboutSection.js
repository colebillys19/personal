import React, { Component } from 'react';
import { saveAs } from 'file-saver';
import resume from '../content/resume.pdf';
import './AboutSection.css';

class AboutSection extends Component {

  getResume = () => {
    saveAs(resume, "BillyColeResume.pdf");
  }

  render() {
    const { inView } = this.props;
    return (
      <div className="section-holder about-holder">
        <header></header>
        <div className={inView ? "about-content visible" : "about-content"}>
          <h1 className="main-header">about</h1>
          <div className="about-body">
            <p>
              I grew up with a passion for creativity. Whether it was drawing, painting, taking photographs, or filming videos - I was always finding ways to be creative. As I got older this led to a love for writing and recording music, which in turn led me to pursue a career as an audio engineer.
            </p>
            <br/>
            <p>
              I earned a BA in Recording Arts at Full Sail University and went on to work a variety of jobs in studio, concert, and event settings. In my free time I played in bands and worked as a freelance recording engineer. On occasion, I acted as a creator director - using my ear and songwriting talents to help other musicians develop their sound. 
            </p>
            <br/>
            <p>
              Though I loved my experiences in music and audio, my enthusiasm started to waver as time passed. In my mid twenties I started exploring other career options. Around this time, a long time friend introduced me to coding. I took to it right away. Soon my interest in front end development turned into a passion and I decided to pursue it full time. I wanted to master UI/UX - and help improve the way people interact with technology.
            </p>
            <br/>
            <p>
              I started by taking some classes at a local community college, and then some courses online. Once I got a lay of the land I decided a code camp was the best use of my time. I explored my options and was lucky enough to find Rithm School in San Francisco, a small camp with a great staff of instructors.
            </p>
            <br/>
            <p>
              As my time at Rithm comes to an end, I'm more than pleased with the progress I've made. I feel I'm ready to join a team and make a positive impact. I'm excited to meet folks working in the field, and to talk to potential employers about what I can bring to the table.
            </p>
            <br/>
            <img src="https://res.cloudinary.com/dxklaorw6/image/upload/v1562082279/headshot-bw.jpg" alt="headshot" />
            <br/>
            <div className="resume" onClick={this.getResume}>
              <i className="fas fa-chevron-right"></i>
              download resume
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
