import React from 'react';
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
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
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img src={header} alt="logo" className="img-fluid" />

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        < Badge
                            {...this.state.form}
                            avatarUrl="https://es.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            {/* aqui pasamos como props de BadgeForm a handleChange */}
                        <BadgeForm 
                            onChange={this.handleChange} 
                            formValues={this.state.form}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default BadgeNews;