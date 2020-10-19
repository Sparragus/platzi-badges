import React, { Component } from 'react';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgeList from '../components/BadgesList';

import data from '../fixtures/data';

class Badges extends Component {

  state = {
    data
  }
  render() {
    return (
      <div>
        <Navbar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={ confLogo } alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary"> 
              New Badge
            </a>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={ this.state.data } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Badges;
