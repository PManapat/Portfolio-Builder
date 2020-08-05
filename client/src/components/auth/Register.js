import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { register } from "../../utils/api.js";
function Register() {
  let history = useHistory();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { firstName, lastName, email, password, redirect } = formData;
  function handleInputChange(event) {
    const Name = event.target.name;
    const Value = event.target.value;
    setFormData({ ...formData, [Name]: Value });
    console.log(setFormData);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    }
    register(newUser).then(function (res) {
      return history.push("/login")
    })
    console.log(formData);
  }
  return (
    <div>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Control
            size="lg"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            placeholder="Enter Your First Name" />
          <br />
          <Form.Control
            value={lastName}
            size="lg"
            type="text"
            name="lastName"
            onChange={handleInputChange}
            placeholder="Enter Your Last Name" />
          <br />
          <br />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit">
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