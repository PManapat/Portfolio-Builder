import React from 'react';
// import { useHistory } from 'react-router-dom';

function Button({name, onClick}) {
	// let history = useHistory();
	// function handleClick() {
	// 	// console.log("I am clicked");
	// 	return (history.push("/"))
	// }
	return (
		<button type="button" className="btn btn-info btn-lg" onClick={onClick}>{name}</button>
	);
}

export default Button;