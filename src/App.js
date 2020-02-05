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
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Logout /> */}
      
      {/* <Login />*/}
      <Switch>
        <Route path="/stylist/home" component={StylistHome} />
        <Route path="/customer/home" component={CustomerHome} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={Login} />
      </Switch>
      {/* Private Route */}

      {/* <StylistHome />
      <CustomerHome /> */}
    </div>
  );
}

export default App;
