import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PerlmanLogo from '../../Assets/perlman_logo-e1560545004377.png';
import HamburgerMenuIcon from './HamburgerMenuIcon/HamburgerMenuIcon';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const menuItems = [
    {title: 'About Us', link: 'https://perlmanclinic.com/about-us/'},
    {title: 'Team', link: 'https://perlmanclinic.com/our-team/'},
    {title: 'Locations', link: 'https://perlmanclinic.com/clinic-locations/'},
    {title: 'MyChart', link: 'https://mychart.perlmanclinic.com/mpc/'},
    {title: 'PocketDoc', link: 'https://pocketdocapp.com/'},
    {title: 'Help', link: 'https://perlmanclinic.com/support/'},
]

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="red" aria-label="menu">
            <Link to="/">
            <img src={PerlmanLogo} style={{width:175}} />
            </Link>
          </IconButton>
          <div>
          {menuItems.map(item => (
          <a href={item.link} style={{textDecoration:'none'}}>
          <Button variant="h6" className={classes.title}>
            {item.title}
          </Button></a>))}
          </div>
            {/* <HamburgerMenuIcon/> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
