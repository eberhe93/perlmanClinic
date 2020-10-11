import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@material-ui/core/';
import Api from '../../Modules/api';
import ProgressBar from '../ProgressBar/ProgressBar';
import ToastMessage from '../ToastMessage/ToastMessage';
import { constants } from '../../Modules/contants';
import { styles } from '../../Modules/styles';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoading: false,
      errors: [],
      validated: false,
      showToast: false,
      errorType: '',
      userData: {
        name: '',
        email: '',
        gender: '',
        message: ''
      }
    };

    this.getValidationErrors = this.getValidationErrors.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // handling text change of input
  handleInputChange(e) {
    const { userData } = { ...this.state };
    const currentState = userData;
    const { name, value } = e.target;
    currentState[name] = value;

    this.setState({ userData: currentState });
  }

  // sending API request
  submitForm() {
    this.setState({ errors: [], validated: true });

    // timeout to simulate request processing time
    setTimeout(() => {
      Api.postToSuccess(this.state.userData).then(res => {
        this.showLoading = false;
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
              this.showToastMessage(res.status);
            });
        }
      });
    }, 3000);
  }

  // Checking that all fields have been filled out
  getValidationErrors() {
    const errorList = [];

    for (let [key, value] of Object.entries(this.state.userData)) {
      if (!value) {
        errorList.push(key);
      }
    }

    this.setState({ validated: true });

    if (errorList.length === 0) {
      this.setState({
        errors: [],
        validated: false
      });
      this.showLoading = true;
      this.submitForm();
    }
  }

  // Showing toast message after API call
  showToastMessage(statusCode) {
    if (statusCode === 200) {
      this.setState({
        errorType: constants.toastmessages.successMessage,
        showToast: true,
        errors: [],
        validated: false,
        userData: {
          name: '',
          email: '',
          gender: '',
          message: ''
        }
      });
    } else {
      this.setState({
        errorType: constants.toastmessages.errorMessage,
        showToast: true
      });
    }

    // Controlling time toast message is shown on screen
    setTimeout(() => this.setState({ showToast: false, errorType: '' }), 5000);
  }
  render() {
    return (
      <div
        style={styles.contactFormContainer}
      >
        <form style={styles.contactFormWidth}>
          <div>
            {this.state.userData['name'].length === 0 &&
            this.state.validated ? (
              <ErrorMessage name="name" errors={this.state.errors} />
            ) : null}
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Name"
              name="name"
              value={this.state.userData['name']}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div style={styles.contactInputMarginTop}>
            {this.state.userData['email'].length === 0 &&
            this.state.validated ? (
              <ErrorMessage name="email" errors={this.state.errors} />
            ) : null}
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Email"
              value={this.state.userData['email']}
              name={'email'}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div style={styles.contactInputMarginTop}>
            {this.state.userData['gender'].length === 0 &&
            this.state.validated ? (
              <ErrorMessage name="gender" errors={this.state.errors} />
            ) : null}

            <FormControl component="fieldset">
              <FormLabel
                style={styles.contactGenderMargin}
                component="legend"
              >
                Gender
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                onChange={e => this.handleInputChange(e)}
                value={this.state.userData['gender']}
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
          <div style={styles.contactMessageMargin}>
            {this.state.userData['message'].length === 0 &&
            this.state.validated ? (
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
              value={this.state.userData['message']}
            />
          </div>
          <Button
            style={styles.greenBorder}
            onClick={this.getValidationErrors}
          >
            Submit
          </Button>
          {this.showLoading ? <ProgressBar /> : null}
          {this.state.showToast ? (
            <ToastMessage message={this.state.errorType} />
          ) : null}
        </form>
      </div>
    );
  }
}

export default ContactForm;
