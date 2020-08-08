import React from 'react';
// import { useHistory } from 'react-router-dom';

export default ({name, onClick, className}) => {
	// let history = useHistory();
	// function handleClick() {
	// 	// console.log("I am clicked");
	// 	return (history.push("/"))
	// }
	return (
		<button type="submit" className={className} onClick={onClick}>{name}</button>
	);
}