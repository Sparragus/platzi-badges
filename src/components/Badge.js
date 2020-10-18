import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={ confLogo } alt="Logo de la conferencia" />
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar" />
          <h1> Jair <br/> Aviles</h1>
        </div>
        <div>
          <p>Fullstack Developer</p>
          <p>@yajairo87</p>
        </div>
        <div>
          Platzi conf
        </div>
      </div>
    )
  }
}

export default Badge;
