import React, { Component } from 'react';
import './Home.styles.css';

export class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    return (
      <div className="HomeWrapper">
        Test content
      </div>
    );
  }
}
