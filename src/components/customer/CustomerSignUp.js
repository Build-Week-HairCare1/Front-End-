import React from 'react';
import {withFormik,Form,Field} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';



let customer = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    city: '',
    state: '',
    reviews: [
      {
        title: '',
        description: '',
        stars: 0,
        stylist: '',
        customer: '',
        photo_url: '',
      },
    ],
  };
 
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

const Row = styled.div`
flex:1;
display:flex;
flex-direction:row;
`;


const MatchMe = (e) =>{
    let wordSoFar = e.target.value
    
        
    if(wordSoFar===e.target.parentNode.parentNode.children[0].children[1].value){
        e.target.parentNode.children[2].innerHTML = "Matches"
    }else{
        e.target.parentNode.children[2].innerHTML = "not Matching"
    }
}



const RemoveThis = (card_to_remove) =>{
	console.log(card_to_remove.target.parentNode.remove());

}



const JustOneMin = (e) =>{
    
    e.preventDefault()

   if( e.target.parentNode.parentNode.children[3].children[1].value.slice(e.target.parentNode.parentNode.children[3].children[1].indexOf("@")
        ,-1)===/@syrup.com/i &&  e.target.parentNode.parentNode.children[3].children[1].value.slice(0,e.target.parentNode.parentNode.children[3].children[1].indexOf("@")
        )===/waffle/i )
   e.target.parentNode.parentNode.reset()
   e.target.parentNode.parentNode.children[3].children[1].value="CANT USE waffle@syrup.com"
    return false;
}


const Customer = ({values,errors,touched,status}) =>{




    return(
            
            <Form className="formSignUp">
                <h3>Customer</h3>

                <Row>

                <label htmlFor="name"> First Name <br />
            <Field as="input" id="name" type="text" maxLength="10" name="name" required/>
            {
                touched.name && errors.name &&(
                <p>{errors.name}</p>
                )
            }
        </label>

        <label htmlFor="last">Last Name <br />
            <Field as="input" id="last" type="text" maxLength="10" name="last" required/>
            {
                touched.last && errors.last &&(
                <p>{errors.last}</p>
                )
            }
        </label>
                </Row>

        <label htmlFor="email">Email <br />
            <Field as="input" id="email" type="email" name="email" className='inp' required/>
            {
                touched.email && errors.email &&(
                <p>{errors.email}</p>
                )
            }
            <span></span>
        </label>

<Row>
     <label htmlFor="city">City<br />
            <Field as="input" id="city" type="text" maxLength="14" name="city" required/>
           
        </label>

        <label htmlFor="state">State<br />
            <Field as="input" id="state" type="text" maxLength="10" name="state" required/>
          
        </label>
</Row>
       
       <Row>
            <label htmlFor="password">Password <br />
            <Field as="input" id="password" type="password" name="password"  className='inp' required/>
            {
                touched.password && errors.password &&(
                <p>{errors.password}</p>
                )
            }
        </label>
     <label htmlFor="repassword">Re-Type Password <br />
            <Field as="input" id="repassword" type="password" name="repassword" onChange={MatchMe} required/>
            {
                touched.repassword && errors.repassword &&(
                <p>{errors.repassword}</p>
                )
            }
            <span></span>
        </label>
       </Row>
       
        <div className="btnBox">
            <Btn type='submit'>Register</Btn>
        </div>
    </Form>
   
        )

    }





const CustomerSignUp = withFormik({

   

    mapPropsToValues(props){

         

        return{
            name:props.name || "" ,
            last:props.last || "",
            email:props.email || "" ,
            password:props.password || "" ,
        }
    },
 


    validationSchema: Yup.object().shape({

        name: Yup.string().required(
            "First Name Please..."
        ),

        last: Yup.string().required(
            "Last Name Please..."
        ),
     
        email: Yup.string().required(
            "Valid Email Please..."
        ),

        password: Yup.string().required(
            "You need the Password"
        ),

        
    }),


    handleSubmit(values, {setStatus , resetForm}){
        
//wait for team...whether axios or what and also where to an with what?
//token to be accepted as a customer account
        console.log(values)
      
    }


})(Customer);


























export default  CustomerSignUp;