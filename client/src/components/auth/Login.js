import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import {login} from "../../utils/api.js";
import Button from "../Button"


function Login(){
  let history = useHistory();

	function handleClick() {
		// console.log("I am clicked");
		return (history.push("/register"))
  }

  const [formData, setFormData] = useState({
     email: '',
     password: '',
    //  mystorage: ''
   
    
   });

   const {email,password,mystorage}=formData;
   function handleInputChange(event){
     const Name= event.target.name;
     const Value= event.target.value;
     setFormData({...formData, [Name]:Value});
 
 console.log(setFormData);
   }
  
 

   function handleFormSubmit(event) {
    event.preventDefault();
    const newlogin = {
      
      email: email,
      password: password
    }
    login(newlogin).then(function(res){
      console.log(res);
      console.log(res.token);
      //  setFormData({...formData,mystorage:res.token});
//       localStorage.setItem("tokenValue",JSON.stringify(res.token));
//  console.log(JSON.parse(localStorage.getItem('tokenvalue')));
// var temp=JSON.stringify(res.token);
// console.log("my value",temp);
// var temp1=res.token;
// console.log("my value1",temp1);
// var tempToken=localStorage.setItem("tokenValue",JSON.stringify(res.token));
// console.log("my token value",tempToken);
// console.log(mystorage);



      // console.log(localStorage.getItem('tokenvalue'));
       return history.push("/mainprofile")
    
   })


}
 
 
    return(
        <div>
            <Form onSubmit={handleFormSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email"
     placeholder="Enter email" 
     name="email"
     value={email}
     onChange={handleInputChange}
     required
     
     />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password" 
    name="password"
    value={password}
    onChange={handleInputChange}
    required
    
    />
    <Form.Text className="text-muted">
      Enter a minimum 6 Characters
    </Form.Text>
  </Form.Group>

  <Button 
  className="btn btn-info btn-sm" 
  type="submit"
  name="Submit">
    Submit
  </Button>
  <Button onClick={handleClick} className="btn btn-outline-info btn-sm" name="Sign Up">Sign Up</Button>
      </Form>

      
    </div>
  )
}
export default Login;