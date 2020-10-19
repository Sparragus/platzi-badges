import React, { Component } from 'react';

import BadgesListItem from '../components/BadgesListItem';

class BadgesList extends Component {
  render() {
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
