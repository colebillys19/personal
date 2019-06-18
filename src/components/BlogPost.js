import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './BlogPost.css';

class BlogPost extends Component {

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
      <div className="blog-post">
        <div className="blog-post-content">
          <h1>post</h1>
          <p>blog post</p>
          <p>
            <Link to="/blog">back</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default BlogPost;
