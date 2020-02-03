import React from 'react';
import './App.css';
import StylistHome from './components/StylistHome'
import CustomerHome from './components/CustomerHome'

function App() {
  return (
    <div className="App">
      {/* Header */}
      {/* LogIn */}
      {/* Private Route */}
      <StylistHome/>
      <CustomerHome/>
    </div>
  );
}

export default App;
