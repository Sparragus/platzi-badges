import React from 'react';

import LogoSVG from '../images/badge-header.svg';
import "./styles/Badge.css"

class Badge extends React.Component {
    render() {
        return <div className="badge">
            <div className="badge__header">
                <img src={LogoSVG} alt="Logo de la conferencia" />
            </div>

            <div className="badge__section-name">
                <img src="https://es.gravatar.com/avatar?d=identicon" alt="Avatar" className="badge__avatar" />
                <h1>CARLOS <br/> VARGAS </h1>
            </div>

            <div className="badge__section-info">
                <p>Frontend Engineer</p>
                <p>@nc_cvargas</p>
            </div>

            <div className="badge__footer"> #platziconf</div>

        </div>

    }
} 

export default Badge; 
