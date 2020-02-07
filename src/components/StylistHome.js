import React from 'react';
import StylistProfile from './stylistHome/StylistProfile'
import {StylistStyles} from './stylistHome/StylistStyles'
import StylistDashboard from './stylistHome/StylistDashboard'

function StylistHome() {
  return (
    <>
    <StylistProfile/>
    <StylistStyles/>
    <StylistDashboard/>
    </>
  )   
}

export default StylistHome;