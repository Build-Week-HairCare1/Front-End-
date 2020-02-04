import React from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom';
import CustomerLogin from './customer/CustomerLogin';
import StylistLogin from './stylist/StylistLogin';


const formsStyle = {
    display:"flex",
    flexDirection:"column",
    backgroundColor:"rgba(0,0,0,.5)",
    width:"700px",
    minHeight:"500px",
    justifyContent:"space-between",
    alignItems:"center",
    fontSize:"2rem",
    color:"azure",
    padding:".5%",
    borderRadius:"20px",
}


const Btn = styled.button`
	flex: 0.6;
	color: green;
	border: double 4px azure;
	background-color: #000;
	padding:5px 10px;
	font-size:2.5rem;
	text-shadow:0 0 10px azure;
	box-shadow:0 0 10px azure;
	-webkit-text-stroke:.8px azure;
	cursor:pointer;`




const Login = () =>{

 


    return(
        <div>
            <Route exact path="/" component={CustomerLogin}/>
            <Route exact path="/stylist" component={StylistLogin}/>
        </div>
       
        
    )


}

export default  Login;