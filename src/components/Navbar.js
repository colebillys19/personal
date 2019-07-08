import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../content/logo.svg'
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false
    }
  }

  componentDidMount = () => {
    this.checkViewport();
    window.addEventListener("resize", this.checkViewport);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.checkViewport);
  }

  checkViewport = () => {
    if (window.innerWidth >= 769) {
      this.setState({ navExpanded: false });
    }
  }
  
  handleBurgerClick = (e) => {
    this.setState({ navExpanded: !this.state.navExpanded });
  }

  render() {
    const { onBlogPage, onBlogPost } = this.props;
    const { navExpanded } = this.state;
    return (
      <div className="navbar">
        <div className="nav-left">
          <Link
            to="/"
          >
            <img src={logo} alt="nav-logo" />
          </Link>
        </div>
        <ul className={ navExpanded ? "mobile-nav expanded" : "mobile-nav" }>
          <li>
            <NavLink
              to="/"
              className="nav-link"
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="nav-link"
            >
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={onBlogPost ? "/blog" : "/"}
              className={onBlogPage ? "nav-link muted" : "nav-link"}
            >
              { !onBlogPage && !onBlogPost ? "thoughts" : "blog" }
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
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

        <ul className="desktop-nav">
          <li>
            <NavLink
              to="/"
              onClick={this.handleAboutClick}
              className="nav-link"
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={this.handlePortfolioClick}
              className="nav-link"
            >
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={onBlogPost ? "/blog" : "/"}
              onClick={this.handleBlogClick}
              className={onBlogPage ? "nav-link muted" : "nav-link"}
            >
              { !onBlogPage && !onBlogPost ? "thoughts" : "blog" }
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={this.handleContactClick}
              className="nav-link"
            >
              contact
            </NavLink>
          </li>
        </ul>

      </div>
    );
  }
}

export default Navbar;
