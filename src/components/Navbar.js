import React, { Component } from 'react';
import { scroller } from 'react-scroll'
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {

  handleLandingClick = (e) => {
    if (this.props.onMainPage) {
      e.preventDefault();
      scroller.scrollTo("landing-section", {
        duration: 800,
        smooth: true
      });    
    }
  }

  handleAboutClick = (e) => {
    if (this.props.onMainPage) {
      e.preventDefault();
      scroller.scrollTo("about-section", {
        duration: 800,
        smooth: true
      });    
    }
  }

  handlePortfolioClick = (e) => {
    if (this.props.onMainPage) {
      e.preventDefault();
      scroller.scrollTo("portfolio-section", {
        duration: 800,
        smooth: true
      });
    }
  }

  handleBlogClick = (e) => {
    if (this.props.onMainPage) {
      e.preventDefault();
      scroller.scrollTo("blog-section", {
        duration: 800,
        smooth: true
      });
    }
  }

  handleContactClick = (e) => {
    if (this.props.onMainPage) {
      e.preventDefault();
      scroller.scrollTo("contact-section", {
        duration: 800,
        smooth: true
      });
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-left">
          <Link
            to="/#landing"
            onClick={this.handleLandingClick}
            className=""
          >
            BC
          </Link>
        </div>
        <div className="nav-right">

          <NavLink
            to="/#about"
            onClick={this.handleAboutClick}
            className="nav-link"
          >
            about
          </NavLink>

          <NavLink
            to="/#portfolio"
            onClick={this.handlePortfolioClick}
            className="nav-link"
          >
            portfolio
          </NavLink>

          <NavLink
            to="#"
            onClick={this.handleBlogClick}
            className={ this.props.onMainPage ? "nav-link" : "nav-link muted" }
          >
            blog
          </NavLink>

          <NavLink
            to="/#contact"
            onClick={this.handleContactClick}
            className="nav-link"
          >
            contact
          </NavLink>

        </div>
      </div>
    );
  }
}

export default Navbar;
