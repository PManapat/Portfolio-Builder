import React from 'react';

function Button () {
	function handleClick(){
		console.log("I am clicked")
	}
	return ( 
			<button type="button" className="btn btn-info btn-lg" onClick={handleClick}>Get Started</button>
	);
}

export default Button;