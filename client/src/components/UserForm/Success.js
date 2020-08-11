import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Nav from "../UserNav";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div>
        <Nav />
        <MuiThemeProvider>
          <div>
            <Dialog open fullWidth maxWidth='sm'>
              <Link to="/home"><button>x</button></Link>
              <AppBar title="Success" />
              <h1>Thank You For Your Submission</h1>
              <p>You will get an email with further instructions.</p>
            </Dialog>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Success;