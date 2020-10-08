import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactForm />
    </div>
  );
}

export default App;
