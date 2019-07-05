import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import './BlogPost.css';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    }
  }

  componentDidMount() {
    // call updateLocation to tell state whether on main page or blog
    // dictates navbar format
    this.props.updateLocation(this.props.location.pathname);

    // grab markdown file and save to state
    const postPath = require(`../blogPosts/${this.props.match.url.slice(6)}.md`);
    fetch(postPath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          post: text
        })
      });
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { post } = this.state;
    const { title, date } = this.props.blogPosts.find(post => post.id === this.props.match.url.slice(6));
    return (
      <div className="blog-post">
        <div className="blog-post-content">
          <Link to="/blog">
            <i className="fas fa-chevron-right"></i>
            blog page
          </Link>
          <Link to="/#blog">
            <i className="fas fa-chevron-right"></i>
            main page
          </Link>
          <h1>{title}</h1>
          <div>by Billy Cole</div>
          <div>{date}</div>
          <article>
            { !post ? (
              <div className="spinner">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
            ) : (
              <ReactMarkdown
                source={post}
                renderers={{ code: CodeBlock }}
              />
            ) }
          </article>
        </div>
      </div>
    );
  }
}

export default BlogPost;
