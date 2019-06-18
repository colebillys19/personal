import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './BlogPage.css';

class BlogPage extends Component {

  componentDidMount() {
    // call updateLocation to tell state whether on main page or blog
    // dictates navbar format
    this.props.updateLocation(this.props.location.pathname)
  }

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="blog-page">
        <div className="blog-page-content">
          <h1>blog page</h1>
          <p>blog page</p>
          <p>
            <Link to="blog/1">go to a blog post</Link>
          </p>
          <p>
            <Link to="/">back to main page</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default BlogPage;
