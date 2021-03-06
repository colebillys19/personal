import React, { Component } from 'react';
import { Link } from "react-router-dom";
import uuid from 'uuid/v4';
import './BlogSection.css';

class BlogSection extends Component {
  
  handlePostClick = (id) => {
    this.props.history.push(`blog/${id}`);
  }

  render() {
    const { inView, blogPosts } = this.props;
    const posts = blogPosts.map((post) => {
      const { id, title, description } = post;
      return (
        <div
          key={uuid()}
          className="blog-post-card"
        >
          <h3 onClick={() => this.handlePostClick(id)}>
            <span>
              <i className="fas fa-chevron-right"></i>
              {title}
            </span>
          </h3>
          <p>{description}</p>
        </div>
      );
    });
    return (
      <div className="section-holder blog-holder">
        <header></header>
        <div className={inView ? "blog-section-content visible" : "blog-section-content"}>
          <h1 className="main-header">thoughts</h1>
          <div className="posts-holder">
            { posts }
          </div>
          <p>
            <Link to="/blog">
              <i className="fas fa-chevron-right"></i>
              go to blog page
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default BlogSection;
