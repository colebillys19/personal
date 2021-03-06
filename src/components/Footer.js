import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import './Footer.css';

class Footer extends Component {

  handleUpClick = () => {
    if (!this.props.onBlogPage && !this.props.onBlogPost) {
      scroller.scrollTo("landing-section", {
        duration: 800,
        smooth: true
      });
    }
  }

  render() {
    return (
      <div className="footer">
        <i className="fas fa-caret-up" onClick={this.handleUpClick}></i>
        <span>Billy Cole <i className="fas fa-laptop"></i> 2019</span>
      </div>
    );
  }
}

export default Footer;
