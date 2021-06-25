import React from 'react';
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNews.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api'
import { Link } from 'react-router-dom';
import PageLoading from '../components/Loader'


class BadgeNews extends React.Component {

    //este es el nivel de pagina aqui inicializamos un state vacio y se le añade una propiedad llamada form que tambien tiene un objeto vacio 
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: null, 
            form: {
                firstName:"",
                lastName:"",
                email:"",
                jobTitle:"",
                twitter:"",
            } 
        }
    
    }
    //creamos un evento llamado handleChange
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })    

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false, })  
            this.props.history.push('/Home/Badges')
            
        } catch (error) {
            this.setState({ loading: false, error: error })    
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">    
                    <Link to="/Home/Badges/" className="Badge_logo">
                        <img src={header} alt="logo" className="img-fluid Badge_logo Badge_logo--space "/>
                    </Link>                
                </div>
                <div className="d-flex align-items-center justify-content-around flex-wrap-reverse" style={{maxWidth: "1366px", margin: "0 auto",}}>
                        < Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            twitter={this.state.form.twitter || 'twitter'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            email={this.state.form.email || 'EMAIL'}
                            />
                        <div className="BadgeNew__form">
                            {/* aqui pasamos como props de BadgeForm a handleChange */}
                        <p className="fs-3 fw-bold text-center change-txt" >NEW  ATTENDANT</p>
                        <BadgeForm 
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 

export default BadgeNews;