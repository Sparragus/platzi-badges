import React, { Component } from 'react';

import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading:true, error:null });

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState({ loading: false, data });
    } catch (error) {
        this.setState({ loading: false, error });
    }
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }

  handleClosModal = e => {
    this.setState({ modalIsOpen: false })
  }

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(
        this.props.match.params.badgeId
      );

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleClosModal}
        onDeleteBadge={this.handleDeleteBadge}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data} />
    );
  }
}

export default BadgeDetailsContainer;
