import React from "react";
import { Route, Switch } from "react-router-dom";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Logout from "./components/Logout";
import StylistHome from "./components/StylistHome";
import CustomerHome from "./components/CustomerHome";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
      {/* <
      <Logout /> */}
      <Header />

      {/* <SignUp />*/}
      {/* Private Route */}

      <Switch>
        <Route path="/stylist/home" component={StylistHome} />
        <Route path="/customer/home" component={CustomerHome} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
