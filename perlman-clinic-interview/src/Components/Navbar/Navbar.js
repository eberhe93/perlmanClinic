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
    {title: 'Patient Info'},
    {title: 'Team'},
    {title: 'Locations'},
    {title: 'MyChart'},
    {title: 'PocketDoc'},
    {title: 'Help'},
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
          <div style={{float:'right'}}>
          {menuItems.map(item => (<Button variant="h6" className={classes.title}>
            {item.title}
          </Button>))}
          </div>
            {/* <HamburgerMenuIcon/> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
