import React, { Component } from 'react';
import NavBarDetails from './NavBarDetails';
import AboutMeDetails from './AboutMeDetails';
import ProjectDetails from './ProjectDetails';
import Confirm from './Confirm';
import Success from './Success';
// import Nav from "../Navbar";
import UserNav from "../UserNav";
// import {home} from '../../utils/api';

export class UserForm extends Component {
  state = {
    step: 1,
    // navbar: '',
    firstName: '',
    lastName: '',
    navColor:'',
    navText:'',
    navImage: '',
    introText: '',
    introTitle: '',
    bio: '',
    aboutBgColor:'',
    profileImage:'',
    ProjectOneTitle:'',
    ProjectOneText:'',
    ProjectOneUrl:'',
    ProjectTwoTitle:'',
    ProjectTwoText:'',
    ProjectTwoUrl:'',
    ProjectThreeTitle:'',
    ProjectThreeText:'',
    ProjectThreeUrl:'',
    resumeUrl:'',
    githubLink:'',
    linkdin:'',
    footer: ''
};

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // componentDidMount(){
  //   home()
  //         .then(res => {
  //             console.log("from userform component didmount",res);
  //             console.log(this.state);
  //             const{firstName, lastName}=res;
  //             console.log({firstName});
  //             this.setState({firstName});
  //             this.setState({lastName});
  //             console.log(this.state);
  //             // setPortfolio(`/${firstName}`);
  //         }).catch(err => console.log(err));
  // }

//   componentDidMount(){
//     console.log("from userform component didmount", this.state);
//     const firstName = "boo"
//                   this.setState({firstName});
//               // this.setState({lastName});
//               console.log(this.state);
// }

  render() {
    
    const { step } = this.state;
    const { 
      // Nav,
      firstName,
      lastName,
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
      footer
    } = this.state;
    const values = {
      // Nav,
      firstName,
      lastName,
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
      footer
     };

    switch (step) {
      case 1:
        return (
          <div>
            <UserNav />
            <NavBarDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
      case 2:
        return (
          <div>
          <UserNav />
          <AboutMeDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
        case 3:
          return (
            <div>
            <UserNav />
            <ProjectDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            </div>
          );
      case 4:
        return (
          <div>
            <UserNav />
          <Confirm
            // nextStep={this.props.history.push('/mainprofile')}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
          </div>
        );
      case 5:
        return           <div>
        <UserNav />
        <Success 
        nextStep={this.props.history.push(`/quickdesign`)}
        values={values}
        />
        </div>
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;