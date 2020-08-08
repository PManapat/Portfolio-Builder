import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { profile } from "../../utils/api.js";
import { Link } from "react-router-dom";
export class Confirm extends Component {
  

  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    //let history = useHistory();
    // let history = useHistory();
    const {
      values: { email,firstName,lastName,navColor, navText,backgroundColor,bio,githubLink,linkdin,footer}
    } = this.props;
    // console.log(this.props);
    // console.log(this.props.values.firstName);
    // console.log(this.props.values.lastName);
    // console.log(this.props.values.email);
    // console.log(this.props.values.occupation);
    // console.log(this.props.values.city);
    // console.log(this.props.values.bio);
    

    const newUser = {
     emai: email,
     firstName:firstName,
     lastName: lastName,
     navColor: navColor,  
     navText: navText,
     backgroundColor: backgroundColor,
     bio: bio,
     githubLink:githubLink,
     linkdin:linkdin,
     footer: footer
    }
    //we can do this also
    //   const newUser = {
    //   firstName: this.props.values.firstName,
    // email: this.props.values.email,
    // lastName: this.props.values.lastName,
    // occupation: this.props.values.occupation,
    // city:this.props.values.city,
    // bio: this.props.values.bio,
    // }
    

    profile(newUser).then(function (res) {
      // let history = useHistory();
      // return history.push("/mainprofile")
      // if (res) {
      //   this.props.history.push(`/mainprofile`)
      // }
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
      values: { email,firstName,lastName,navColor, navText,backgroundColor,bio,githubLink,linkdin,footer }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='lg'
          >
            <Link to="/home"><button>x</button></Link>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="GitHub Link" secondary={githubLink} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Linkdin Link" secondary={linkdin} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nav Color" secondary={navColor} />
                </ListItem>
                <ListItem>
                <ListItemText primary="Nav Text" secondary={navText} />
              </ListItem>
              <ListItem>
                <ListItemText primary="BackGround Color" secondary={backgroundColor} />
              </ListItem>
              <ListItem>
                <ListItemText primary="About Me" secondary={bio} />
                </ListItem>
             
            </List>
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
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
