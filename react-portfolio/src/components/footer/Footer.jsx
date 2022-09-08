import React from 'react'
// assets
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
// styles
import './Footer.css'

const Footer = () => {
	return (
		<footer>
			<ul className='permalinks'>
				<li><a href="#">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>

			<div className="footer__socials">
				<a href="https://www.facebook.com/profile.php?id=100003626033475"><FaFacebookF /></a>
				<a href="https://www.linkedin.com/in/filip-sarovic-4376a61a1/"><FaLinkedinIn /></a>
			</div>

			<div className="footer__copyright">
				<small>&copy; Filip Sarovic. Web Developer.</small>
			</div>
		</footer>
	)
}

export default Footer