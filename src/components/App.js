import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import blogPosts from '../blogContent';
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import BlogPage from "./BlogPage";
import BlogPost from "./BlogPost";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onBlogPage: false,
      onBlogPost: false
    }
  }

  // keeps track of user's location in the app, for navbar logic
  updateLocation = (pathname) => {
    const onBlogPage = pathname === "/blog";
    const onBlogPost = pathname.length > 5;
    this.setState({ onBlogPage, onBlogPost });
  }

  render() {
    return (
      <div>
        <Navbar onBlogPage={this.state.onBlogPage} onBlogPost={this.state.onBlogPost}/>
        <Switch>
          <Route
            exact
            path="/"
            render={rtProps => <MainPage {...rtProps} updateLocation={this.updateLocation} blogPosts={blogPosts}/>}
          />
          <Route
            exact
            path="/blog"
            render={rtProps => <BlogPage {...rtProps} updateLocation={this.updateLocation} blogPosts={blogPosts} />}
          />
          <Route
            exact
            path="/blog/:id"
            render={rtProps => <BlogPost {...rtProps} updateLocation={this.updateLocation} blogPosts={blogPosts} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
