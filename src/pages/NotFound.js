import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Badge.css'
import pageNotFound from '../images/astronaut_404.png'

function NotFound() {
  return (
      <div className="Badges__home align-items-center justify-content-center flex-wrap-reverse">
        <div className="d-flex flex-column align-items-center position-div" >
          <h1 className="text-light" >404: Page Not Found</h1>
          <button className="btn btn-primary" >
            <Link to="/" className="text-light text-decoration-none" >
            Go home
            </Link>
          </button>
        </div>
        <img src={pageNotFound} alt="img" className="img-fluid"/>
      </div>    
  )
}

export default NotFound