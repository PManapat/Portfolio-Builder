import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <Dialog open fullWidth maxWidth='sm'>
            <Link to="/home">
              <button>x</button>
            </Link>
            <AppBar title="Enter Personal Details" />
            <TextField
              id="select"
              label="Color for Nav Bar"
              onChange={handleChange('navColor')}
              defaultValue={values.navColor}
              select>
              <MenuItem value="#008000">Green</MenuItem>
              <MenuItem value="#FF0000">Red</MenuItem>
              <MenuItem value="#647ba1">Blue</MenuItem>
              <MenuItem value="#ada965">Lemon</MenuItem>
              <MenuItem value="#4b5669">Grey</MenuItem>
            </TextField>
            <br />
            <TextField
              placeholder="Text On Nav Bar"
              label="Text On Nav Bar"
              onChange={handleChange('navText')}
              defaultValue={values.navText}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              id="select"
              label="Background Color"
              onChange={handleChange('backgroundColor')}
              defaultValue={values.backgroundColor}
              select>
              <MenuItem value="#008000">Green</MenuItem>
              <MenuItem value="#FF0000">Red</MenuItem>
              <MenuItem value="#647ba1">Blue</MenuItem>
              <MenuItem value="#ada965">Lemon</MenuItem>
              <MenuItem value="#4b5669">Grey</MenuItem>
            </TextField>
            <br />
            <TextField
              placeholder="Enter Text For Footer"
              label="Footer"
              onChange={handleChange('footer')}
              defaultValue={values.footer}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Text For About Me Section"
              label="About Me"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  };
};

export default FormPersonalDetails;
