import React from 'react';
import {Link} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Login(){
    return(
        <div>
            <Form>
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
    name="password"/>
  </Form.Group>

  <Button 
  variant="primary" 
  type="submit">
    Submit
  </Button>
</Form>

        </div>
    )

}
export default Login;