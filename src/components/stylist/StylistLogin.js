import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import {Button, FormGroup, Label, Input} from 'reactstrap'
import {NavLink} from 'react-router-dom'

const btnExtraStyles = {
  fontWeight:"bolder",
  boxShadow:"0 0 5px #3f3f3f",
  backgroundColor:'rgb(220, 35, 96)',
  borderRadius:'0%',
  fontSize:"1.5rem",
}
    
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
  

// const Row = styled.div`
// flex:1;
// display:flex;
// flex-direction:row;
// justify-content:space-between;
// grid-gap:10px;
// `;


const Row = styled.div`
flex:1;
display:flex;
flex-direction:row;
`;




const Stylist = ({values,errors,touched,status}) =>{




    return(
              
       <Box>
       <PageTitle>Signup Here</PageTitle>

<ul className="nav nav-tabs" id="myTab" role="tablist">
<li className="nav-item">
<NavLink to='/login/customer' className="nav-link"  exact activeClassName="customerORStylist"   id="home-tab" dataToggle="tab" role="tab" >Customer</NavLink>
</li>
<li className="nav-item">
  <NavLink to='/login/stylist'  exact activeClassName="customerORStylist"   className="nav-link" id="profile-tab" dataToggle="tab" role="tab"  > Stylist </NavLink>
</li>
<li className="nav-item">
  <a className="nav-link disabled" href="#" tabIndex="-1" ariaDisabled="true">Sign In</a>
</li>
</ul>

<FormBox>
 
            <Form>
                <h1>Stylist</h1>

                <div className="form-group">
                <Row>
                  <label htmlFor="email"><span className="labez">Email</span> <br />
            <Field as="input" id="email" type="email" name="email"  
             ariaDescribedby="emailHelp"  className='form-control' />
            {
                touched.email && errors.email &&(
                <p>{errors.email}</p>
                )
            }
            <span  id="emailHelp" className="form-text text-muted"></span>
        </label>
                </Row>

 
        </div>


        <div className="form-group">
                <Row>

        <label htmlFor="password"><span className="labez">Password</span> <br />
            <Field as="input" id="password" type="password" name="password" 
             ariaDescribedby="emailHelp"  className='form-control' />
            {
                touched.password && errors.password &&(
                <p>{errors.password}</p>
                )
            }
        </label>

                </Row>

</div>
  <div className="form-group">
        
            <Button type='submit' className="btn" style={btnExtraStyles}>Login</Button>
        </div>
    </Form>

    </FormBox>
    </Box>
  );
};

const StylistLogin = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || "",
      password: props.password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please type a valid email"),

    password: Yup.string().required("You need the Password")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    //wait for team...whether axios or what and also where to an with what?
  }
})(Stylist);

export default StylistLogin;
