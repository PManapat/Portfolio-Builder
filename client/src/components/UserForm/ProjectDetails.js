import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


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
            <TextField
              placeholder="ProjectOneTitle"
              label="Project One Title"
              onChange={handleChange('ProjectOneTitle')}
              defaultValue={values.ProjectOneTitle}
              margin="normal"
              fullWidth
            />
            <br />
           <TextField
              placeholder="ProjectOneText"
              label="Project One Text"
              onChange={handleChange('ProjectOneText')}
              defaultValue={values.ProjectOneText}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="ProjectOneUrl"
              label="Project One Link"
              onChange={handleChange('ProjectOneUrl')}
              defaultValue={values.ProjectOneUrl}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="ProjectTwoTitle"
              label="Project Two Title"
              onChange={handleChange('ProjectTwoTitle')}
              defaultValue={values.ProjectTwoTitle}
              margin="normal"
              fullWidth
            />
            <br />
           <TextField
              placeholder="ProjectTwoText"
              label="Project Two Text"
              onChange={handleChange('ProjectTwoText')}
              defaultValue={values.ProjectTwoText}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="ProjectTwoUrl"
              label="Project Two Link"
              onChange={handleChange('ProjectTwoUrl')}
              defaultValue={values.ProjectTwoUrl}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="ProjectThreeTitle"
              label="Project Three Title"
              onChange={handleChange('ProjectThreeTitle')}
              defaultValue={values.ProjectThreeTitle}
              margin="normal"
              fullWidth
            />
            <br />
           <TextField
              placeholder="ProjectThreeText"
              label="Project Three Text"
              onChange={handleChange('ProjectThreeText')}
              defaultValue={values.ProjectThreeText}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="ProjectThreeUrl"
              label="Project Three Link"
              onChange={handleChange('ProjectThreeUrl')}
              defaultValue={values.ProjectThreeUrl}
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

export default ProjectDetails;