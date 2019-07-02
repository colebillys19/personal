import React, { Component } from 'react';
import { Link } from "react-router-dom";
import uuid from 'uuid/v4';
import arrowRight from '../img/arrow-right.svg';
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
          <h1>blog</h1>
          <p>
            <Link to="blog">
              <img src={arrowRight} alt="arrow-right" />
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
