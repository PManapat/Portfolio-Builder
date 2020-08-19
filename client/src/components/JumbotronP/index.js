import React from 'react' ;
import Button from '../Button';
import { Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function JumbotronP (){
  let history = useHistory();
	function handleClick() {
		return (history.push("/login"))
  }
  
    return(
      <Jumbotron>
        <h1> Meet AA Productions!!</h1>
        <p>
        We are a husband and wife team, along side a talented photo and video crew we have been to do what we love and capture the best moments celebrated by families. 

        So much more goes into your wedding than taking amazing images. From helping with a plan to managing the many emotions on your wedding day. You get a team that is prepared for whatever comes our way. 
        </p>
        <p>
          <Button onClick={handleClick} className="btn btn-info btn-lg" name="Get Started"></Button>
        </p>
      </Jumbotron>
    )
}

export default JumbotronP;