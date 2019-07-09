import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <div className="not-found-content">
          <h1 className="main-header">404</h1>
          <h2>page not found</h2>
        </div>
      </div>
    );
  }
}

export default NotFound;
