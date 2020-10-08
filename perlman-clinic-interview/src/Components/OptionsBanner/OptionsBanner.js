import React, { Component } from 'react';

class OptionsBanner extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'black', width: '100%', height: 200 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}
        >
          <h1 style={{ color: 'white', justifyContent: 'flex-start' }}>
            Contact Us
          </h1>
          <p style={{ color: 'wheat', width: '50%', margin: '0 auto' }}>
            Get in touch with the right people at Perlman Clinic. Email a member
            of our customer care team, marketing team, technical team or HR team
            or schedule an appointment.
          </p>
        </div>
      </div>
    );
  }
}

export default OptionsBanner;
