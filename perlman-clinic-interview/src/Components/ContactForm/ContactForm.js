import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { validateEmail } from '../../Modules/form-validation';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextareaAutosize,
  Button
} from '@material-ui/core/';
import Api from '../../Modules/api';
import ProgressBar from '../ProgressBar/ProgressBar';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      gender: '',
      message: ''
    };

    this.showLoading = false;

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

    for (let [key, value] of Object.entries(this.state)) {
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
    Api.postToSuccess(this.state);
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
    console.log(this.state);
    return (
      <div style={{ width: '50%' }}>
        <h1>Contact Us Anytime</h1>
        <form>
          <div>
            {this.state.name.length === 0 && this.state.validated ? (
              <ErrorMessage name="name" errors={this.state.errors} />
            ) : null}
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Name"
              name="name"
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div style={{ marginTop: 50 }}>
            {!this.state.email && this.state.validated ? (
              <ErrorMessage name="email" errors={this.state.errors} />
            ) : null}
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Email"
              name="email"
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div style={{ marginTop: 50 }}>
            {!this.state.gender && this.state.validated ? (
              <ErrorMessage name="gender" errors={this.state.errors} />
            ) : null}

            <FormControl component="fieldset">
              <FormLabel
                style={{ marginTop: 10, marginBottom: 20 }}
                component="legend"
              >
                Gender
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                onChange={e => this.setGender(e)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div style={{ marginTop: 50, marginBottom: 10 }}>
            {!this.state.message && this.state.validated ? (
              <ErrorMessage name="message" errors={this.state.errors} />
            ) : null}

            <TextField
              onChange={e => this.handleInputChange(e)}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              name="message"
              variant="outlined"
              fullWidth={true}
            />
          </div>
        {this.showLoading ? <ProgressBar /> : null}
          <Button style={{border:'1px green solid'}} onClick={this.submitForm}>Submit</Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
