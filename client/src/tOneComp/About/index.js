import React from 'react';
import './style.css';
import Figure from 'react-bootstrap/Figure';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


export default function (){
    return(
		<div className='Container'>
			<Jumbotron className='Jumbo' fluid>
				<Container className='container'>
				<h1>Hello World</h1>
				<p className='here'>
					I am an engineer, industrial designer, technology entrepreneur and philanthropist.
				</p>
				</Container>
			</Jumbotron>
			<Container className='About' id='About'>
				<Figure>
				<Figure.Caption>
					Elon Musk
				</Figure.Caption>	
				<Figure.Image id="profilePic"
					width={300}
					height={300}
					alt="300x300"
					src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
				/>
				<Figure.Caption>
					Tesla | Space X
				</Figure.Caption>
				</Figure>
			</Container>
		</div>
    )
}