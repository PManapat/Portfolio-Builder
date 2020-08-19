import React from 'react';
import { login } from "../../utils/api.js";
import { Link } from 'react-router-dom';
import Nav from "../Navbar";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true
    }
    this.submitForm = this.submitForm.bind(this);
  }
  validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email
      })
    } else {
      this.setState({
        emailError: true
      })
    }
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    if (e.target.name === 'email') {
      this.validateEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      if (e.target.value === '' || e.target.value === null || e.target.value.length <= 5) {
        this.setState({
          passwordError: true
        })
      } else {
        this.setState({
          passwordError: false,
          password: e.target.value
        })
      }
    }
    if (this.state.emailError === false && this.state.passwordError === false) {
      this.setState({
        isDisabled: false
      })
    }
  }
  submitForm(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    login(data).then(res => {
      // When user logs in they will be directed to mainprofile page
      this.props.history.push('/mainprofile');
    });
  }
  render() {
    return (
      <div>
        <Nav />
          <div className="container">
            <div className="card card-login mx-auto mt-5">
              <div className="card-header text-primary text-center">Login</div>
              <div className="card-body">
                <form id="signup-form">
                  <div className="form-group">
                    <div className="form-label-group">
                      <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" onChange={(e) => { this.handleChange(e) }} />
                      <label htmlFor="email"></label>
                      {this.state.emailError ? <span style={{ color: "red" }}>Please Enter valid email address</span> : ''}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-label-group">
                      <input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={(e) => { this.handleChange(e) }} />
                      <label htmlFor="password"></label>
                      {this.state.passwordError ? <span style={{ color: "red" }}>Your password must be at least 6 characters</span> : ''}
                    </div>
                  </div>
                  <button className="btn btn-primary btn-block" disabled={this.state.isDisabled} onClick={this.submitForm}>Login</button>
                </form>
                <p className="my-1 text-primary text-center">
                  Don't have an account?<Link to="/register"><br></br>Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Login;