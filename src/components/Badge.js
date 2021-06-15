import React from 'react';

import LogoSVG from '../images/badge-header.svg';
import twitterSVG from '../icons/twitter-icon.svg'
import "./styles/Badge.css"

class Badge extends React.Component {
    render() {

        const {
            firstName,
            lastName,
            jobTitle,
            twitter,
            avatarUrl,
        } = this.props;


        return <div className="badge">
            <div className="badge__header">
                <img src={LogoSVG} alt="Logo de la conferencia" />
            </div>

            <div className="badge__section-name">
                <img src={avatarUrl} alt="Avatar" className="badge__avatar" />
                <h1>{firstName} <br/> {lastName} </h1>
            </div>

            <div className="badge__section-info">
                <h3 className="text-dark">{jobTitle}</h3>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={twitterSVG} alt="Logo twitter" className="badge__logo-twitter me-1" />
                    <div className="text-dark"> @{twitter}</div>
                </div>
            </div>

            <div className="badge__footer"> #platziconf</div>

        </div>

    }
} 

export default Badge;  //Tenemos que asegurarnos de exportar este componente
