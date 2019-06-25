import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './BlogPost.css';

class BlogPost extends Component {

  componentDidMount() {
    // call updateLocation to tell state whether on main page or blog
    // dictates navbar format
    this.props.updateLocation(this.props.location.pathname);
  }
  
  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    const postNum = +this.props.match.url.slice(6) - 1;
    const { title, date, body } = this.props.blogPosts[postNum]
    return (
      <div className="blog-post">
        <div className="blog-post-content">
          <h1>{title}</h1>
          <div>{date}</div>
          <p>{body}</p>
          <div>
            <Link to="/blog">blog page</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
