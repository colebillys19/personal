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
            B<span>C</span>
          </Link>
        </div>

        <ul className="nav-right">
          <li>
            <NavLink
              to="/#about"
              onClick={this.handleAboutClick}
              className="nav-link"
            >
              about
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/#portfolio"
              onClick={this.handlePortfolioClick}
              className="nav-link"
            >
              portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={this.handleBlogClick}
              className={ this.props.onMainPage ? "nav-link" : "nav-link muted" }
            >
              blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/#contact"
              onClick={this.handleContactClick}
              className="nav-link"
            >
              contact
            </NavLink>
          </li>

        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>

        </div>

      </div>
    );
  }
}

export default Navbar;
