import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
// import Nav from "../UserNav";
import { grey } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#17A2b8",
    },
    secondary: {
      main: grey[900]
    }
  }
})

export class NavBarDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (

      <MuiThemeProvider theme={theme}>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
             <AppBar color="primary" position="static">
             <Link to="/home"><Icon color="secondary">backspace</Icon></Link>
           <Toolbar>
            <TypoGraphy variant="title" color="inherit" >
            <h1>Enter Navbar Details</h1>
           </TypoGraphy>
          </Toolbar>
        </AppBar>
            
            <br/>
            <TextField
              placeholder="Text On Navbar"
              label="Text On Navbar"
              onChange={handleChange('navText')}
              defaultValue={values.navText}
              margin="normal"
              fullWidth
            />
            <br/>
            <TextField 
            id="select" 
            label="Color for Navbar" 
            onChange={handleChange('navColor')}
            defaultValue={values.navColor}
            select>
          <MenuItem value="#A9A8A5">Silver Chalice</MenuItem>
           <MenuItem value="#821717">Crimson Red</MenuItem>
           <MenuItem value="#11306A">Royal Blue Dark</MenuItem>
           <MenuItem value="#FAE779">Yellow Crayola</MenuItem>
           <MenuItem value="#2A2C2E">Jet Black</MenuItem>
           </TextField>
           <br/>
           <TextField 
            id="select" 
            label="Background Image for Navbar" 
            onChange={handleChange('navImage')}
            defaultValue={values.navImage}
            margin="normal"
            fullWidth
            />
        
           <br/>
           <div className="row" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={this.continue}
            >Continue</Button>
            </div>
            <br/>
            </Dialog>
          </>
        </MuiThemeProvider>
    );
  }
}

export default NavBarDetails;
