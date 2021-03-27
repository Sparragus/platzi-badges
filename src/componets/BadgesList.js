import React from 'react';
import '../componets/styles/BadgesList.css';

class BadgesList extends React.Component {
    render() {
        return (
            <ul className = "list-unstyled BadgesList" > {
                this.props.badges.map((badge) => {
                    return (
                        <li key = {badge.id } className = "BadgesListItem" >
                            <img src = {badge.avatarUrl} alt = "Avatar" className = "BadgesListItem__avatar" />
                            <div>
                                <div>
                                    <strong> {badge.firstName} {badge.lastName} </strong>
                                </div>
                                <div className = "Twitter__name">
                                    <div className="Twitter__logo">
                                        <i className ="bi bi-twitter"></i>@{badge.twitter}
                                    </div>
                                </div>
                                <div>{badge.jobTitle}
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
        )
    }
}

export default BadgesList;