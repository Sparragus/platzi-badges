import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Badge.css'
import pageNotFound from '../images/astronaut_404.png'

function NotFound() {
  return (
      <div className="Badges__home align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center ">
          <h1 className="text-light" >404: Page Not Found</h1>
          <button className="btn btn-primary" >
            <Link to="/Home" className="text-light text-decoration-none" >
            Go home
            </Link>
          </button>
        </div>
        <img src={pageNotFound} alt="img" style={{width: "40%"}}   />
      </div>    
  )
}

export default NotFound