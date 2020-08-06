// import React from 'react';
// import { Form } from 'react-bootstrap';

// export default function () {

// 	function handleChange(){
// 		console.log('Clicked');
// 	}

// 	return (
// 		<div className="container" style={{backgroundColor: 'tan', padding: '5rem', margin: '2rem'}}>
// 			<Form>
// 				{['checkbox'].map((type) => (
// 					<div key={`inline-${type}`} className="mb-3">
// 					<Form.Check inline label="Option 1" type={type} id={`inline-${type}-1`} onChange={handleChange}/>
// 					<Form.Check inline label="Option 2" type={type} id={`inline-${type}-2`} onChange={handleChange}/>
// 					</div>
// 				))}
// 			</Form>
// 		</div>
// 	)
// }

import React, {useState} from "react";
import { useForm } from "react-hook-form";

export default function App(props) {
	// // Input Form Submit example
	//   const { register, handleSubmit, errors } = useForm();
	//   const onSubmit = function (data) {
	// 	  console.log(data);
	// 	  console.log(data.anyName);
	//   }

	const [url, setUrl] = useState(props.url);

	// Checkboxes Form example
	const onSubmit = (data) => {
		console.log(data);
		console.log(data.url);
		console.log(url);
		setUrl(data.url);
		// console.log(setUrl);
	};
	const { handleSubmit, register, errors } = useForm();

	// const handleChange = event => setGreeting(event.target.value);

	return (
		<div style={{backgroundColor: 'lightgrey'}}>
			
			<h1>{props.headline}</h1>
			<input type="text" value={props.headline} onChange={props.onChangeHeadline} />

			<br />
			<br />

			{/* Inpit form example */}
			<h4>Input your github url</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">{props.link}</label>
				<input type="text" id="name" value={props.link} onChange={props.onLinkChange} name="url" ref={register({ required: false, maxLength: 30 })} />
				{errors.name && errors.name.type === "required" && <span>This is required</span>}
				{errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
				<input type="submit" />
			</form>

			<br />
			<br />

			{/* Checkboxes form example */}
			<h4>Select what you would like to include in your portfolio</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					<input
						ref={register({ required: false })}
						name="darktheme"
						value={true}
						type="checkbox"
					/>
				Dark theme
			</label>
				<br />
				<label>
					<input
						ref={register({ required: false })}
						name="lighttheme"
						value={true}
						type="checkbox"
					/>
				Light Theme
			</label>
				{errors.example_1 && <p class="error">{errors.example_1.message}</p>}
				<br />
				<button type="submit">submit</button>
			</form>

		</div>
	);
}
