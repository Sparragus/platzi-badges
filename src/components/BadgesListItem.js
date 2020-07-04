import React from 'react';
import Gravatar from './Gravatar';
const BadgesListItem = (props) => {
  return (
    <div className="BadgesListItem">
      <Gravatar className="BadgesListItem__avatar" email={props.badge.email} />

      <div>
        <strong>
          {props.badge.firstName} {props.badge.lastName}
        </strong>
        <br />@{props.badge.twitter}
        <br />
        {props.badge.jobTitle}
      </div>
    </div>
  );
};

export default BadgesListItem;
