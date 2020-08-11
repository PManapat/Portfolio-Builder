import React from 'react' ;
// import "./style.css";
import Button from '../Button';
// import { Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



function JumbotronR (){
  let history = useHistory();
	function handleClick() {
		// console.log("I am clicked");
		return (history.push("/login"))
  }
  
    return(
      <JumbotronR>
          <h1> Welcome to Punjab Grill!!</h1>
          <p>
          Punjab Grill welcomes its guests to experience the region’s legendary and unrivaled hospitality, offered generously to every visitor, and borne out of a love of bringing people together to enjoy time-honored traditions of refined diversion. 

          Recipes handed down from generations of khansaamas,  the Punjabi royal chefs,  and steeped in the flavors of history, expertly coordinated cocktails and an abundance of spectacular wines can be savored amidst our sumptuous decor, in an edifice which has been recreated by hand in the high sensual style of the fin de siècle Maharajas, who were dedicated patrons of the arts and fine craftsmanship.  And who treated dining, and most everything else, as an art form.
          </p>
          <p>
            {/* Button component default from reactstrap */}
            {/* <Button variant="primary">Learn more</Button> */}

          {/* Button component created by rich in components folder*/}
    <Button onClick={handleClick} className="btn btn-info btn-lg" name="Get Started"></Button>
        </p>

      </JumbotronR>
    )
}

// const divStyle = {
//   color: 'black',
  // backgroundImage: 'url(' + imgUrl + ')',
// };

// function HelloWorldComponent() {
//   return <div style={divStyle}>Hello World!</div>;
// }

export default JumbotronR;