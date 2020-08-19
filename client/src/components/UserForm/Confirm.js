import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { profile } from "../../utils/api.js";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import TypoGraphy from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { grey } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#17A2b8",
    },
    secondary: {
      main: grey[900],
    },
  },
});

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    const {
      values: {
        navColor,
        navText,
        navImage,
        introText,
        introTitle,
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
        footer,
      },
    } = this.props;

    const newUser = {
      navColor: navColor,
      navText: navText,
      navImage: navImage,
      introText: introText,
      introTitle: introTitle,
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
      footer: footer,
    };

    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        navColor,
        navText,
        navImage,
        introText,
        introTitle,
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
        footer,
      },
    } = this.props;

    const StyledButton = withStyles({
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 36,
        size: 'large',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      label: {
        textTransform: 'capitalize',
      },
    })(Button);

    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Dialog open fullWidth maxWidth="lg">
            <AppBar color="primary" position="static">
              <Link to="/home">
                <Icon color="secondary">backspace</Icon>
              </Link>
              <Toolbar>
                <TypoGraphy variant="title" color="inherit">
                  <h1>Confirm Your Details</h1>
                </TypoGraphy>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem>
                <ListItemText primary="Nav Color" secondary={navColor} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nav Text" secondary={navText} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nav Image" secondary={navImage} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary=" Introduction Text"
                  secondary={introText}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary=" Introduction Title"
                  secondary={introTitle}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="About Me" secondary={bio} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="About background Image"
                  secondary={aboutBgColor}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="profile Image"
                  secondary={profileImage}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Project One Title"
                  secondary={ProjectOneTitle}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Project One Text"
                  secondary={ProjectOneText}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Project One Url"
                  secondary={ProjectOneUrl}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Project Two Title"
                  secondary={ProjectTwoTitle}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Project Two Text"
                  secondary={ProjectTwoText}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Project Two Url"
                  secondary={ProjectTwoUrl}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Project Three Title"
                  secondary={ProjectThreeTitle}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Project Three Text"
                  secondary={ProjectThreeText}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Project Three Url"
                  secondary={ProjectThreeUrl}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Resume Url" secondary={resumeUrl} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Github Link" secondary={githubLink} />
              </ListItem>
              <ListItem>
                <ListItemText primary="linkedIn" secondary={linkdin} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Footer" secondary={footer} />
              </ListItem>
            </List>
            <br />

            <div className="row" style={{marginLeft: 'auto', marginRight: 'auto'}}>
              <div>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.back}
                >
                  Back
                </Button>
              </div>
              <div style={{marginLeft: '10px', marginRight: '10px'}}>
              <StyledButton variant="contained" onClick={this.continue}>CONFIRM</StyledButton>
              </div>
            </div>
          <br />
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
