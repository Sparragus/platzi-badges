import React from 'react';

import LogoSVG from '../images/badge-header.svg';
// import twitterSVG from '../icons/twitter-icon.svg'
import "./styles/Badge.css"

class Badge extends React.Component {
    render() {
        return <div className="badge">
            <div className="badge__header">
                <img src={LogoSVG} alt="Logo de la conferencia" />
            </div>

            <div className="badge__section-name">
                <img src="https://es.gravatar.com/avatar?d=identicon" alt="Avatar" className="badge__avatar" />
                <h1>{firstName} <br/> {lastName} </h1>
            </div>

            <div className="badge__section-info">
                <h3>Frontend Engineer</h3>
                <div> @nc_cvargas</div>
            </div>

            <div className="badge__footer"> #platziconf</div>

        </div>

    }
} 

export default Badge;  //Tenemos que asegurarnos de exportar este componente
