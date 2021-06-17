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
                <img src={LogoSVG} alt="Conference logo" />
            </div>

            <div className="badge__section-name">
                <img src={avatarUrl} alt="Avatar" className="badge__avatar" />
                <p className="text-dark fs-2 lh-base">{firstName} <br/> {lastName} </p>
            </div>

            <div className="badge__section-info">
                <p className="text-dark fs-3 fw-normal">{jobTitle}</p>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={twitterSVG} alt="Logo twitter" className="badge__logo-twitter me-1" />
                    <div className="text-primary">{twitter}</div>
                </div>
            </div>

            <div className="badge__footer"> #platziconf</div>

        </div>

    }
} 

export default Badge;  //Tenemos que asegurarnos de exportar este componente
