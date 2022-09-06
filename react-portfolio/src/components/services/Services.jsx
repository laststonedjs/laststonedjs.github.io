import React from 'react'
// assets
import { BsCheck2Circle } from 'react-icons/bs'
// styles
import './Services.css'

const Services = () => {
	return (
		<section id='services'>
			<h5>What I Offer</h5>
			<h2>Services</h2>

			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>UI/UX Design</h3>
					</div>

					<ul className='service__list'>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Figma Software</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Adobe Photoshop</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Adobe Illustrator</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Sketch</p>
						</li>
					</ul>
				</article>
				{/* END OF UX/UI */}
				<article className="service">
					<div className="service__head">
						<h3>Web Development</h3>
					</div>

					<ul className='service__list'>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Ecommerce Applications</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Custom Web Applications</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Content Management System (CMS)</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>QA & Testing</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Web Support and Maintenance</p>
						</li>
					</ul>
				</article>
				{/* END OF WEB DEVELOPMENT */}
				<article className="service">
					<div className="service__head">
						<h3>Content Creation</h3>
					</div>

					<ul className='service__list'>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Use JavaScript Frameworks</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Makes Full Responsive Sites</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Developing Mobile Applications</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Successful Websites</p>
						</li>
						<li>
							<BsCheck2Circle className='service__list-icon' />
							<p>Use CSS/JS pattern, Tailwind</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	)
}

export default Services