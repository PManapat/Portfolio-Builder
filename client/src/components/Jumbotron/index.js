import React from 'react' ;
import "./style.css";
import Button from '../Button';
import { Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Jumbrotron (){
  let history = useHistory();

	function handleClick() {
		return (history.push("/login"))
  }
  return(
    <Jumbotron>
      <h1> Meet Portfolio Builder!! </h1>
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