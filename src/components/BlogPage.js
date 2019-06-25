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
      <div className="blog-page">
        <div className="blog-page-content">
          <h1>blog</h1>
          <p>
            <Link to="/#blog">back to main page</Link>
          </p>
          <h3>Posts</h3>
          {posts}
        </div>
      </div>
    );
  }
}

export default BlogPage;
