import React, { Component } from 'react';
import { scroller } from 'react-scroll'
import { NavLink } from "react-router-dom";
import './Footer.css';

class Footer extends Component {

  handleUpClick(e) {
    e.preventDefault();
    scroller.scrollTo("landing-section", {
      duration: 1000,
      smooth: true
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <NavLink to="#" onClick={this.handleUpClick}><i className="fas fa-arrow-up"></i></NavLink>
        </div>
        <div className="footer-right">
          <span>&copy; Billy Cole 2019</span>
        </div>
      </div>
    );
  }
}

export default Footer;