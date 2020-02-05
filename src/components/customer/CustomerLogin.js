import React from 'react';
import {withFormik,Field} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import {FacebookLoginButton} from 'react-social-login-buttons'


const btnExtraStyles = {
    fontWeight:"bolder",
    boxShadow:"0 0 5px #3f3f3f",
    backgroundColor:'rgb(220, 35, 96)',
    borderRadius:'0%',
  fontSize:"1.5rem",
}
     
  
  const Row = styled.div`
  flex:1;
  display:flex;
  flex-direction:row;
  `;
 


const Customer = ({values,errors,touched,status}) =>{ 




    return( 
            
             <Form>
             <h1>Customer</h1>
             
             <div className="form-group">
                <Row>
                  <label htmlFor="email"><span className="labez">Email</span> <br />
            <Field as="input" id="email" type="email" name="email"   ariaDescribedby="emailHelp"  className='form-control' />
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
            <Field as="input" id="password" type="password" name="password"  ariaDescribedby="emailHelp"  className='form-control' />
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
            "Email not valid"
        ),

        password: Yup.string().required(
            "You need your Password"
        ),

        
    }),


    handleSubmit(values, {setStatus , resetForm}){
        
//wait for team...whether axios or what and also where to an with what?
    }


})(Customer);


export default  CustomerLogin;