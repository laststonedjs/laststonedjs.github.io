import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import Me from '../../assets/avatar.jpg'
import './Header.css'

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h4>Hello I am</h4>
				<h1>Filip Sarovic</h1>
				<h4 className="text-light">Web Developer</h4>
				<CTA />
				<HeaderSocials />
				{/* <div className="me">
					<img 
						src=''
						alt='me'
					/>
				</div> */}
				<a href='#contact' className='scroll__down'>Scroll Down</a>
			</div>
		</header>
	)
}

export default Header