import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';
import { Element, scroller } from 'react-scroll';
import LandingSection from "./LandingSection";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import './MainPage.css';

class MainPage extends Component {

  componentDidMount() {
    // call updateLocation to tell state whether on main page or blog
    // dictates navbar format
    this.props.updateLocation(this.props.location.pathname);
  }

  componentDidUpdate() {
    // if user navigates to main page via blog, show appropriate section
    if (this.props.location.hash) {
      const section = this.props.location.hash.slice(1)
      scroller.scrollTo(`${section}-section`, {
        duration: 0
      });
    }
    // otherwise, show landing
    else {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Element id="landing" name="landing-section">
          <LandingSection />
        </Element>
        <div className="hr"></div>

        <Element id="about" name="about-section">
          <InViewMonitor
            childPropsInView={{ inView: true }}
          >
            <AboutSection />
          </InViewMonitor>
        </Element>
        <div className="hr"></div>

        <Element id="portfolio" name="portfolio-section">
          <InViewMonitor
            childPropsInView={{ inView: true }}
          >
            <PortfolioSection />
          </InViewMonitor>
        </Element>
        <div className="hr"></div>

        <Element id="blog" name="blog-section">
          <InViewMonitor
            childPropsInView={{ inView: true }}
          >
            <BlogSection history={this.props.history} blogPosts={this.props.blogPosts} />
          </InViewMonitor>
        </Element>
        <div className="hr"></div>

        <Element id="contact" name="contact-section">
          <InViewMonitor
            childPropsInView={{ inView: true }}
          >
            <ContactSection />
          </InViewMonitor>
        </Element>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
