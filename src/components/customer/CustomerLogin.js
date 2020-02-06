import React from 'react';
import {withFormik,Field,Form} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.css'
import {Button, FormGroup, Label, Input} from 'reactstrap'
import {FacebookLoginButton} from 'react-social-login-buttons'
import {NavLink} from 'react-router-dom'
import axios from 'axios';

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
height:100%;
justify-content:flex-start;
align-items:flex-start;

}



@media(max-width:1380px) and (min-width:700px) and (max-height:1380px) and (min-height:700px){

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
box-shadow:0 0 10px #000;
border-radius:10px;
border-top-left-radius:0;
background-color:rgba(0,0,0,.8);
border-top-right-radius:0;

        @media screen and (max-width:500px){
width:100%;
min-height:100%;
max-height:100%;
        }

        
@media(max-width:900px) and (min-width:500px) and (max-height:500px){
width:100%;
            min-height:100%;
max-height:100%;
    }
    
    
    
    @media(max-width:1380px) and (min-width:700px) and (max-height:1380px) and (min-height:700px){
grid-gap:0px;
    
    }

        
`;



const PageTitle = styled.h1`
font-size:5rem;
  color:#000;
text-shadow:0 0 10px azure;


  font-family: ‘Roboto’, sans-serif;
font-family: ‘Playfair Display’, serif; 



            @media(max-width:500px){
              display:none;
            }

            @media(max-width:900px) and (min-width:500px) and (max-height:500px){
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
 

  function smooth (e){
      e.preventDefault()
  }

const Customer = ({values,errors,touched,status}) =>{ 




    return( 

        <Box>
        <PageTitle>Login Here</PageTitle>
 
 <ul className="nav nav-tabs"  role="tablist">
 <li className="nav-item">
 <NavLink to='/' className="nav-link"  exact activeClassName="customerORStylist"    role="tab" >Customer</NavLink>
 </li>
 <li className="nav-item">
   <NavLink to='/login/stylist'  exact activeClassName="customerORStylist"   className="nav-link"   role="tab"  > Stylist </NavLink>
 </li>
 <li className="nav-item">
   <a className="nav-link disabled" href="#" tabIndex="-1" >Sign In</a>
 </li>
 </ul>
 
 <FormBox>
             
            
             <Form>
             <h1>Customer</h1>
             
             <div className="form-group">
                <Row>
                  <label htmlFor="email"><span className="labez">Email</span> <br />
            <Field as="input" id="email" type="email" name="email"  className='form-control' required/>
            {
                touched.email && errors.email &&(
                <p>{errors.email}</p>
                )
            }
            <span  className="form-text text-muted"></span>
        </label>
                </Row>

 
        </div>


        <div className="form-group">
                <Row>

        <label htmlFor="password"><span className="labez">Password</span> <br />
            <Field as="input" id="password" type="password" name="password"   className='form-control' required/>
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

console.log(values);


axios.post("https://haircare1backend.herokuapp.com/api/customers/login ",values)
    .then(res=>{
        console.log(res)

        setStatus(res.data)
        resetForm()
    })
    .catch(err=>{
        console.log(err)
    })
    }


})(Customer);


export default  CustomerLogin;