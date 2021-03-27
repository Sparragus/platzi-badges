import React from 'react';
import './styles/BadgeNew.css';
import header from './images/badge-header.svg';
import NavBar from '../componets/NavBar';
import Badge from './Badge';



class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-flud" src={header} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                            firstName="jose" 
                            lastName="Brusa" 
                            jobTitle="Frotend Engineer" 
                            twitter="Brusa_jose" 
                            avatarUrl="https://s.gravatar.com/avatar/4133e43f063b9e916b24835664fa19e4?s=80" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default BadgeNew;