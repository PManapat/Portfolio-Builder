import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    navColor:'',
    navText:'',
    backgroundColor: '',
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

  render() {
    const { step } = this.state;
    const {  
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
      footer } = this.state;
    const values = {
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
     };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            // nextStep={this.props.history.push('/mainprofile')}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success 
        nextStep={this.props.history.push('/mainprofile')}
        values={values}
        />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
