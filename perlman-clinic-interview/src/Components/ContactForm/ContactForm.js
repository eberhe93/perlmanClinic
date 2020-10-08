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
import ToastMessage from '../ToastMessage/ToastMessage';
import { constants } from '../../Modules/contants';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoading: false,
      errors: [],
      validated: false,
      showToast: false,
      errorType: ''
    };

    this.userData = {
      name: '',
      email: '',
      gender: '',
      message: ''
    };

    this.getValidationErrors = this.getValidationErrors.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange(e) {
    this.userData[e.target.name] = e.target.value;
    // this.setState({ [e.target.name]: e.target.value });
  }

  setGender(e) {
    this.userData['gender'] = e.target.value;
    // this.setState({ gender: e.target.value });
  }

  getValidationErrors() {
    const errorList = [];

    for (let [key, value] of Object.entries(this.userData)) {
      if (!value) {
        errorList.push(key);
      }
    }

    // Validate emails && returns proper error message
    if (this.state.email && !validateEmail(this.state.email)) {
      errorList.push('Please enter a valid email address');
    }
    this.setState({ errors: errorList, validated: true });
    if (errorList && errorList.length === 0) {
      Api.postToSuccess(this.userData).then(res => {
        this.showLoading = false;
        console.log(res.status);
        if (res.status === 200) {
          res.json().then(data => this.showToastMessage(res.status));
        } else {
          res
            .json()
            .then(json => {
              // handle response
              console.log(json);
            })
            .catch(ex => {
              // handle errors here
              this.showToastMessage(res.status);
            });
        }
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.showLoading = true;
    this.setState({
      errors: [],
      validated: false
    });
    this.getValidationErrors();
  }

  showToastMessage(statusCode) {
    if (statusCode === 200) {
      this.setState({
        errorType: constants.toastmessages.successMessage,
        showToast: true
      });
    } else {
      this.setState({
        errorType: constants.toastmessages.errorMessage,
        showToast: true
      });
    }
    setTimeout(() => this.setState({ showToast: false, errorType: '' }), 5000);
  }
  render() {
    return (
      <div style={{ width: '50%' }}>
        <h1>Contact Us Anytime</h1>
        <form>
          <div>
            {this.userData['name'].length === 0 && this.state.validated ? (
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
            {this.userData['email'].length === 0 && this.state.validated ? (
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
            {this.userData['gender'].length === 0 && this.state.validated ? (
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
            {this.userData['message'].length === 0 && this.state.validated ? (
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
          <Button
            style={{ border: '1px green solid' }}
            onClick={this.submitForm}
          >
            Submit
          </Button>
          {this.showLoading ? <ProgressBar /> : null}
          {/* {JSON.stringify(this.state.errorType)} */}
          {this.state.showToast ? (
            <ToastMessage message={this.state.errorType} />
          ) : null}
        </form>
      </div>
    );
  }
}

export default ContactForm;
