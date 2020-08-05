import React from 'react';
import UserForm from "../UserForm";
import { useHistory } from 'react-router-dom';

function Button() {
	let history = useHistory();
	function handleClick() {
		console.log("I am clicked");
		return (history.push("/UserForm"))
	}
	return (
		<button type="button" className="btn btn-info btn-lg" onClick={handleClick}>Get Started</button>
	);
}

export default Button;