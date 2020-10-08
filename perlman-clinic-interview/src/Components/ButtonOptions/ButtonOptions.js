import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link, Switch } from 'react-router-dom';

class ButtonOptions extends Component {
  render() {
    return (
      <div
        style={{
          width: '75%',
          height: 500,
          justifyContent: 'space-around',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto'
        }}
      >
        <a href="https://perlmanclinic.com/book-an-appointment/"
          style={{ height: '55%', width: '30%', border: '2px black solid', textDecoration:'none' }}
        >
          <Button style={{height: '100%', width: '100%'}}>Schedule Appointment</Button>
        </a>

        <a href="https://perlmanclinic.com/our-team/" style={{ height: '55%', width: '30%', border: '2px black solid', textDecoration:'none'}}>
        <Button style={{height: '100%', width: '100%'}}>
          Our Team
        </Button>
        </a>

        <Link
          style={{ height: '55%', width: '30%', border: '2px black solid', textDecoration:'none' }}
          to="/contact"
        >
          <Button style={{height: '100%', width: '100%'}}>Send Us a Message</Button>
        </Link>
      </div>
    );
  }
}

export default ButtonOptions;
