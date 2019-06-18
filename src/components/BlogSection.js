import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './BlogSection.css';

class BlogSection extends Component {
  render() {
    return (
      <div className="blog-section">
        <div className="blog-section-content">
          <h1>blog section</h1>
          <p>blog section</p>
          <p>
            <Link to="blog">go to blog page</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default BlogSection;
