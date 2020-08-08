import React from 'react' ;
import "./style.css";
import Button from '../Button';
import { Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Jumbrotron (){
  let history = useHistory();
	function handleClick() {
		// console.log("I am clicked");
		return (history.push("/userForm"))
  }
  
    return(
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          {/* Button component default from reactstrap */}
          {/* <Button variant="primary">Learn more</Button> */}

          {/* Button component created by rich in components folder*/}
    <Button onClick={handleClick} name="Get Started"></Button>
        </p>
      </Jumbotron>
    )
}

export default Jumbrotron;