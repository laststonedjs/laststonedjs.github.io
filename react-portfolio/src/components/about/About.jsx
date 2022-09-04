import React from 'react'
// assets
import aboutImg from '../../assets/avatar1.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderOpened } from 'react-icons/vsc';
import { SiSkillshare } from 'react-icons/si';
// styles
import './About.css'

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={aboutImg} alt='aboutImg'/>
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className='about__card'>
							<FaAward className='about__icon'/>
							<h5>Experience</h5>
							<small>1+ Year</small>
						</article>

						<article className='about__card'>
							<VscFolderOpened className='about__icon'/>
							<h5>Projects</h5>
							<small>10+</small>
						</article>

						<article className='about__card'>
							<SiSkillshare className='about__icon'/>
							<h5>Skills</h5>
							<small>React, Angular, Node.js, Git ..</small>
						</article>
					</div>
					<p>
						I am extremely hard working, committed to efficiency and results. Successfully identified, diagnosed and fixed website issues. 
						Inclined in developing databases (SQL & NoSQL), creating user interfaces, writing and testing codes, 
						troubleshooting simple/complex issues and implementing new features based on user feedback. 
						Personal growth and learning is one of my core driving forces. Passionate about tech, product, and improving the world.
						Video & board games enthusiast and a big fan of Sci-Fi books and magazines.
					</p>
					
					<a href='#contact' className='btn btn-primary'>Let's Talk</a>
				</div>
			</div>
			
		</section>
	)
}

export default About;