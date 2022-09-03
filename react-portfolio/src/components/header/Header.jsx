import React from 'react'
// components
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
// styles
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
				{/* <div className="header__profile-img">
					<img 
						src={headerImg}
						alt='me'
					/>
				</div> */}
				<a href='#contact' className='scroll__down'>Scroll Down</a>
			</div>
		</header>
	)
}

export default Header