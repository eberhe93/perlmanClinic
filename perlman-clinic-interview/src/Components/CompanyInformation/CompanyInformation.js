import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

class CompanyInformation extends Component {
  render() {
    return (
      <div>
        <div>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <h2>General Information</h2>
              <strong>Phone:</strong>
              <a href="tel:1-858-554-1212">(858)-554-1212</a>
              <br />
              <a href="mailto:info@perlmanclinic.com">info@perlmanclinic.com</a>
            </Grid>
            <Grid item>
              <h2>Appointments</h2>
              <a href="mailto:scheduler@perlmanclinic.com">
                scheduler@perlmanclinic.com
              </a>
            </Grid>
            <Grid item>
              <h2>Administrative and Billing</h2>
              3900 5th Ave Suite 300 <br />
              San Diego, CA 92103
              <br />
              <a href="mailto:admin@perlmanclinic.com">
                admin@perlmanclinic.com
              </a>
              <br />
            </Grid>
            <Grid item>
              <h2>Find us on...</h2>
              <strong>Facebook:</strong>
              <a href="https://facebook.com/Perlmanclinic/">
                facebook.com/Perlmanclinic
              </a>
              <br />
              <strong>Instagram:</strong>

              <a href="https://instagram.com/PerlmanClinic">
                instagram.com/PerlmanClinic
              </a>
              <br />
              <strong>Twitter:</strong>
              <a href="https://twitter.com/PerlmanClinic">
                twitter.com/PerlmanClinic
              </a>
              <br />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CompanyInformation;
