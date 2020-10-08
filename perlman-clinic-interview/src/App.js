import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { withRouter } from "react-router";
import routes from './Modules/routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}

export default withRouter(App);
