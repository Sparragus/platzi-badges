import React from 'react'
import Navbar from '../components/Navbar'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

class Badges extends React.Component{

  render(){
    return (
      <div>  
        <Navbar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="Conf logo" className="Badges__conf-logo" />
              <div className="container">
              <input type="text" className="form-control form-control-sm Badges__input " placeholder="Search for Badges" />
              <button className="btn text-color">Search for Badge</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default Badges