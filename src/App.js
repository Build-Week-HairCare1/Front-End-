import React from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Logout from "./components/Logout";
import StylistHome from "./components/StylistHome";
import CustomerHome from "./components/CustomerHome";

function App() {
  return (
    <div className="App">
      <Header />
      <Logout />
      {/* LogIn */}
      {/* Private Route */}

      <StylistHome />
      <CustomerHome />
    </div>
  );
}

export default App;
