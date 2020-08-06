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
				<h1>Hi! My name is Elon</h1>
				<p className='here'>
					I am an engineer, industrial designer, technology entrepreneur and philanthropist.
				</p>
				</Container>
			</Jumbotron>
			<Container className='About'>
				<Figure>
				<Figure.Image
					width={171}
					height={180}
					alt="171x180"
					src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
				/>
				<Figure.Caption>
					Nulla vitae elit libero, a pharetra augue mollis interdum.
				</Figure.Caption>
				</Figure>
			</Container>
		</div>
    )
}