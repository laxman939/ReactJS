import React, { Component } from "react";

export class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };
  state = this.initialState; //To Insert newly entered data into state using form

  handleChange = (event) => {
    const { name, value } = event.target; //Destructuring

    this.setState({
      [name]: value,
    }); //Storing all values as arrays based on and update state using setState
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;

/*submitForm() that will call that(handleSubmit) function, and pass 
the Form state through as the character parameter we defined earlier. 
It will also reset the state to the initial state, to clear the form after submit. */
