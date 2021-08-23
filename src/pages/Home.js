/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Badge.css"
import homeLogo from '../images/platziconf-logo.svg'
import platziConf from '../images/astronauts.svg'

function Home() {
  return (
    <React.Fragment>
      <div className="Badges__home ">
        <div className="d-flex align-items-center justify-content-around flex-wrap-reverse" >
          <div className="d-flex flex-column align-items-center text-light justify-content-center position-logo">
            <img src={homeLogo} className="img-fluid Badges__conference-logo" />
            <p className="fw-bold fs-4  mt-3" style={{letterSpacing: "-1px"}}>PRINT YOUR BADGES</p>
            <p className="fw-bold">The easiest way to manage your <br/> conference</p>
            <buttton className="btn btn-primary fw-bold">
              <Link to="/Badges" className="text-decoration-none text-light">Start now</Link>
            </buttton>
          </div>
          <img src={platziConf} className="Badges__astronauts-logo" />
        </div>
      </div>
    </React.Fragment>
    
  )
}

export default Home
