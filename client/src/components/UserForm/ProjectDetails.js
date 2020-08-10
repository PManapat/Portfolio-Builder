import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./style.css";

import MenuItem from '@material-ui/core/MenuItem';

export class ProjectDetails extends Component {
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
            <AppBar title="Project " />
           <br />
           Project One
            <TextField
              label="Add a Title for your first Project"
              onChange={handleChange('ProjectOneTitle')}
              defaultValue={values.ProjectOneTitle}
              margin="normal"
              fullWidth
            />
            <br />
           <TextField
              label="Add text to describe your first Project"
              onChange={handleChange('ProjectOneText')}
              defaultValue={values.ProjectOneText}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Add a URL Link for your first Project"
              onChange={handleChange('ProjectOneUrl')}
              defaultValue={values.ProjectOneUrl}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <br />
            <br />
           Project Two
            <TextField
              label="Add a Title for your second Project"
              onChange={handleChange('ProjectTwoTitle')}
              defaultValue={values.ProjectTwoTitle}
              margin="normal"
              fullWidth
            />
            <br />
           <TextField
              label="Add text to describe your second Project"
              onChange={handleChange('ProjectTwoText')}
              defaultValue={values.ProjectTwoText}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Add a URL Link for your second Project"
              onChange={handleChange('ProjectTwoUrl')}
              defaultValue={values.ProjectTwoUrl}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <br />
            <br />
           Project Three
            <TextField
              placeholder="Add a Title for your third Project"
              label="Project Three Title"
              onChange={handleChange('ProjectThreeTitle')}
              defaultValue={values.ProjectThreeTitle}
              margin="normal"
              fullWidth
            />
            <br />
           <TextField
              label="Add text to describe your third Project"
              onChange={handleChange('ProjectThreeText')}
              defaultValue={values.ProjectThreeText}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Add a URL Link for your third Project"
              onChange={handleChange('ProjectThreeUrl')}
              defaultValue={values.ProjectThreeUrl}
              margin="normal"
              fullWidth
            />
            <br />
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

export default ProjectDetails;
