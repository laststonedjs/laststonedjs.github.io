import React from 'react'
// assets
import chatorzo_project1 from '../../assets/chatorzo_portfolio_react.jpg'
import name_it_project2 from '../../assets/name-it-portfolio.png'
import gamesoft_project3 from '../../assets/gamesoft_portfolio_angular.jpg'
import bookndrive_project4 from '../../assets/project4.png'
import pokedex_project5 from '../../assets/pokedex_portfolio.jpg'
import zec_archive_project6 from '../../assets/zecMob.png'
// styles
import './Portfolio.css'

const data = [
	{
		id: 1,
		image: chatorzo_project1,
		title: 'Built in React real-time chat messaging and using "getStream" SDK library. Connected to the backend with Express.js and Nodemon.',
		github: 'https://github.com/laststonedjs/Chatorzo',
	},
	{
		id: 2,
		image: name_it_project2,
		title: '"Name It" is a simple application that allows you to search for a cool name for your next project/startup. Built using React.',
		github: 'https://github.com/laststonedjs/Name-It',
	},
	{
		id: 3,
		image: gamesoft_project3,
		title: 'An app that deals with the sale of video games, used Angular and Node.js for development and made as a "final project" during my studies.',
		github: 'https://github.com/laststonedjs/gamesoft-app',
	},
	{
		id: 4,
		image: bookndrive_project4,
		title: 'BookNDrive is an Enterprise web and mobile app that is used for car sharing. The business is centered in Germany and has 10,000 daily active users.',
		github: 'https://github.com/laststonedjs/book-n-drive',
	},
	{
		id: 5,
		image: pokedex_project5,
		title: 'As a big fan of this series, I made a personal pokedex using JavaScript. Have fun and meet my collection of pokemons!',
		github: 'https://github.com/laststonedjs/Pokedex',
	},
	{
		id: 6,
		image: zec_archive_project6,
		title: "Original idea to create an inventory of the client's impressive life works and we embodied it through the 'Zec Archive' project.",
		github: 'https://github.com/laststonedjs/zec-archive',
	},
]

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({id, image, title, github, linkedIn}) => {
						return (
							<article 
								key={id}
								className="portfolio-item">
								<div className="portfolio__item-image">
									<img src={image} alt={title} />
									</div>
									<h3>{title}</h3>
									<div className="portfolio__item-cta">
									<a href={github} 
										className='btn' 
										target='_blank' 
										rel="noreferrer">
											GitHub
									</a>
									{/* <a href={linkedIn} 
										className='btn btn-primary' 
										target='_blank' 
										rel="noreferrer">
											LinkedIn
									</a> */}
								</div>
							</article>
						)
					})
				}
			</div>
		</section>
	)
}

export default Portfolio;