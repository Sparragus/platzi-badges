import React from 'react';

const BadgeForm = (props) => {
  const handleClick = (e) => {
    console.log('Button was clicked');
  };

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="firstName"
            value={props.formValues.firstName}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="lastName"
            value={props.formValues.lastName}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="email"
            name="email"
            value={props.formValues.email}
          />
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="jobTitle"
            value={props.formValues.jobTitle}
          />
        </div>

        <div className="form-group">
          <label>Twitter</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="twitter"
            value={props.formValues.twitter}
          />
        </div>

        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>

        {props.error && <p className="text-danger">{props.error.message}</p>}
      </form>
    </div>
  );
};

export default BadgeForm;
