import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgeList from '../components/BadgesList';

import data from '../fixtures/data';

class Badges extends Component {

  state = {
    data
  }
  render() {
    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={ confLogo } alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary"> 
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={ this.state.data } />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Badges;
