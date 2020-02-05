import React from 'react';
import styled from 'styled-components';
import {Route, NavLink} from 'react-router-dom';
import CustomerSignUp from './customer/CustomerSignUp';
import StylistSignUp from './stylist/StylistSignUp';









    const Box = styled.div`
    flex:1;
    position:relative;
    display:flex;
    width:100%;
    height:auto;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding:0;
    margin-top:-200px;
    border-top:none;
        @media(max-width:500px){
          width:100%;
        }




@media(max-width:900px) and (min-width:500px) and (max-height:500px){
  width:100%;
  min-height:700px;
    max-height:800px;
}



@media(max-width:1380px) and (min-width:700px) and (max-height:1380px) and (min-height:700px){
  width:100%;
  min-height:700px;
    max-height:800px;
}

    `;



    const FormBox = styled.div`
    display:flex;
    color:azure;
    width:500px;
    min-height:500px;
    max-height:750px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin:0;
    paddinng:0;
    grid-gap:20px;
    background-color:rgba(0,0,0,.8);
    box-shadow:0 0 10px #000;
    border-radius:10px;
    border-top-left-radius:0;
    border-top-right-radius:0;

            @media screen and (max-width:500px){
                width:100%;
            }
    `;



const SignUp = () =>{

  


    return(
        <Box>




<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <NavLink to='/'  exact activeClassName="customerORStylist"  className="nav-link" id="home-tab" dataToggle="tab" role="tab" ariaControls="home">Customer</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to='/stylist' exact activeClassName="customerORStylist"   className="nav-link" id="profile-tab" dataToggle="tab" role="tab" ariaControls="profile"> Stylist </NavLink>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="" tabIndex="-1" ariaDisabled="true">Sign Up</a>
  </li>
</ul>



<FormBox>

     <Route exact path="/" component={CustomerSignUp}/> 
      <Route  path="/stylist" component={StylistSignUp}/> 
</FormBox>
                    
          
        </Box>
       
        
    )


}

export default  SignUp;