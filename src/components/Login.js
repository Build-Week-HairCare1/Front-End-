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
grid-gap:300px;
`;

    const Nav = styled.div`
    font-size:3rem;
    margin:0;
    `;

    const Btn = styled.button`
	flex: 0.6;
	color: rgba(116, 58, 98, 0.7);
    border: double 4px rgba(116, 58, 98, 0.7);
    border-radius:10px;
    font-weight:bolder;
    background-color: azure;
	padding:5px 10px;
	font-size:2.5rem;
	text-shadow:0 0 10px azure;
	box-shadow:0 0 10px azure;
	-webkit-text-stroke:.8px azure;
	cursor:pointer;
`


const Login = () =>{

  
 

    return(
        <Box>
<Nav>
<NavLink to='/'><Btn>Customer</Btn></NavLink>
OR
<NavLink to='/stylist'><Btn>Stylist</Btn></NavLink>
</Nav>

                <div>
                      <Route exact path="/" component={CustomerLogin}/>
                         <Route  path="/stylist" component={StylistLogin}/>
                </div>
          
        </Box>
       
        
    )


}

export default  Login;