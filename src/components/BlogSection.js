import React, { Component } from 'react';
import { Link } from "react-router-dom";
import uuid from 'uuid/v4';
import arrowRight from '../img/arrow-right.svg';
import './BlogSection.css';

class BlogSection extends Component {

  handlePostClick = (i) => {
    this.props.history.push(`blog/${i + 1}`);
  }

  handleMouseOver = (e) => {
    e.target.style = { cursor: "pointer" }
  }

  handleMouseOut = (e) => {
    e.target.style = { cursor: "default" }
  }

  render() {
    const posts = this.props.blogPosts.map((post, i) => {
      const { title, body } = post;
      return (
        <div
          key={uuid()}
          className="blog-post-card"
          onClick={() => this.handlePostClick(i)}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <h3>{title}</h3>
          <p>{`${body.slice(0, 100)}...`}</p>
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
