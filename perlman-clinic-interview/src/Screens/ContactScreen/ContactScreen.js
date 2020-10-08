import React, { Component } from 'react';
import CompanyInformation from '../../Components/CompanyInformation/CompanyInformation';
import ContactForm from '../../Components/ContactForm/ContactForm';
import PerlmanOffice from '../../Assets/perlman-office.png';
import { styles } from '../../Modules/styles';
import { constants } from '../../Modules/contants';

class ContactScreen extends Component {
  render() {
    return (
      <div style={styles.bottomMargin100}>
        <img src={PerlmanOffice} style={styles.contactScreenContainer} />
        <h1>{constants.contactScreenHeader.text}</h1>
        <div style={styles.flexRowContainer}>
          <div style={styles.contactScreenBorder}>
            <CompanyInformation />
          </div>
          <div style={styles.contactFormOuterContainer}>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactScreen;
