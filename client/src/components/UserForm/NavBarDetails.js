import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import Nav from '../UserNav';


export class NavBarDetails extends Component {
  
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
             <AppBar color="primary" position="static">
             <Link to="/home"><Icon color="secondary">backspace</Icon></Link>
           <Toolbar>
            <TypoGraphy variant="title" color="inherit" >
            <h1>Enter NavBar Details</h1>
           </TypoGraphy>
          </Toolbar>
        </AppBar>
            <br/>
            <TextField 
              id="select" 
              label="Background Image for NavBar" 
              onChange={handleChange('navImage')}
              defaultValue={values.navImage}
              margin="normal"
              fullWidth
              />
          
            <br/>
                
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
           <br/>
           <TextField 
            id="select" 
            label="Background Image for NavBar" 
            onChange={handleChange('navImage')}
            defaultValue={values.navImage}
            margin="normal"
            fullWidth
            />
        
           <br/>
               
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={this.continue}
            >Continue</Button>

            </Dialog>
          </>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default NavBarDetails;