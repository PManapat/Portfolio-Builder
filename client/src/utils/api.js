import axios from 'axios'
import {Authheaders} from "./frontendmiddlewar";

//front end route for signup
export const register = newUser => {
  return axios
    .post('api/users', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}
//route for login
export const login = user => {
  return axios
    .post('api/auth', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log("from the api.js",response);
      if (response.data.token) {
        localStorage.setItem("user", (response.data.token));
      }
      console.log(response.data.token);

      // localStorage.setItem('usertoken', response.data);


 

      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user=> {
  return axios
    .get('api/auth', 
    { 
  // //     headers: {
  // //    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYyOGEwMDhlNTkyNjExM2MyMDA5ODNjIn0sImlhdCI6MTU5NjQ5ODQ1NSwiZXhwIjoxNTk2OTMwNDU1fQ.O6o_IA9sttDy0Di-2ajIMVXOUT_VOKSOuqGIY6q71E8'
  // // }
  headers:Authheaders
  
    
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
///route for getting main profile
export const mainProfile = user=> {
  return axios
    .get('api/auth/mainprofile', 
    { 
  // //     headers: {
  // //    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYyOGEwMDhlNTkyNjExM2MyMDA5ODNjIn0sImlhdCI6MTU5NjQ5ODQ1NSwiZXhwIjoxNTk2OTMwNDU1fQ.O6o_IA9sttDy0Di-2ajIMVXOUT_VOKSOuqGIY6q71E8'
  // // }
  headers:Authheaders
  
    
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}


///


export function getCurrentUser(){
  return JSON.parse(localStorage.getItem('user'));


}

export function  logout() {
  localStorage.removeItem("user");

}

//route for profile from wizard

export const profile = newUser => {
  return axios
    .post('api/profile', {
      emai: newUser.email,
      firstName:newUser.firstName,
      lastName: newUser.lastName,
      navColor: newUser.navColor,  
      navText: newUser.navText,
      backgroundColor: newUser.backgroundColor,
      bio: newUser.bio,
      githubLink: newUser.githubLink,
      linkdin: newUser.linkdin,
      footer: newUser.footer
    })
    .then(response => {
      console.log('profile send to backend');
      return response.data
    })
    .catch(err =>{
      console.log(err);
    });
}