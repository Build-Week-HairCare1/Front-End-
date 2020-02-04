import React from 'react';
import styled from 'styled-components';
import {Route, NavLink} from 'react-router-dom';
import CustomerSignUp from './customer/CustomerSignUp';
import StylistSignUp from './stylist/StylistSignUp';







    const Nav = styled.div`
    font-size:3rem;
    margin:0;
    display:flex;
    grid-gap:10px;
    font-family: 'Russo One', sans-serif;
    font-family: 'Dancing Script', cursive;
    color:rgba(108, 65, 72, 75%);
    



    @media screen and (max-width:500px){
     font-size:1rem;           
    }
    `;



    const Btn = styled.button`
	flex: 0.6;
	color: rgba(116, 58, 98, 0.7);
    border: double 4px rgba(108, 65, 72, 75%);
    border-radius:10px;
    font-weight:bolder;
    background-color: whitesmoke;
	padding:5px 10px;
	font-size:2.5rem;
	text-shadow:0 0 10px whitesmoke;
	box-shadow:0 0 10px whitesmoke;
	-webkit-text-stroke:.8px whitesmoke;
	cursor:pointer;
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
    width:80%;
    height:100%;
    -moz-background-size:cover;
    -webkit-background-size:cover;
    background-size:cover;
    background-image:url("formpic.jpg");
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
<Nav>
<NavLink to='/'><Btn>Customer</Btn></NavLink>
OR
<NavLink to='/stylist'><Btn>Stylist</Btn></NavLink>
</Nav>



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