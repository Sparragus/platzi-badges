import React from 'react';
import './styles/BadgeNew.css';
import header from '../componets/images/badge-header.svg';
import NavBar from '../componets/NavBar';
import Badge from '../componets/Badge';
import BadgeForm from '../componets/BadgeForm';



class BadgeNew extends React.Component {
    state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
      },
    };
  
    handleChange = e => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      });
    };
  
    render() {
      return (
        <div>
          <NavBar />
          <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="Logo" />
          </div>
  
          <div className="container">
            <div className="row">
              <div className="col">
                <Badge
                  firstName={this.state.form.firstName}
                  lastName={this.state.form.lastName}
                  twitter={this.state.form.twitter}
                  email={this.state.form.email}
                  jobTitle={this.state.form.jobTitle}
                  avatarUrl="https://s.gravatar.com/avatar/4133e43f063b9e916b24835664fa19e4?s=80"
                />
              </div>
  
              <div className="col-6">
                <BadgeForm
                  onChange={this.handleChange}
                  formValues={this.state.form}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default BadgeNew;