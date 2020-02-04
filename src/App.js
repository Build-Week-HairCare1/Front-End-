import React from "react";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Logout from "./components/Logout";
import StylistHome from "./components/StylistHome";
import CustomerHome from "./components/CustomerHome";
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Logout /> */}
      <Login />
      <SignUp />
      {/* Private Route */}

      {/* <StylistHome />
      <CustomerHome /> */}
    </div>
  );
}

export default App;
