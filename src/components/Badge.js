import React, { Component } from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends Component {
  render() {

    const { email, firstName, lastName, jobTitle, twitter } = this.props;

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={ confLogo } alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={email} alt="avatar" />
          <h1> { firstName } <br/> { lastName }</h1>
        </div>
        <div className="Badge__section-info">
          <h3> { jobTitle } </h3>
          <div> @{ twitter } </div>
        </div>
        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;
