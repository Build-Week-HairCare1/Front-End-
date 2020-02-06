import React from 'react'
import styled from 'styled-components'
import {Route, NavLink,Switch} from 'react-router-dom'
import CustomerLogin from './components/customer/CustomerLogin';
import CustomerSignUp from './components/customer/CustomerSignUp'
import StylistLogIn from './components/stylist/StylistLogin';
import StylistSignUp from './components/stylist/StylistSignUp';


const Box = styled.div`
position:absolute;
display:flex;
width:100%;
min-height:500px;
max-height:750px;
flex-direction:column;
justify-content:center;
align-items:center;
padding:0;
border-top:none;



    @media(max-width:500px){
      width:100%;
    min-height:100%;
    max-height:100%;
    }




@media(max-width:900px) and (min-width:500px) and (max-height:500px){
    width:100%;
    min-height:80%;
    max-height:80%;
    
}



@media(max-width:1380px) and (min-width:700px) and (max-height:1380px) and (min-height:700px){
    grid-gap:0px
}

`;




const FormBox = styled.div`
display:flex;
color:azure;
width:500px;
height:100%;
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
            min-height:100%;
            max-height:100%;
            background-color:rgba(0,0,0,1);

}

        @media(max-width:900px) and (min-width:500px) and (max-height:500px){
            width:100%;
            min-height:100%;
        }

`;


const Row = styled.div`
flex:1;
display:flex;
z-index:24;
font-weight:bolder;
@media(max-width:500px){
    
  }




  @media(max-width:900px) and (min-width:500px) and (max-height:500px){
    margin-top:100px;
}
`;


const Button = styled.button``;


export default function PromptUser(){
    return(
        <Box>
           
            
                    <Row> <NavLink to="/" className="btnzz">Login</NavLink>
                    OR
            <NavLink to="/signup/customer" className="btnz">Signup</NavLink></Row>
                    

                    <FormBox>

                    <Switch>
                        <Route exact path="/" component={CustomerLogin}/>
            <Route exact path="/signup/customer" component={CustomerSignUp}/>
            <Route exact path="/login/stylist" component={StylistLogIn}/>
            <Route exact path="/signup/stylist" component={StylistSignUp}/>
                    </Switch>
                    </FormBox>

            
             
        </Box>
       
    )
}