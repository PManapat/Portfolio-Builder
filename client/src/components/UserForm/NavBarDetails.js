import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import "./style.css"

export class NavBarDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider id="card">
        <>
          <Dialog open fullWidth maxWidth="sm">
            <Link to="/home">
              <button>x</button>
            </Link>
            <AppBar title="Enter NavBar Details" />
            <br />
            <TextField
              label="Add text to your nav bar"
              onChange={handleChange("navText")}
              defaultValue={values.navText}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <TextField
              id="select"
              label="Select a color for you nav bar"
              onChange={handleChange("navColor")}
              defaultValue={values.navColor}
              select
            >
              <MenuItem value="#008000">Green</MenuItem>
              <MenuItem value="#FF0000">Red</MenuItem>
              <MenuItem value="#647ba1">Blue</MenuItem>
              <MenuItem value="#ada965">Lemon</MenuItem>
              <MenuItem value="#4b5669">Grey</MenuItem>
            </TextField>
            <br />
            <br />
            <TextField
              id="select"
              label="Add a background image (must use png or jpg)"
              onChange={handleChange("navImage")}
              defaultValue={values.navImage}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default NavBarDetails;
