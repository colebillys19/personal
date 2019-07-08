import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';
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

  render() {
    return (
      <div>
        <LandingSection />
        <div className="hr"></div>

        <InViewMonitor childPropsInView={{ inView: true }}>
          <AboutSection />
        </InViewMonitor>

        <div className="hr"></div>

        <InViewMonitor childPropsInView={{ inView: true }}>
          <PortfolioSection />
        </InViewMonitor>

        <div className="hr"></div>

        <InViewMonitor childPropsInView={{ inView: true }}>
          <BlogSection history={this.props.history} blogPosts={this.props.blogPosts} />
        </InViewMonitor>

        <div className="hr"></div>

        <InViewMonitor childPropsInView={{ inView: true }}>
          <ContactSection />
        </InViewMonitor>

        <Footer />
      </div>
    );
  }
}

export default MainPage;
