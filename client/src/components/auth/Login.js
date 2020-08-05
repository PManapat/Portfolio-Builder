import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { login } from "../../utils/api.js";
function Login() {
  let history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  function handleInputChange(event) {
    const Name = event.target.name;
    const Value = event.target.value;
    setFormData({ ...formData, [Name]: Value });
    console.log(setFormData);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const newlogin = {
      email: email,
      password: password
    }
    login(newlogin).then(function (res) {
      console.log(res);
      //console.log(res.token);
      // setFormData({res.data});
      return history.push("/profile")
    })
  }
  return (
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
          />
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