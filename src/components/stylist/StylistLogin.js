import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import {Button, FormGroup, Label, Input} from 'reactstrap'

const Btn = styled.button`
flex: 0.6;
	color:#fff;
    font-weight:bolder;
    width:100%;
    border:none;
    border-radius:10px;
    background-color: #000;
	padding:10px;
	font-size:3rem;
	-webkit-text-stroke:.8px whitesmoke;
    cursor:pointer;
    transition:.5s ease-in;


`

   

const Stylist = ({values,errors,touched,status}) =>{




    return(
            
            <Form>
                <h2>Stylist</h2>

                <div className="form-group">

 <label htmlFor="email">Email <br />
            <Field as="input" id="email" type="email" name="email"   ariaDescribedby="emailHelp"  className='form-control' />
            {
                touched.email && errors.email &&(
                <p>{errors.email}</p>
                )
            }
            <span  id="emailHelp" className="form-text text-muted"></span>
        </label>
        </div>
        <div className="form-group">

        <label htmlFor="password">Password <br />
            <Field as="input" id="password" type="password" name="password"  className='form-control' />
            {
                touched.password && errors.password &&(
                <p>{errors.password}</p>
                )
            }
        </label>
</div>
  <div className="form-group">
        
            <Button type='submit' className="btn btn-primary">Login</Button>
        </div>
    </Form>
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
    email: Yup.string().required("ehhh not so good fr..."),

    password: Yup.string().required("You need the Password")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    //wait for team...whether axios or what and also where to an with what?
  }
})(Stylist);

export default StylistLogin;
