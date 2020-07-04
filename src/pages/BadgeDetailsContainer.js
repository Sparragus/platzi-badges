import React, { useState, useEffect } from 'react';

import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

const BadgeDetailsContainer = (props) => {
  //useState
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  //Methodes
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.badges.read(props.match.params.badgeId);
      setData(data);
      setLoading(false);
      console.log('data_fetch', data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleOpenModal = (e) => {
    setModalIsOpen(true);
  };

  const handleCloseModal = (e) => {
    setModalIsOpen(false);
  };

  const handleDeleteBadge = async (e) => {
    setLoading(true);
    setError(null);

    try {
      await api.badges.remove(props.match.params.badgeId);
      setLoading(false);
      props.history.push('/badges');
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  if (loading) {
    return <PageLoading />;
  }

  if (error) {
    return <PageError error={error} />;
  }

  return (
    <div>
      <BadgeDetails
        onCloseModal={handleCloseModal}
        onOpenModal={handleOpenModal}
        modalIsOpen={modalIsOpen}
        onDeleteBadge={handleDeleteBadge}
        badge={data}
      />
    </div>
  );
};

export default BadgeDetailsContainer;
