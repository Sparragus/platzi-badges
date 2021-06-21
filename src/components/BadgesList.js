import React from 'react'
import logoTwitter from '../icons/twitter-icon.svg'
import "./styles/Badge.css"

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return(
            <li key={badge.id}>
              <div className="d-flex shadow-sm p-2 mb-3 bg-body rounded-3">
                  <img src={badge.avatarUrl} alt="Avatar" className="badge__avatar my-auto" style={{width: "65px", height:"65px"}} />
                  <div className="d-flex  justify-content-center flex-column" >
                    <p className="fw-bold mb-0">{badge.firstName} {badge.lastName}</p>  
                    <div className="d-flex">
                      <img src={logoTwitter} alt="Twitter" className="badge__logo-twitter me-2 " />
                      <p className="text-primary my-auto">@{badge.twitter}</p>
                    </div>    
                    <p>{badge.jobTitle}</p>     
                  </div>     
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList
