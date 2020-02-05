import React from 'react';
import styled from 'styled-components';
import {Route, NavLink} from 'react-router-dom';
import CustomerLogin from './customer/CustomerLogin';
import StylistLogin from './stylist/StylistLogin';







const Box = styled.div`
flex:1;
display:flex;
width:100%;
height:100%;
flex-direction:column;
justify-content:center;
align-items:center;
grid-gap:20px;
`;








const Login = () =>{

  
 

    return(
       
       <Box>


<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="home-tab" dataToggle="tab" role="tab" ariaControls="home" ariaSelected="true"><NavLink to='/'>Customer</NavLink></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="profile-tab" dataToggle="tab" role="tab" ariaControls="profile" ariaSelected="false"><NavLink to='/stylist'> Stylist </NavLink></a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabIndex="-1" ariaDisabled="true">Sign In</a>
  </li>
</ul>


       <Route exact path="/" component={CustomerLogin}/>
                         <Route  path="/stylist" component={StylistLogin}/>


       
                           
                 
               </Box>
    )


}

export default  Login;