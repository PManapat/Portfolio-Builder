import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
           
            <TextField
              placeholder="Enter Your GitHub Link"
              label="GitHub Link"
              onChange={handleChange('githubLink')}
              defaultValue={values.githubLink}
              margin="normal"
              fullWidth
            />
            <br />
             <TextField
              placeholder="Enter Your Linkdin Link"
              label="Linkdin Link"
              onChange={handleChange('linkdin')}
              defaultValue={values.linkdin}
              margin="normal"
              fullWidth
            />
            <br />
           
           
           
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
