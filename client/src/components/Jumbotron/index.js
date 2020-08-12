import React from 'react' ;
import "./style.css";
import Button from '../Button';
import { Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Jumbrotron (props){
  let history = useHistory();
// console.log(props);

	function handleClick() {
		return (history.push("/login"))
  }
  return(
    <Jumbotron id="jumbo">
      <h1>Welcome  {props.firstName}</h1>
      <h1> Create and Customize a Portfolio </h1>
      <p>
        Beautiful designs, powerful features, and the freedom to build anything you want. 
        Portfolio Builder is both free and priceless at the same time.
      </p>
      <p>
        <Button onClick={handleClick} className="btn btn-info btn-lg" name="Get Started"></Button>
      </p>
    </Jumbotron>
  )
}

export default Jumbrotron;