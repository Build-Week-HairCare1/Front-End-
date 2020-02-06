import React from 'react';
import {withFormik,Form,Field} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import {Button} from 'reactstrap'
import {NavLink} from 'react-router-dom' 
import Axios from 'axios';


 

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



  const btnExtraStyles = {
    fontWeight:"bolder",
    boxShadow:"0 0 5px #3f3f3f",
    backgroundColor:'rgb(220, 35, 96)',
    borderRadius:'0%'
}


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


                 
       <Box>
       <PageTitle>Signup Here</PageTitle>

<ul className="nav nav-tabs" id="myTab" role="tablist">
<li className="nav-item">
<NavLink to='/signup/customer' className="nav-link"  exact activeClassName="customerORStylist"   id="home-tab" dataToggle="tab" role="tab" >Customer</NavLink>
</li>
<li className="nav-item">
  <NavLink to='/signup/stylist'  exact activeClassName="customerORStylist"   className="nav-link" id="profile-tab" dataToggle="tab" role="tab"  > Stylist </NavLink>
</li>
<li className="nav-item">
  <a className="nav-link disabled" href="#" tabIndex="-1" >Sign Up</a>
</li>
</ul>

<FormBox>
            
            <Form>
                <h3>Stylist</h3>


                <div className="form-group">
                    
                <Row>

<label htmlFor="first_name"> 
            <Field as="input" id="first_name" type="text" maxLength="10" name="first_name"   className="form-control"  placeholder="First Name" required/>
          
        </label>

        <label htmlFor="last_name"> 
            <Field as="input" id="last_name" type="text" maxLength="10" name="last_name" className="form-control"      placeholder="Last Name" required/>
          
        </label>
                </Row>
                </div>

                <div className="form-group">
                     <label htmlFor="email"> 
            <Field as="input" id="email" type="email" name="email" className="form-control"     placeholder="Example@email.com" required/>
            {
                touched.email && errors.email &&(
                <p  id className="form-text text-muted">{errors.email}</p>
                )
            }
            <span  id className="form-text text-muted"></span>
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
            <Field as="input" id="salon" type="text" maxLength="10" name="salon" className="form-control"  placeholder="Salon or n/a" required/>
           
        </label>

        <label htmlFor="specialty"> 
            <Field as="input" id="specialty" type="text" maxLength="10" name="specialty" className="form-control"  placeholder="Specialty" required/>
          
        </label>
        
            </Row>
                </div>
            
            <div className="form-group">
            <label htmlFor="yrs">
            <Field as="input" id="yrs" type="number" min="0" max="30" name="yrs" className="form-control"  placeholder="Years of experience" required/>
           
        </label>
                </div>
          

                <div className="form-group">
                     <Row>
  <label htmlFor="password">  
            <Field as="input" id="password" type="password" name="password"  className="form-control"   placeholder="Password" required/>
           
        </label>
     <label htmlFor="repassword"> 
            <Field as="input" id="repassword" type="password" name="repassword" className="form-control"    onChange={MatchMe} placeholder="Re-Type Password " required/>
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
        <Button type='submit' className='btn'  style={btnExtraStyles}>Register</Button>
        </div>
    </Form>
   </FormBox>
   </Box>
        )

    }





const StylistSignUp = withFormik({

   

    mapPropsToValues(props){

         

        return{
            first_name:props.first_name || "" ,
            last_name:props.last || "",
            email:props.email || "" ,
            password:props.password || "" ,
        }
    },
 


    validationSchema: Yup.object().shape({

        first_name: Yup.string().required(
            "First Name Please..."
        ),

        last_name: Yup.string().required(
            "Last Name Please..."
        ),
     
        email: Yup.string().required(
            "Valid Email Please..."
        ),

        password: Yup.string().required(
            "You need a Password"
        ),

        
    }),


    handleSubmit(values, {setStatus , resetForm}){
        

        Axios.post("https://haircare1backend.herokuapp.com/api/stylists",values)
        .then(res=>{
            setStatus(values)
            resetForm()
            console.log(res);
            
            
        }) 

console.log(values);


    }


})(Stylist);


export default  StylistSignUp;