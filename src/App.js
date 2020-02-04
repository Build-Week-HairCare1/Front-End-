import React from "react";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Logout from "./components/Logout";
import StylistHome from "./components/StylistHome";
import CustomerHome from "./components/CustomerHome";
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Logout /> */}
      <Login />
      {/* Private Route */}

      {/* <StylistHome />
      <CustomerHome /> */}
    </div>
  );
}

export default App;
