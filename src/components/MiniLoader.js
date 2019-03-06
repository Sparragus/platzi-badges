import React, { Component } from 'react';

import './styles/Loader.css';

export default class MiniLoader extends Component {
  render() {
    return (
      <div className="lds-grid">
        <div />
        <div />
        <div />
      </div>
    );
  }
}
