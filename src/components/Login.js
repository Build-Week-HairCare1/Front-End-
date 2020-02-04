import React from 'react';
import styled from 'styled-components';
import {Route, NavLink} from 'react-router-dom';
import CustomerLogin from './customer/CustomerLogin';
import StylistLogin from './stylist/StylistLogin';




    const Nav = styled.div`
    font-size:3rem;
    margin:0;
    `;


const Login = () =>{

  


    return(
        <div>
<Nav>
<NavLink to='/'>Customer</NavLink>
<NavLink to='/stylist'>Stylist</NavLink>
</Nav>

                <div>
                      <Route exact path="/" component={CustomerLogin}/>
                         <Route  path="/stylist" component={StylistLogin}/>
                </div>
          
        </div>
       
        
    )


}

export default  Login;