import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { profile } from "../../utils/api.js";
import { Link } from "react-router-dom";
export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    const {
      values: { 
        navColor,
        navText,
        backgroundColor,
        bio,
        aboutBgColor,
        profileImage,
        ProjectOneTitle,
        ProjectOneText,
        ProjectOneUrl,
        ProjectTwoTitle,
        ProjectTwoText,
        ProjectTwoUrl,
        ProjectThreeTitle,
        ProjectThreeText,
        ProjectThreeUrl,
        resumeUrl,
        githubLink,
        linkdin,
        footer
      }
    } = this.props;

    const newUser = {
      navColor: navColor,
      navText: navText,
      backgroundColor: backgroundColor,
      bio: bio,
      aboutBgColor: aboutBgColor,
      profileImage: profileImage,
      ProjectOneTitle: ProjectOneTitle,
      ProjectOneText: ProjectOneText,
      ProjectOneUrl: ProjectOneUrl,
      ProjectTwoTitle: ProjectTwoTitle,
      ProjectTwoText: ProjectTwoText,
      ProjectTwoUrl: ProjectTwoUrl,
      ProjectThreeTitle: ProjectThreeTitle,
      ProjectThreeText: ProjectThreeText,
      ProjectThreeUrl: ProjectThreeUrl,
      resumeUrl: resumeUrl,
      githubLink: githubLink,
      linkdin: linkdin,
      footer: footer
    }
    profile(newUser).then(function (res) {
      console.log(res);
    })
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        navColor,
        navText,
        backgroundColor,
        bio,
        aboutBgColor,
        profileImage,
        ProjectOneTitle,
        ProjectOneText,
        ProjectOneUrl,
        ProjectTwoTitle,
        ProjectTwoText,
        ProjectTwoUrl,
        ProjectThreeTitle,
        ProjectThreeText,
        ProjectThreeUrl,
        resumeUrl,
        githubLink,
        linkdin,
        footer
      }
    } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <Dialog open fullWidth maxWidth='lg'>
            <Link to="/home">
              <button>x</button>
            </Link>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Nav Color" secondary={navColor}  />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nav Text" secondary={navText}/>
              </ListItem>
              <ListItem>
                <ListItemText primary=" Nav BackGround Color" secondary={backgroundColor}  />
              </ListItem>
              <ListItem>
                <ListItemText primary="About Me" secondary={bio} />
              </ListItem>
              <ListItem>
                <ListItemText primary="About background Image" secondary={aboutBgColor} />
              </ListItem>
              <ListItem>
                <ListItemText primary="profileImage" secondary={profileImage} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project One Title" secondary={ProjectOneTitle} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project One Text" secondary={ProjectOneText} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project One Url" secondary={ProjectOneUrl} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project Two Title" secondary={ProjectTwoTitle} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project Two Text" secondary={ProjectTwoText} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project Two Url" secondary={ProjectTwoUrl} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project Three Title" secondary={ProjectThreeTitle} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project Three Text" secondary={ProjectThreeText} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project Three Url" secondary={ProjectThreeUrl} />
                </ListItem>
                <ListItem>
                <ListItemText primary="resume Url" secondary={resumeUrl} />
              </ListItem>
              <ListItem>
                <ListItemText primary="github Link" secondary={githubLink} />
              </ListItem>
              <ListItem>
                <ListItemText primary="linkdin" secondary={linkdin} />
                </ListItem>
                <ListItem>
                <ListItemText primary="Footer" secondary={footer} />
                </ListItem>
            </List>
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
            <Button color="primary" variant="contained" onClick={this.continue}>
              Confirm & Continue
            </Button>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  };
};

export default Confirm;
