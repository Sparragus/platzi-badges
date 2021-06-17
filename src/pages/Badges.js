import React from 'react'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import { Link, } from 'react-router-dom' 
import './styles/Badge.css'

class Badges extends React.Component{

  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        firstName: "Freda",
        lastName: "Grady",
        email: "Leann_Berge@gmail.com",
        jobTitle: "Legacy Brand Director",
        twitter: "FredaGrady22221-7573",
        avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        firstName: "Major",
        lastName: "Rodriguez",
        email: "Ilene66@hotmail.com",
        jobTitle: "Human Research Architect",
        twitter: "ajorRodriguez61545",
        avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        firstName: "Daphney",
        lastName: "Torphy",
        email: "Ron61@hotmail.com",
        jobTitle: "National Markets Officer",
        twitter: "DaphneyTorphy96105",
        avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
      }
    ]
  }

  render(){
    return (
      <React.Fragment>  
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="Conf logo" className="Badges__conf-logo" />
              {/* <div className=" container d-flex">
                <input type="text" className="form-control form-control-sm Badges__input " placeholder="Search for Badges" />
                <button className="btn btn-primary">Search for Badge</button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            {/* utilizamos link para que no recargue la pagina completa y a diferencia del elemento ancla en lugar de utilizar href utliza to para especificar a que direccion se movera  */}
            <Link to="/Home/Badges/new" className="btn btn-primary">
              New Bagdes 
            </Link>
          </div>
          
          <div>
            <div className="Badges__container" >
              <BadgesList badges={this.state.data} />   
            </div>
          </div>
          
        </div>


      </React.Fragment>
    )
  }
}

export default Badges


// React.Fragment es una herramienta la cual te ayuda a reemplazar esos div vacios que no reciben props, ni className ni ningun otro elemento a utilizar entonces esta herramienta los reemplaza y a la hor de renderizar ya no aparece el React.Fragment ya que solo es un elemento imaginario par el DOM 