import React, { Component } from 'react';

import './styles/BadgeEdit.css';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeEdit extends Component {

  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(
        this.props.match.params.badgeId,
        this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  componentDidMount() {
    this.fetchBadgeData();
  }

  fetchBadgeData = async e => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  render() {

    if (this.state.loading) {
      return <PageLoading />
    }

    return (
      <>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={confLogo} alt="Logo" />
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
              twitter={ this.state.form.twitter || 'twitter' }
            />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default BadgeEdit;
