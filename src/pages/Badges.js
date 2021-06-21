import React from "react";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import "./styles/Badge.css";
import api from '../api'
import NotFound from './NotFound'

class Badges extends React.Component {
  /*
  ciclo de vida de un componente
  debemos recordar que el constructor recibe props los cuales estaremos utilizando luego para crear nuestra super clase
  En el constructor es el mejor lugar para inicializar el state pero no lo puedo llamar solo como state tiene que ser this.state

  constructor(props) {
    super(props);
    console.log("1. constructor");

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        datos 
      });
    }, 1000);
  }
  El componentDidUpdate recibe 2 argumentos el primero es los props que teniamos anteriormente y el otro es el state que teniamos antes
  componentDidUpdate(prevProps, prevState) {
    console.log("5 componentDidUpdate()");
    console.log({
      prevProps: prevProps,
      PrevState: prevState,
    });
  
    console.log({
      props: this.props,
      state: this.state,
    });
  }
  
  componentWillUnmount() {
    console.log(" 6. componentWillUnmount()");
    clearTimeout(this.timeoutId);
  }
*/

  state = {
    loading: true,
    error: null,
    data: undefined,
  }
  

  componentDidMount () {
    this.fetchData()
  }

  fetchData=  async() => {
    this.setState({loading:true, error: null,})

    try {
      const data = await api.badges.list()
      this.setState ({loading:false, data:data })
    } catch (error) {
      this.setState ({loading:false, error: error, })
    }

  }

  render() {

    if (this.state.loading === true) {
      return (
        <div className="d-flex align-items-center justify-content-center mt-5" >
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div> 
      )
    }

    if (this.state.error) {
      return (
        <NotFound />
      )
    }
    

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                src={confLogo}
                alt="Conf logo"
                className="Badges__conf-logo"
              />
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
              New Bagde
            </Link>
          </div>

          <div>
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

// React.Fragment es una herramienta la cual te ayuda a reemplazar esos div vacios que no reciben props, ni className ni ningun otro elemento a utilizar entonces esta herramienta los reemplaza y a la hor de renderizar ya no aparece el React.Fragment ya que solo es un elemento imaginario par el DOM
