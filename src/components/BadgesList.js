import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BadgesListItem from '../components/BadgesListItem';

class BadgesList extends Component {
  render() {

    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No encontramos ningún badge</h3>
          <Link className="btn btn-primary" to="/badges/new"></Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default BadgesList;
