import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    gender: '',
    textarea: ''
  };

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setGender(e) {
    this.setState({ gender: e.target.value});
  }

  submitForm(e){
    e.preventDefault();
      alert(`submitted form for ${this.state.name}`)
  }
  render() {
    console.log(this.state);
    return (
      <div style={{}}>
        <h1> Contact Form </h1>

        <form onSubmit={this.submitForm}>
          <label>
            Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={e => this.handleInputChange(e)}
            />
          <label>
            email:
            <input
              type="email"
              name="email"
              onChange={e => this.handleInputChange(e)}
            />
          </label>
          <div onChange={e => this.setGender(e)}>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
          </div>
          <textarea>Textarea...</textarea>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ContactForm;