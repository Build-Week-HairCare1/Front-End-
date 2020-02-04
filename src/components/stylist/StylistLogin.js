<<<<<<< HEAD:src/components/stylist/stylistLogin.js
import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import * as Yup from "yup";

const formsStyle = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(0,0,0,.5)",
  width: "700px",
  minHeight: "500px",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "2rem",
  color: "azure",
  padding: ".5%",
  borderRadius: "20px"
};
=======
import React from 'react';
import {withFormik,Form,Field} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
>>>>>>> 11d571ae45e54182661622ffdd4facbf9099656e:src/components/stylist/StylistLogin.js

 
const Btn = styled.button`
<<<<<<< HEAD:src/components/stylist/stylistLogin.js
  color: azure;
  border: double 4px azure;
  background-color: rgba(249, 132, 212, 0.4);
  padding: 5px 10px;
  font-size: 2.5rem;
  text-shadow: 0 0 10px azure;
  box-shadow: 0 0 10px azure;
  -webkit-text-stroke: 0.8px azure;
  cursor: pointer;
  width: 200px;
  border-radius: 10px;
`;

const Stylist = ({ values, errors, touched, status }) => {
  return (
    <formsStyle>
      <NavLink to="/">Customer</NavLink>
      <NavLink to="/stylist">Stylist</NavLink>

      <Form style={formsStyle}>
        <h2>Stylist</h2>
        <label htmlFor="email">
          Email <br />
          <Field
            as="input"
            id="email"
            type="email"
            name="email"
            className="inp"
          />
          {touched.email && errors.email && <p>{errors.email}</p>}
          <span></span>
=======
color: rgba(116, 58, 98, 7);
border: double 4px azure;
background-color:azure;
padding:5px 10px;
font-size:2.5rem;
text-shadow:0 0 10px azure;
-webkit-text-stroke:.8px azure;
cursor:pointer;
width:200px;
border-radius:10px;
font-weight:bolder;
font-family: 'Russo One', sans-serif;
font-family: 'Dancing Script', cursive;
border:double rgba(116, 58, 98, 0.7);
`


   

const Stylist = ({values,errors,touched,status}) =>{




    return(
            
            <Form className='formStyle'>
                <h2>Stylist</h2>
 <label htmlFor="email">Email <br />
            <Field as="input" id="email" type="email" name="email" className='inp' />
            {
                touched.email && errors.email &&(
                <p>{errors.email}</p>
                )
            }
            <span></span>
>>>>>>> 11d571ae45e54182661622ffdd4facbf9099656e:src/components/stylist/StylistLogin.js
        </label>
        <label htmlFor="password">
          Password <br />
          <Field
            as="input"
            id="password"
            type="password"
            name="password"
            className="inp"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </label>

        <div className="btnBox">
<<<<<<< HEAD:src/components/stylist/stylistLogin.js
          <Btn type="submit">Confirm</Btn>
        </div>
      </Form>
    </formsStyle>
  );
};
=======
            <Btn type='submit'>Login</Btn>
        </div>
    </Form>
   
        )

    }




>>>>>>> 11d571ae45e54182661622ffdd4facbf9099656e:src/components/stylist/StylistLogin.js

const StylistLogin = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || "",
      password: props.password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required("ehhh not so good fr..."),

    password: Yup.string().required("You need the Password")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    //wait for team...whether axios or what and also where to an with what?
  }
})(Stylist);

export default StylistLogin;
