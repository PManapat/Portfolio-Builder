import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


import MenuItem from '@material-ui/core/MenuItem';

export class AboutMeDetails extends Component {
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
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <Link to="/home"><button>x</button></Link>
            <AppBar title="About Me" />
            <TextField
              placeholder="Enter Text For Introduction"
              label="Enter Text For Introduction"
              onChange={handleChange('introText')}
              defaultValue={values.introText}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Text Introduction Title"
              label="Enter Text Introduction Title"
              onChange={handleChange('introTitle')}
              defaultValue={values.introTitle}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Text For About Me Section"
              label="Enter Text For About Me Section"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField 
            id="select" 
            label="Background Color For About Me page" 
            onChange={handleChange('aboutBgColor')}
            defaultValue={values.navColor}
            select>
           <MenuItem value="#008000">Green</MenuItem>
           <MenuItem value="#FF0000">Red</MenuItem>
           <MenuItem value="#647ba1">Blue</MenuItem>
           <MenuItem value="#ada965">Lemon</MenuItem>
           <MenuItem value="#4b5669">Grey</MenuItem>
           </TextField>
           <br/>
           <TextField
              placeholder="Profile Image"
              label="Profile Image"
              onChange={handleChange('profileImage')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Resume Link"
              label="Resume Link"
              onChange={handleChange('resumeUrl')}
              defaultValue={values.resumeUrl}
              margin="normal"
              fullWidth
            />
            <br />
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
              placeholder="Enter Your LinkedIn Link"
              label="Linkdin Link"
              onChange={handleChange('linkdin')}
              defaultValue={values.linkdin}
              margin="normal"
              fullWidth
            />
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
          

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

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

export default AboutMeDetails;
