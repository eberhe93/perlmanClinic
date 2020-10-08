import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PerlmanLogo from '../../Assets/perlman_logo-e1560545004377.png';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { styles } from '../../Modules/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const menuItems = [
  { title: 'About Us', link: 'https://perlmanclinic.com/about-us/' },
  { title: 'Team', link: 'https://perlmanclinic.com/our-team/' },
  { title: 'Locations', link: 'https://perlmanclinic.com/clinic-locations/' },
  { title: 'MyChart', link: 'https://mychart.perlmanclinic.com/mpc/' },
  { title: 'PocketDoc', link: 'https://pocketdocapp.com/' },
  { title: 'Help', link: 'https://perlmanclinic.com/support/' }
];

class Navbar extends Component {
  state = { menu_class: '' };

  render() {
    let top_menu_class = `top-menu ${this.state.menu_class}`;
    return (
      <div>
        <div className={top_menu_class}>
          <div className="left">
            <IconButton edge="start" color="red" aria-label="menu">
              <Link to="/">
                <img src={PerlmanLogo} style={styles.navbarLogo} />
              </Link>
            </IconButton>
          </div>
          <div className="right">
            {menuItems.map(item => (
              <a href={item.link} style={styles.contactInformationHref}>
                <Button variant="h6">{item.title}</Button>
              </a>
            ))}
          </div>

          <div className="clear-fix" />
        </div>
      </div>
    );
  }
}

export default Navbar;
