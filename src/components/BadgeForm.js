import React from 'react';

class BadgeForm extends React.Component {
  // state = {}
  // handleChange = e => this.setState({[e.target.name]: e.target.value})
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group ">
            <label className="my-1">First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              // placeholder="Inroduce your name"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label className="my-1">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              // placeholder="Inroduce your last name"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label className="my-1">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              // placeholder="name@example.com"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label className="my-1">Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              // placeholder="Developer web"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label className="my-1">Twitter</label>
              <input 
                type="text"
                class="form-control"
                // placeholder="@username"
                name="twitter"
                onChange={this.props.onChange}
                value={this.props.formValues.twitter}
              />
          </div>
          <button className="btn btn-primary mt-2">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;

// al agregarle al input el "value" lo que hacemos es que pase de "no controlado" a "controlado" esto nos sirve debido que a medida qu nuestra aplicacion vaya creciendo la informacion de los inputs se guarda en 2 lugares distintos a la vez y por ese motivo es mejor tener los inputs como "controlados"