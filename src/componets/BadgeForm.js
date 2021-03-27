import React from 'react';

class BadgeForm extends React.Component {
    // state = {};

    // handleChange = (e) => {
    //    this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    handleClick = e => {
        console.log("Buttons was clicked");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submit");
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Frist Name</label>
                        <input
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName" 
                        value={this.props.formValues.firstName} />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName" 
                        value={this.props.formValues.lastName} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="email"
                        name="email" 
                        value={this.props.formValues.email} />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle" 
                        value={this.props.formValues.jobTitle} />
                    </div>
                    
                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="tiwetter" 
                        value={this.props.formValues.tiwtter} />
                    </div>
                        <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;