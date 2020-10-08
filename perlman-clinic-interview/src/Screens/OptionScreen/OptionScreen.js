import React, { Component } from 'react';
import OptionsBanner from '../../Components/OptionsBanner/OptionsBanner';
import ButtonOptions from '../../Components/ButtonOptions/ButtonOptions';

class OptionScreen extends Component {
  render() {
    return (
      <div>
        <OptionsBanner />
        <ButtonOptions />
      </div>
    );
  }
}

export default OptionScreen;
