import React from 'react';

class BadgeForm extends React.Component {

  handleChange = e => {
    this.setState({FirstName: e.target.value})
  }

  handleClick = () => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="Inroduce your name"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary mt-2">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;