import React from 'react';
import styled from 'styled-components';
import {Route, NavLink} from 'react-router-dom';
import CustomerSignUp from './customer/CustomerSignUp';
import StylistSignUp from './stylist/StylistSignUp';









    const Box = styled.div`
    flex:1;
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-gap:20px;



        @media(max-width:500px){
          width:100%;
        }




@media(max-width:900px) and (min-width:500px) and (max-height:500px){
  width:100%;
}
    `;



    const FormBox = styled.div`
    display:flex;
    width:1000px;
    height:600px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin:0;
    paddinng:0;
    box-shadow:0 0 10px #000;
    grid-gap:20px;


            @media screen and (max-width:500px){
                width:100%;
            }
    `;



    const LeftSide = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    width:80%;
    height:100%;
    justify-content:flex-start;
    align-items:flex-end;
    -moz-background-size:cover;
    -webkit-background-size:cover;
    background-size:cover;
    background-image:url("formpic.jpg");
    background-position:center;
    background-repeat:no-repeat;

    @media screen and (max-width:500px){
     display:none;           
    }
    
    `;


    const RightSide = styled.div`
    flex:1;
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `;


const SignUp = () =>{

  


    return(
        <Box>




<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <NavLink to='/'  exact activeClassName="customerORStylist"  className="nav-link active" id="home-tab" dataToggle="tab" role="tab" ariaControls="home" ariaSelected="true">Customer</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to='/stylist' exact activeClassName="customerORStylist"   className="nav-link" id="profile-tab" dataToggle="tab" role="tab" ariaControls="profile" ariaSelected="false"> Stylist </NavLink>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="" tabIndex="-1" ariaDisabled="true">Sign Up</a>
  </li>
</ul>



<FormBox>

   <LeftSide>
</LeftSide>
<RightSide> 
     <Route exact path="/" component={CustomerSignUp}/> 
      <Route  path="/stylist" component={StylistSignUp}/></RightSide> 
</FormBox>

                    
          
        </Box>
       
        
    )


}

export default  SignUp;