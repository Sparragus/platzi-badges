import React, { useState, useEffect } from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

const BadgeEdit = (props) => {
  //UseState hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  //UseEffect hooks
  useEffect(() => {
    fetchData();
  }, []);

  //Methodes
  const fetchData = async (e) => {
    setLoading(true);
    setError(null);

    try {
      const data = await api.badges.read(props.match.params.badgeId);
      setLoading(false);
      setForm(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.badges.update(props.match.params.badgeId, form);

      props.history.push('/badges');
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  if (loading) {
    return <PageLoading />;
  }

  return (
    <React.Fragment>
      <div className="BadgeEdit__hero">
        <img
          className="BadgeEdit__hero-image img-fluid"
          src={header}
          alt="Logo"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={form.firstName || 'FIRST_NAME'}
              lastName={form.lastName || 'LAST_NAME'}
              twitter={form.twitter || 'twitter'}
              jobTitle={form.jobTitle || 'JOB_TITLE'}
              email={form.email || 'EMAIL'}
              avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            />
          </div>

          <div className="col-6">
            <h1>Edit Attendant</h1>
            <BadgeForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              formValues={form}
              error={error}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BadgeEdit;
