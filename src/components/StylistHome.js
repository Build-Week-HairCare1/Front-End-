import React from 'react';
import StylistList from './StylistList'
import StylistProfile from './StylistProfile'

function StylistHome() {
  return (
    <>
    <h1>Stylist Home</h1>
    <StylistProfile/>
    <StylistList/>
    </>
  )   
}

export default StylistHome;