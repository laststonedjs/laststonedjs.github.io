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

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				<article className="portfolio-item">
					<div className="portfolio__item-image">
						<img src={project1} alt="space-dev" />
					</div>
						<h3>Space-Dev</h3>
						<div className="portfolio__item-cta">
						<a href="https://github.com/laststonedjs" 
							className='btn' 
							target='_blank' 
							rel="noreferrer">
								GitHub
						</a>
						<a href="https://www.linkedin.com/in/filip-sarovic-4376a61a1/" 
							className='btn btn-primary' 
							target='_blank' 
							rel="noreferrer">
								LinkedIn
						</a>
						</div>
				</article>
				<article className="portfolio-item">
					<div className="portfolio__item-image">
						<img src={project2} alt="" />
					</div>
						<h3>FeedbackExchange</h3>
						<div className="portfolio__item-cta">
						<a href="https://github.com/laststonedjs" 
							className='btn' 
							target='_blank' 
							rel="noreferrer">
								GitHub
						</a>
						<a href="https://www.linkedin.com/in/filip-sarovic-4376a61a1/" 
							className='btn btn-primary' 
							target='_blank' 
							rel="noreferrer">
								LinkedIn
						</a>
						</div>
				</article>
				<article className="portfolio-item">
					<div className="portfolio__item-image">
						<img src={project3} alt="" />
					</div>
						<h3>Bob the Sheepo NFT Project</h3>
						<div className="portfolio__item-cta">
						<a href="https://github.com/laststonedjs" 
							className='btn' 
							target='_blank' 
							rel="noreferrer">
								GitHub
						</a>
						<a href="https://www.linkedin.com/in/filip-sarovic-4376a61a1/" 
							className='btn btn-primary' 
							target='_blank' 
							rel="noreferrer">
								LinkedIn
						</a>
						</div>
				</article>
				<article className="portfolio-item">
					<div className="portfolio__item-image">
						<img src={project4} alt="" />
					</div>
						<h3>Book And Drive</h3>
						<div className="portfolio__item-cta">
						<a href="https://github.com/laststonedjs" 
							className='btn' 
							target='_blank' 
							rel="noreferrer">
								GitHub
						</a>
						<a href="https://www.linkedin.com/in/filip-sarovic-4376a61a1/" 
							className='btn btn-primary' 
							target='_blank' 
							rel="noreferrer">
								LinkedIn
						</a>
						</div>
				</article>
				<article className="portfolio-item">
					<div className="portfolio__item-image">
						<img src={project5} alt="" />
					</div>
						<h3>Zec-Archive</h3>
						<div className="portfolio__item-cta">
						<a href="https://github.com/laststonedjs" 
							className='btn' 
							target='_blank' 
							rel="noreferrer">
								GitHub
						</a>
						<a href="https://www.linkedin.com/in/filip-sarovic-4376a61a1/" 
							className='btn btn-primary' 
							target='_blank' 
							rel="noreferrer">
								LinkedIn
						</a>
						</div>
				</article>
				<article className="portfolio-item">
					<div className="portfolio__item-image">
						<img src={project6} alt="" />
					</div>
						<h3>Elimiwait Parking</h3>
						<div className="portfolio__item-cta">
						<a href="https://github.com/laststonedjs" 
							className='btn' 
							target='_blank' 
							rel="noreferrer">
								GitHub
						</a>
						<a href="https://www.linkedin.com/in/filip-sarovic-4376a61a1/" 
							className='btn btn-primary' 
							target='_blank' 
							rel="noreferrer">
								LinkedIn
						</a>
						</div>
				</article>
			</div>
		</section>
	)
}

export default Portfolio;