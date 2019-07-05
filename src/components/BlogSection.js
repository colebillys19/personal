import React, { Component } from 'react';
import { Link } from "react-router-dom";
import uuid from 'uuid/v4';
import './BlogSection.css';

class BlogSection extends Component {
  
  handlePostClick = (id) => {
    this.props.history.push(`blog/${id}`);
  }

  render() {
    const posts = this.props.blogPosts.map((post) => {
      const { id, title, description, date } = post;
      return (
        <div
          key={uuid()}
          className="blog-post-card"
          onClick={() => this.handlePostClick(id)}
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <div>{date}</div>
        </div>
      );
    });
    return (
      <div className="blog-section">
        <header></header>
        <div className="blog-section-content">
          <h1 className="main-header">thoughts</h1>
          <p>
            <Link to="blog">
              <i className="fas fa-chevron-right"></i>
              go to blog page
            </Link>
          </p>
          <h3>Recent Posts</h3>
          { posts }
        </div>
      </div>
    );
  }
}

export default BlogSection;
