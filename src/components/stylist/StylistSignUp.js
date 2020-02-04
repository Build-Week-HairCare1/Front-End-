import React from 'react';
import {withFormik,Form,Field} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

 
const Btn = styled.button`
color: rgba(116, 58, 98, .7);
border: double 4px azure;
background-color:azure;
padding:5px 10px;
font-size:3rem;
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


   
const MatchMe = (e) =>{
    let wordSoFar = e.target.value
    console.log(e.target.parentNode.parentNode.children[4].children[1]);
    
        
    if(wordSoFar===e.target.parentNode.parentNode.children[4].children[1].value){
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


const Stylist = ({values,errors,touched,status}) =>{




    return(
            
            <Form className='formStyle'>
                <h2>Stylist</h2>

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
        <label htmlFor="email">Email <br />
            <Field as="input" id="email" type="email" name="email" className='inp' required/>
            {
                touched.email && errors.email &&(
                <p>{errors.email}</p>
                )
            }
            <span></span>
        </label>
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
        <div className="btnBox">
            <Btn type='submit'>Register</Btn>
        </div>
    </Form>
   
        )

    }





const StylistSignUp = withFormik({

   

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
//token to be accepted as a stylist account
    }


})(Stylist);


export default  StylistSignUp;