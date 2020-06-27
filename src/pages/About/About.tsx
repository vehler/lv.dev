import React, { Component } from 'react';
import './About.styles.css';

export class About extends Component{

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };

  }

  render () {
    return (
      <div className="AboutWrapper">
        Test content
      </div>
    );
  }
}