import React from 'react';
import {Link} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Register(){
    return(
        <div>
 <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <Form>
      <Form.Group>
  <Form.Control 
  size="lg" 
  type="text" 
  name="firstName"
  placeholder="Enter Your First Name" />
  <br />
  <Form.Control 
  size="lg" 
  type="text" 
  name="lastName"
  placeholder="Enter Your Last Name" />
  <br/>

  <br />
  
</Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email"
     placeholder="Enter email" 
     name="email"
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
    
    />
  </Form.Group>
 
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
        </div>
    )

}
export default Register;