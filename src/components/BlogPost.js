import React, { Component } from 'react';
import { Link } from "react-router-dom";
import marked from 'marked';
import './BlogPost.css';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: null
    }
  }
  

  componentDidMount() {
    // call updateLocation to tell state whether on main page or blog
    // dictates navbar format
    this.props.updateLocation(this.props.location.pathname);
    // add spinner?
    // grab markdown file and save to state
    const postPath = require(`../blogPosts/${this.props.match.url.slice(6)}.md`);
    fetch(postPath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        markdown: marked(text)
      })
    });
  }
  
  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    const { markdown } = this.state;
    const { title, date } = this.props.blogPosts.find(post => post.id === this.props.match.url.slice(6));
    return (
      <div className="blog-post">
        <div className="blog-post-content">
          <Link to="/blog">blog page</Link>
          <Link to="/#blog">main page</Link>
          <h1>{title}</h1>
          <div>{date}</div>
          <article dangerouslySetInnerHTML={{__html: markdown}}></article>
        </div>
      </div>
    );
  }
}

export default BlogPost;
