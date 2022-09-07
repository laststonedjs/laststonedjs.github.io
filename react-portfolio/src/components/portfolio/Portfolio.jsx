import React from 'react'
// assets
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'
// styles
import './Portfolio.css'

const data = [
	{
		id: 1,
		image: project1,
		title: 'I have implemented plenty of animations adapted to the client content and needs.',
		github: 'https://github.com/laststonedjs',
		linkedIn: 'https://www.linkedin.com/in/filip-sarovic-4376a61a1/'
	},
	{
		id: 2,
		image: project2,
		title: 'Original invention of me and my team that allows all the members of a working community to share and learn from various feedbacks from their colleagues.',
		github: 'https://github.com/laststonedjs',
		linkedIn: 'https://www.linkedin.com/in/filip-sarovic-4376a61a1/'
	},
	{
		id: 3,
		image: project3,
		title: 'Bob the SheepO represents the NFT collection. I have helped with website development.',
		github: 'https://github.com/laststonedjs',
		linkedIn: 'https://www.linkedin.com/in/filip-sarovic-4376a61a1/'
	},
	{
		id: 4,
		image: project4,
		title: 'BookNDrive is an Enterprise web and mobile app that is used for car sharing. The business is centered in Germany and has 10,000 daily active users.',
		github: 'https://github.com/laststonedjs',
		linkedIn: 'https://www.linkedin.com/in/filip-sarovic-4376a61a1/'
	},
	{
		id: 5,
		image: project5,
		title: 'Original idea to create an inventory of the client impressive life works and we embodied it through the "Zec Archive" project.',
		github: 'https://github.com/laststonedjs',
		linkedIn: 'https://www.linkedin.com/in/filip-sarovic-4376a61a1/'
	},
	{
		id: 6,
		image: project6,
		title: 'On this project my primary role is to display the relevant data in the form of comprehensive daily and general summaries.',
		github: 'https://github.com/laststonedjs',
		linkedIn: 'https://www.linkedin.com/in/filip-sarovic-4376a61a1/'
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
									<a href={linkedIn} 
										className='btn btn-primary' 
										target='_blank' 
										rel="noreferrer">
											LinkedIn
									</a>
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