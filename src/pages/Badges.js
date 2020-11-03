import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgeList from '../components/BadgesList';
import api from '../api';

class Badges extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data : undefined
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState( {
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }
  
  render() {

    if (this.state.loading === true) {
        return 'Loading...';
    }

    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={ confLogo } alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary"> 
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={ this.state.data } />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Badges;
