import React from 'react';
import "./styles/Badge.css"
import confLogo from './images/badge-header.svg';


class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://s.gravatar.com/avatar/4133e43f063b9e916b24835664fa19e4?s=80" alt="Avatar" />
                <h1>Brusa <br/> jose</h1>
            </div>
            <div className="Badge__section-info">
                <h3>Frontend  <br/> Engineer</h3>
                <div>@brusa_jose</div>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
    }
}

export default Badge;