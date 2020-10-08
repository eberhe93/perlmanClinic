import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styles } from '../../Modules/styles';

const ButtonOptions = () => {
  return (
    <div style={styles.squareButtonContainer}>
      <a
        href="https://perlmanclinic.com/book-an-appointment/"
        style={styles.squareButtonHref}
      >
        <Button style={styles.squareButtonWidth}>Schedule Appointment</Button>
      </a>

      <a
        href="https://perlmanclinic.com/our-team/"
        style={styles.squareButtonHref}
      >
        <Button style={styles.squareButtonWidth}>Our Team</Button>
      </a>

      <Link style={styles.squareButtonHref} to="/contact">
        <Button style={styles.squareButtonWidth}>Send Us a Message</Button>
      </Link>
    </div>
  );
};

export default ButtonOptions;
