import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import BlogPage from "./BlogPage";
import BlogPost from "./BlogPost";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMainPage: true
    }
  }

  // keeps track of user's location in the app, for navbar logic
  updateLocation = (pathname) => {
    const onMainPage = pathname === "/";
    this.setState({ onMainPage });
  }

  render() {
    return (
      <div>
        <Navbar onMainPage={this.state.onMainPage}/>
        <Switch>
          <Route
            exact
            path="/"
            render={rtProps => <MainPage {...rtProps} updateLocation={this.updateLocation} />}
          />
          <Route
            exact
            path="/blog"
            render={rtProps => <BlogPage {...rtProps} updateLocation={this.updateLocation} />}
          />
          <Route
            exact
            path="/blog/:id"
            render={rtProps => <BlogPost {...rtProps} updateLocation={this.updateLocation} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
