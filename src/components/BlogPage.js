import React, { Component } from 'react';
import { Link } from "react-router-dom";
import uuid from 'uuid/v4';
import './BlogPage.css';

class BlogPage extends Component {

  componentDidMount() {
    // call updateLocation to tell state whether on main page or blog
    // dictates navbar format
    this.props.updateLocation(this.props.location.pathname);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  handlePostClick = (id) => {
    this.props.history.push(`blog/${id}`);
  }

  render() {
    const posts = this.props.blogPosts.map((post) => {
      const { id, title, description, date } = post;
      return (
        <div key={uuid()} className="blog-post-card" onClick={() => this.handlePostClick(id)}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>{date}</div>
        </div>
      );
    });
    return (
      <div className="blog-page">
        <div className="blog-page-content">
          <h1 className="main-header">blog</h1>
          <p>
            <Link to="/#blog">
              back to main page
            </Link>
          </p>
          <h3>Posts</h3>
          {posts}
        </div>
      </div>
    );
  }
}

export default BlogPage;
