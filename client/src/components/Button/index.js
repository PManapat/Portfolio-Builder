import React from 'react';

export default ({name, onClick, className}) => {
	return (
		<button type="submit" className={className} onClick={onClick}>{name}</button>
	);
}