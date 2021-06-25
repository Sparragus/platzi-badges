import React from 'react';
import header from '../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api'
import { Link } from 'react-router-dom';
import PageLoading from '../components/Loader'


class BadgeEdit extends React.Component {

    //este es el nivel de pagina aqui inicializamos un state vacio y se le añade una propiedad llamada form que tambien tiene un objeto vacio 
    constructor(props) {
        super(props)
        this.state = { 
            loading: true,
            error: null, 
            form: {
                firstName:"",
                lastName:"",
                email:"",
                jobTitle:"",
                twitter:"",
            },
            vstyle: {
                ds: "none",
            }            

        }
    
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, form: data})
        } catch (error) {
            this.setState({loading: false, error: error,})
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
            await api.badges.update(this.props.match.params.badgeId,this.state.form)
            this.setState({ loading: false, })  
            this.props.history.push('/Home/Badges')
            
        } catch (error) {
            this.setState({ loading: false, error: error })    
        }
    }

    handleDelete = async e => {
        e.preventDefault()
        this.setState({ loading: false, error: null })    

        try {
            await api.badges.remove(this.props.match.params.badgeId)
            this.setState({ loading: false, })  
            this.props.history.push('/Home/Badges')
            console.log("you`ve clicked");    
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
                <div className="BadgeEdit__hero">    
                    <Link to="/Home/Badges/" className="BadgeEdit_logo">
                        <img src={header} alt="logo" className="img-fluid BadgeEdit_logo Badge_logo--space "/>
                    </Link>
                    <div className="BadgeEdit__position-action" >
                        <p className="text-light text-uppercase  mb-1" style={{letterSpacing: "-1px", fontWeight: 'bold', fontSize: "1.8rem",}}  >{this.state.form.firstName} {this.state.form.lastName}</p>  
                        <div className="d-flex align-items-center justify-content-center" >
                        <button className="btn btn-primary mx-3" onClick={()=> { this.setState({vstyle: {ds: "flex",}}) }} >Edit</button>              
                        <button className="btn btn-danger mx-3" onClick={this.handleDelete} >Delete</button>  
                        </div>
                    </div>            
                </div>
                <div className="d-flex align-items-center justify-content-around flex-wrap-reverse" style={{maxWidth: "1366px", margin: "0 auto",}}>
                        < Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            twitter={this.state.form.twitter || 'twitter'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            email={this.state.form.email || 'EMAIL'}
                            />
                        <div className="BadgeEdit__form" style={{display: this.state.vstyle.ds,}}>
                            {/* aqui pasamos como props de BadgeForm a handleChange */}                        
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

export default BadgeEdit;