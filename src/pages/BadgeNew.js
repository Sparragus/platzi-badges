import React, { Component } from 'react';

import './styles/BadgeNew.css';
import confLogo from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fliud" src={ confLogo } alt="Logo" />
        </div>
        <div className="container"> 
          <div className="row">
            <div className="col">
            <Badge 
              avatar="https://www.gravatar.com/avatar?d=identicon"
              firstName="Jair Israel" 
              lastName="Avilés Eusebio" 
              jobTitle = "Fullstack Engineer" 
              twitter="yajairo87" />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default BadgeNew;
