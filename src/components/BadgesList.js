import React from 'react'
import logoTwitter from '../icons/twitter-icon.svg'
import { Link } from 'react-router-dom'
import "./styles/Badge.css"

class BadgesList extends React.Component {
  render() {

    if (this.props.badges.length === 0) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="mt-5" >No Badges were found </h3>
            <Link to="/Home/Badges/new" className="btn btn-primary mt-3">
              Create new badge 
            </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled" >
        {this.props.badges.map(badge => {
          return(
            <li key={badge.id} className="d-flex shadow-sm p-2 mb-3  bg-body rounded-3">
                  <img src={badge.avatarUrl} alt="Avatar" className="badge__avatar my-auto img-fluid"  />
                  <div className="d-flex  justify-content-center flex-column" >
                    <p className="fw-bold mb-0">{badge.firstName} {badge.lastName}</p>  
                    <div className="d-flex">
                      <img src={logoTwitter} alt="Twitter" className="badge__logo-twitter me-2 " />
                      <p className="text-primary my-auto" >@{badge.twitter}</p>
                    </div>    
                    <p>{badge.jobTitle}</p>     
                  </div>     
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList
