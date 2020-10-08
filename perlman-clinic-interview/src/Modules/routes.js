import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Contact from '../Components/ContactForm/ContactForm';
import OptionScreen from '../Screens/OptionScreen/OptionScreen';

export default (
  <Switch>
    <Route exact path="/" component={OptionScreen} />
    <Route path="/contact" component={Contact} />
  </Switch>
);