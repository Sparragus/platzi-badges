import React from 'react';
import './styles/BadgeNew.css';
import header from '../componets/images/badge-header.svg';
import NavBar from '../componets/NavBar';
import Badge from '../componets/Badge';
import BadgeForm from '../componets/BadgeForm';



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
                            <div className="col-6">
                                <BadgeForm />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}


export default BadgeNew;