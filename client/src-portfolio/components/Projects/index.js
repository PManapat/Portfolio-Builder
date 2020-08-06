import React, {useState} from 'react';
import Form from '../Form';
import Footer from '../Footer';

import { Nav, Tabs, Tab, Image } from 'react-bootstrap';

export default function() {
	// pass link
	const [link, setLink] = useState("https://www.google.com/");

	// pass function on event change
	const [greeting, setGreeting] = useState("green");

	const handleChange = event => {setLink(event.target.value)
		console.log(greeting);
	};


	return (
		<div className='container'>
			<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
				<Tab eventKey="home" title="Step1">
					<Image src="https://imgur.com/PQc8a7k" fluid />
					{/* <Form url={link} headline={greeting} onChangeHeadline={handleChange} /> */}
				</Tab>
				<Tab eventKey="profile" title={link} href="">
				<Nav defaultActiveKey="/home" className="flex-column footer">
					<Nav.Link style={{backgroundColor: greeting}} href={link} target="_blank">Google</Nav.Link>
					<Nav.Link eventKey="link-1">About</Nav.Link>
					<Nav.Link eventKey="link-2">Projects</Nav.Link>
				</Nav>
				</Tab>
				<Tab eventKey="contact" title="Step3">
					<Form url={link} headline={greeting} onChangeHeadline={handleChange} onLinkChange={handleChange} />
				</Tab>
				<Tab eventKey="" title="Step4">
					<Footer />
				</Tab>
			</Tabs>
		</div>
	)
}