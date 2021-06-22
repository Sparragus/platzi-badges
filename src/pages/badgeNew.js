import React from 'react';
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNews.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


class BadgeNews extends React.Component {

    //este es el nivel de pagina aqui inicializamos un state vacio y se le añade una propiedad llamada form que tambien tiene un objeto vacio 
    state = { form: {
        firstName:"",
        lastName:"",
        email:"",
        jobTitle:"",
        twitter:"",
    } }

    //creamos un evento llamado handleChange
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="logo" className="img-fluid" style={{width: "200px", marginLeft: "125px"}} />

                </div>
                <div className="d-flex align-items-center justify-content-around flex-wrap-reverse ">
                        < Badge
                            {...this.state.form}
                            avatarUrl="https://es.gravatar.com/avatar?d=identicon"
                            />
                        <div className="BadgeNew__form">
                            {/* aqui pasamos como props de BadgeForm a handleChange */}
                        <BadgeForm 
                            onChange={this.handleChange} 
                            formValues={this.state.form}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 

export default BadgeNews;