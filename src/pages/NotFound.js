import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Badge.css'

function NotFound() {
  return (
      <div className="Badges__home d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-light" >404: Page Not Found</h1>
        <button className="btn btn-primary" >
          <Link to="/Home" className="text-light text-decoration-none" >
          Go home
          </Link>
        </button>
      </div>    
  )
}

export default NotFound