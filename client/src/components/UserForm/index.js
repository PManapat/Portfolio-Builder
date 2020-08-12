import React, { Component } from 'react';
import NavBarDetails from './NavBarDetails';
import AboutMeDetails from './AboutMeDetails';
import ProjectDetails from './ProjectDetails';
import Confirm from './Confirm';
import Success from './Success';
// import {home} from '../../utils/api';

export class UserForm extends Component {
  state = {
    step: 1,
    // firstName: '',
    // lastName: '',
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
  //             const{firstName, lastName}=res;
  //             console.log({firstName});
  //             this.setState({firstName});
  //             this.setState({lastName});
  //             // setPortfolio(`/${firstName}`);
  //         }).catch(err => console.log(err));
  // }
  
  render() {
    const { step } = this.state;
    const {  
      // firstName,
      // lastName,
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
      // firstName,
      // lastName,
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
          <NavBarDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <AboutMeDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
          return (
            <ProjectDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
      case 4:
        return (
          <Confirm
            // nextStep={this.props.history.push('/mainprofile')}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success 
        nextStep={this.props.history.push(`/quickdesign`)}
        values={values}
        />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;