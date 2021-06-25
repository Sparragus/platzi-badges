import { Link } from 'react-router-dom'
import React from 'react'
import logoTwitter from '../icons/twitter-icon.svg'
import "./styles/Badge.css"
import Gravatar from './Gravatar'
class BadgesList extends React.Component {
  render() {

    if (this.props.badges.length === 0) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="mt-5" >No Badges were found </h3>
            <Link to="/Badges/new" className="btn btn-primary mt-3">
              Create new badge 
            </Link>
        </div>
      )
    }

    return (
      <ul className="list-unstyled d-flex flex-wrap align-itemns-center justify-content-center" >
        {this.props.badges.map(badge => {
          return(
            <Link key={badge.id}  to={`/Badges/${badge.id}/edit`} className="badge__li d-flex align-items-center shadow-sm p-2 my-1 mx-1  bg-body rounded-3 text-reset text-decoration-none">
              <li className="  d-flex justify-content-center align-items-center    ">
              <Gravatar 
                className="badge__avatar my-auto img-fluid"
                email={badge.email}
              />
              <div className="d-flex  justify-content-center flex-column" >
                <p className="fw-bold mb-0">{badge.firstName} {badge.lastName}</p>  
                <div className="d-flex">
                  <img src={logoTwitter} alt="Twitter" className="badge__logo-twitter me-2 " />
                  <p className="text-primary my-auto" >@{badge.twitter}</p>
                </div>    
                <p>{badge.jobTitle}</p>     
              </div>     
              </li>
            </Link>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList
