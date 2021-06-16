import React from 'react'
import "./styles/Badge.css"
import homeLogo from '../images/platziconf-logo.svg'

function Home() {
  return (
    <React.Fragment>
      <div className="Badges__home d-flex align-items-center justify-content-center">
       <div className="container text-light ">
          <img src={homeLogo} className="img-fluid" />
          <h2 className="fw-bold  mt-3" style={{letterSpacing: "-1px"}}>PRINT YOUR BADGES</h2>
          <p className="fw-bold">The easiest way to manage your <br/> conference</p>
          <buttton className="btn btn-primary fw-bold">Start now</buttton>
       </div>
      </div>
    </React.Fragment>
    
  )
}

export default Home
