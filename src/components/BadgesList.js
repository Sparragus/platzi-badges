import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BadgesListItem from '../components/BadgesListItem';

class BadgesList extends Component {
  render() {

    const badgesList = this.props.badges.slice(0).reverse();

    if (badgesList.length === 0) {
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
          {badgesList.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none"
                      to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default BadgesList;
