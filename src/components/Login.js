import React from 'react';
import styled from 'styled-components';
import {Route, NavLink} from 'react-router-dom';
import CustomerLogin from './customer/CustomerLogin';
import StylistLogin from './stylist/StylistLogin';







const Box = styled.div`
position:absolute;
display:flex;
width:100%;
height:100%;
flex-direction:column;
justify-content:center;
align-items:center;
padding:0;
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



const PageTitle = styled.h1`
font-size:5rem;
  color:#000;



  font-family: ‘Roboto’, sans-serif;
font-family: ‘Playfair Display’, serif; 



            @media(max-width:500px){
              display:none;
            }
`;



const Login = () =>{

  
 

    return(
       
       <Box>
         <PageTitle>Login Here</PageTitle>

<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
<NavLink to='/' className="nav-link"  exact activeClassName="customerORStylist"   id="home-tab" dataToggle="tab" role="tab" >Customer</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to='/stylistLogin'  exact activeClassName="customerORStylist"   className="nav-link" id="profile-tab" dataToggle="tab" role="tab"  > Stylist </NavLink>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabIndex="-1" ariaDisabled="true">Sign In</a>
  </li>
</ul>

<FormBox>
   <Route exact path="/" component={CustomerLogin}/>
                         <Route  path="/stylistLogin" component={StylistLogin}/>
</FormBox>
      


       
                           
                 
               </Box>
    )


}

export default  Login;