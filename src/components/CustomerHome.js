import React from 'react';

// components
import StylistList from './StylistList'
import SearchForm from "./SearchForm";

function CustomerHome() {
  return (
    <>
    <h1>Customer Home</h1>
    <StylistList/>
    <SearchForm/>
    </>
  )   
}

export default CustomerHome;