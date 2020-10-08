import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { validateEmail } from '../../Modules/form-validation';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        name: '',
        email: '',
        gender: '',
        textarea: ''
      },
      errors: [],
      validated: false
    };

    this.getValidationErrors = this.getValidationErrors.bind(this);
    this.submitForm = this.submitForm.bind(this);
    
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setGender(e) {
    this.setState({ gender: e.target.value });
  }

  getValidationErrors() {
    const errorList = [];

    for (let [key, value] of Object.entries(this.state.formFields)) {
      if (!value) {
        errorList.push(key);
      }
    }

    // Validate emails && returns proper error message
    if (this.state.email && !validateEmail(this.state.email)) {
      errorList.push('Please enter a valid email address');
    }
    console.log(this.state.errors);
    this.setState({ errors: errorList, validated: true });
    //   console.log(errorList.length > 0 ? errorList : undefined);
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      errors: [],
      validated: false
    });
    this.getValidationErrors();
  }
  render() {
    return (
      <div>
        <h1> Contact Form </h1>

        <form>
          {this.state.formFields.name.length === 0 && this.state.validated ? (
            <ErrorMessage name="name" errors={this.state.errors} />
          ) : null}
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={e => this.handleInputChange(e)}
            />
          </label>
          {!this.state.formFields.email && this.state.validated ? (
            <ErrorMessage name="email" errors={this.state.errors} />
          ) : null}
          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={e => this.handleInputChange(e)}
            />
            {!this.state.formFields.gender && this.state.validated ? (
              <ErrorMessage name="gender" errors={this.state.errors} />
            ) : null}
          </label>
          <div onChange={e => this.setGender(e)}>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
          </div>
          {!this.state.formFields.textarea && this.state.validated ? (
            <ErrorMessage name="textarea" errors={this.state.errors} />
          ) : null}
          <textarea onChange={e => this.handleInputChange(e)} name="textarea">
            Textarea...
          </textarea>
          <button onClick={this.submitForm}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
