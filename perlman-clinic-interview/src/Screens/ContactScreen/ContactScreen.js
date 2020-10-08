import React, { Component } from 'react';
import CompanyInformation from '../../Components/CompanyInformation/CompanyInformation';
import ContactForm from '../../Components/ContactForm/ContactForm';
import PerlmanOffice from '../../Assets/perlman-office.png';

class ContactScreen extends Component {
  render() {
    return (
      <div style={{marginBottom:100}}>
        <img
          src={PerlmanOffice}
          style={{ backgroundColor: 'black', width: '100%', height: 500 }}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '50%' }}>
            <CompanyInformation />
          </div>
          <div style={{ width: '50%' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactScreen;
