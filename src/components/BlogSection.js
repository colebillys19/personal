import React, { Component } from 'react';
import { Link } from "react-router-dom";
import uuid from 'uuid/v4';
import './BlogSection.css';

class BlogSection extends Component {

  handlePostClick = (i) => {
    this.props.history.push(`blog/${i + 1}`);
  }

  render() {
    const posts = this.props.blogPosts.map((post, i) => {
      const { title, date, body } = post;
      return (
        <div key={uuid()} className="blog-post-card" onClick={() => this.handlePostClick(i)}>
          <h3>{title}</h3>
          <div>{date}</div>
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
            <Link to="blog">go to blog page</Link>
          </p>
          <h3>Recent Posts</h3>
          { posts }
        </div>
      </div>
    );
  }
}

export default BlogSection;
