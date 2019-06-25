import React, { Component } from 'react';
import { scroller } from 'react-scroll'
import { Link, NavLink } from "react-router-dom";
import logo from '../img/nav-logo-1.png'
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false
    }
  }

  handleLandingClick = () => {
    if (!this.props.onBlogPage) {
      scroller.scrollTo("landing-section", {
        duration: 800,
        smooth: true
      });
    }
  }

  handleAboutClick = () => {
    if (!this.props.onBlogPage) {
      scroller.scrollTo("about-section", {
        duration: 800,
        smooth: true
      });
    }
  }

  handlePortfolioClick = () => {
    if (!this.props.onBlogPage) {
      scroller.scrollTo("portfolio-section", {
        duration: 800,
        smooth: true
      });
    }
  }

  handleBlogClick = () => {
    if (!this.props.onBlogPage) {
      scroller.scrollTo("blog-section", {
        duration: 800,
        smooth: true
      });
    }
  }

  handleContactClick = () => {
    if (!this.props.onBlogPage) {
      scroller.scrollTo("contact-section", {
        duration: 800,
        smooth: true
      });
    }
  }

  handleBurgerClick = (e) => {
    this.setState({ navExpanded: !this.state.navExpanded });
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
            <img src={logo} alt="nav-logo" />
          </Link>
        </div>

        <ul className={this.state.navExpanded ?
          "nav-list expanded" :
          "nav-list"}
        >

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
              to={this.props.onBlogPost ? "/blog" : "/#blog"}
              onClick={this.handleBlogClick}
              className={this.props.onBlogPage ? "nav-link muted" : "nav-link"}
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
        <div
          className={this.state.navExpanded ? "burger open" : "burger"}
          onClick={this.handleBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    );
  }
}

export default Navbar;
