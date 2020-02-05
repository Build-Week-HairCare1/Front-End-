import React from 'react';
import {withFormik,Form,Field} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import {Button} from 'reactstrap'
 




let stylist = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    specialty: '',
    salon: '',
    years_experience: 0,
    photo_url: '',
    bio: '',
    facebook_url: '',
    instagram_url: '',
    twitter_url: '',
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
    
        
    if(wordSoFar===e.target.parentNode.parentNode.children[0].children[0].value){
        e.target.parentNode.children[1].innerHTML = "Matches"
    }else{
        e.target.parentNode.children[1].innerHTML = "not Matching"
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
            
            <Form className="formSignUp">
                <h3>Stylist</h3>


                <div className="form-group">
                    

                <Row>
<label htmlFor="name"> 
            <Field as="input" id="name" type="text" maxLength="10" name="name"  ariaDescribedby="nameHelp" className="form-control"  placeholder="First Name" required/>
            {
                touched.name && errors.name &&(
                <p id="nameHelp" className="form-text text-muted">{errors.name}</p>
                )
            }
        </label>

        <label htmlFor="last"> 
            <Field as="input" id="last" type="text" maxLength="10" name="last" className="form-control"  ariaDescribedby="lastHelp"    placeholder="Last Name"required/>
            {
                touched.last && errors.last &&(
                <p  id="lastHelp" className="form-text text-muted">{errors.last}</p>
                )
            }
        </label>
                </Row>
                </div>

                <div className="form-group">
                     <label htmlFor="email"> 
            <Field as="input" id="email" type="email" name="email" className="form-control"   ariaDescribedby="emailHelp"  placeholder="Example@email.com"required/>
            {
                touched.email && errors.email &&(
                <p  id="emailHelp" className="form-text text-muted">{errors.email}</p>
                )
            }
            <span  id="emailHelp" className="form-text text-muted"></span>
        </label>
                </div>
                
       
        <div className="form-group">
                      <Row>
     <label htmlFor="city"> 
            <Field as="input" id="city" type="text" maxLength="14" name="city" className="form-control"  placeholder="City" required/>
           
        </label>

        <label htmlFor="state"> 
            <Field as="input" id="state" type="text" maxLength="10" name="state" className="form-control"  placeholder="State" required/>
          
        </label>
</Row> 
                    </div>
      
<div className="form-group">
                    <Row>
            <label htmlFor="salon"> 
            <Field as="input" id="salon" type="text" maxLength="10" name="salon" className="form-control"  placeholder="Salon" required/>
            {
                touched.salon && errors.salon &&(
                <p>{errors.salon}</p>
                )
            }
        </label>

        <label htmlFor="specialty"> 
            <Field as="input" id="specialty" type="text" maxLength="10" name="specialty" className="form-control"  placeholder="Specialty" required/>
            {
                touched.specialty && errors.specialty &&(
                <p>{errors.specialty}</p>
                )
            }
        </label>
        
            </Row>
                </div>
            
            <div className="form-group">
            <label htmlFor="yrs">Yrs experience<br />
            <Field as="input" id="yrs" type="number" min="0" max="10" name="yrs" className="form-control"  placeholder="0" required/>
            {
                touched.yrs && errors.yrs &&(
                <p>{errors.yrs}</p>
                )
            }
        </label>
                </div>
          

                <div className="form-group">
                     <Row>
  <label htmlFor="password">  
            <Field as="input" id="password" type="password" name="password"  className="form-control"  ariaDescribedby="pwordtHelp"  placeholder="Password" required/>
            {
                touched.password && errors.password &&(
                <p  id="pwordtHelp" className="form-text text-muted">{errors.password}</p>
                )
            }
        </label>
     <label htmlFor="repassword"> 
            <Field as="input" id="repassword" type="password" name="repassword" className="form-control"  ariaDescribedby="rpwordtHelp"  onChange={MatchMe} placeholder="Re-Type Password " required/>
            {
                touched.repassword && errors.repassword &&(
                <p id="rpwordtHelp" className="form-text text-muted">{errors.repassword}</p>
                )
            }
            <span id="rpwordtHelp" className="form-text text-muted"></span>
        </label>
        </Row>
                </div>

       
      
        <div className="form-group">
        <Button type='submit' className='btn btn-primary'>Register</Button>
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

console.log(values);


    }


})(Stylist);


export default  StylistSignUp;