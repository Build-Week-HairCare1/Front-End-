import React from 'react'
import styled from 'styled-components'
import {Route, NavLink} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'


const Box = styled.div`
position:absolute;
display:flex;
width:100%;
height:100%;
justify-content:center;
align-items:center;
padding:0;
grid-gap:100px;
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


const Button = styled.button``;


export default function PromptUser(){
    return(
        <Box>
           
            
                    <Box> <NavLink to="/login">  <Button className="btnzz">Login</Button></NavLink>
            <NavLink to="/signup"><Button className="btnz">Signup</Button></NavLink></Box>
                    
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
             
        </Box>
       
    )
}