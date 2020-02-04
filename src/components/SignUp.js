import React from 'react';
import styled from 'styled-components';
import {Route, NavLink} from 'react-router-dom';
import CustomerSignUp from './customer/CustomerSignUp';
import StylistSignUp from './stylist/StylistSignUp';







    const Nav = styled.div`
	font-size:3.5rem;
    margin:0;
    display:flex;
    flex-direction:column;
    grid-gap:10px;
    font-family: 'Russo One', sans-serif;
	text-shadow:0 0 10px whitesmoke;
    font-family: 'Dancing Script', cursive;
    color:#000;
    background-color: whitesmoke;
    border-radius:10px;
    box-shadow:0 0 10px #000;


    @media screen and (max-width:500px){
     font-size:1rem;           
    }
    `;



    const Btn = styled.button`
	flex: 0.6;
	color:#000;
    font-weight:bolder;
    width:100%;
    border:none;
    background-color: whitesmoke;
	padding:5px 10px;
	font-size:3.5rem;
	text-shadow:0 0 10px whitesmoke;
	-webkit-text-stroke:.8px whitesmoke;
    cursor:pointer;
    transition:.5s ease-in;




`


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



    const FormBox = styled.div`
    flex:1;
    display:flex;
    width:80%;
    height:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin:0;
    paddinng:0;
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
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;

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




<FormBox>

   <LeftSide>
   <Nav>
<NavLink to='/'  exact activeClassName="customerORStylist"><Btn>Customer</Btn></NavLink>
OR
<NavLink to='/stylist' exact activeClassName="customerORStylist"><Btn>Stylist</Btn></NavLink>
</Nav>
</LeftSide>
<RightSide> 
     <Route exact path="/" component={CustomerSignUp}/> 
      <Route  path="/stylist" component={StylistSignUp}/></RightSide> 
</FormBox>

                    
          
        </Box>
       
        
    )


}

export default  SignUp;