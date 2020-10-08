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
        <Button
          style={{ height: '55%', width: '30%', border: '2px black solid' }}
        >
          Schedule Appointment
        </Button>

        <Link
          style={{ height: '55%', width: '30%', border: '2px black solid' }}
          to="/contact"
        >
          <Button>Schedule Appointment</Button>
        </Link>

        <Link
          style={{ height: '55%', width: '30%', border: '2px black solid' }}
          to="/contact"
        >
          <Button>Send Us a Message</Button>
        </Link>
      </div>
    );
  }
}

export default ButtonOptions;
