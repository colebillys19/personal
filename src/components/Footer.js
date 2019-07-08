import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <i className="fas fa-caret-up" onClick={this.handleUpClick}></i>
        <span>&copy; Billy Cole 2019</span>
      </div>
    );
  }
}

export default Footer;
