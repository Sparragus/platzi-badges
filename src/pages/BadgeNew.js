import React, { Component } from 'react';

import './styles/BadgeNew.css';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class BadgeNew extends Component {

  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handkeSubmit = async e => {
    e.preventDefault();

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    return (
      <>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={confLogo} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <Badge
              avatar="https://www.gravatar.com/avatar?d=identicon"
              email={ this.state.form.email || 'Email' }
              firstName={ this.state.form.firstName || 'First Name' }
              lastName={ this.state.form.lastName || 'Last Name' }
              jobTitle = { this.state.form.jobTitle || 'Job Title' }
              twitter={ this.state.form.twitter || '@twitter' }
            />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default BadgeNew;
