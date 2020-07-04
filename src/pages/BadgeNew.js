import React, { useState } from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

const BadgeNew = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.badges.create(form);
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

  return (
    <React.Fragment>
      <div className="BadgeNew__hero">
        <img
          className="BadgeNew__hero-image img-fluid"
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
            <h1>New Attendant</h1>
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

export default BadgeNew;

// class BadgeNew extends React.Component {
//   state = {
//     loading: false,
//     error: null,
//     form: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       jobTitle: '',
//       twitter: '',
//     },
//   };

//   handleChange = e => {
//     this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   handleSubmit = async e => {
//     e.preventDefault();
//     this.setState({ loading: true, error: null });

//     try {
//       await api.badges.create(this.state.form);
//       this.setState({ loading: false });

//       this.props.history.push('/badges');
//     } catch (error) {
//       this.setState({ loading: false, error: error });
//     }
//   };

//   render() {
//     if (this.state.loading) {
//       return <PageLoading />;
//     }

//     return (
//       <React.Fragment>
//         <div className="BadgeNew__hero">
//           <img
//             className="BadgeNew__hero-image img-fluid"
//             src={header}
//             alt="Logo"
//           />
//         </div>

//         <div className="container">
//           <div className="row">
//             <div className="col-6">
//               <Badge
//                 firstName={this.state.form.firstName || 'FIRST_NAME'}
//                 lastName={this.state.form.lastName || 'LAST_NAME'}
//                 twitter={this.state.form.twitter || 'twitter'}
//                 jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
//                 email={this.state.form.email || 'EMAIL'}
//                 avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
//               />
//             </div>

//             <div className="col-6">
//               <h1>New Attendant</h1>
//               <BadgeForm
//                 onChange={this.handleChange}
//                 onSubmit={this.handleSubmit}
//                 formValues={this.state.form}
//                 error={this.state.error}
//               />
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default BadgeNew;
