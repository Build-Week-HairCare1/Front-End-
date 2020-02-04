import React from 'react';
import {withFormik,Form,Field} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup'


const Btn = styled.button`
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





const Customer = ({values,errors,touched,status}) =>{




    return(
            
             <Form className='formStyle'>
             <h2>Customer</h2>
 <label htmlFor="email">Email <br />
            <Field as="input" id="email" type="email" name="email" className='inp' />
            {
                touched.email && errors.email &&(
                <p>{errors.email}</p>
                )
            }
            <span></span>
        </label>
        <label htmlFor="password">Password <br />
            <Field as="input" id="password" type="password" name="password"  className='inp' />
            {
                touched.password && errors.password &&(
                <p>{errors.password}</p>
                )
            }
        </label>

        <div className="btnBox">
            <Btn type='submit'>Confirm</Btn>
        </div>
    </Form>
   
        )

    }





const CustomerLogin = withFormik({

   

    mapPropsToValues(props){

         

        return{
            email:props.email || "" ,
            password:props.password || "",
        }
    },
 


    validationSchema: Yup.object().shape({
     
        email: Yup.string().required(
            "ehhh not so good fr..."
        ),

        password: Yup.string().required(
            "You need the Password"
        ),

        
    }),


    handleSubmit(values, {setStatus , resetForm}){
        
//wait for team...whether axios or what and also where to an with what?
    }


})(Customer);


export default  CustomerLogin;