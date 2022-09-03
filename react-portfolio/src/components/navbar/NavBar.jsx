import React, { useState } from 'react'
// assets
import { GoHome } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { BiBookContent } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { TiContacts } from 'react-icons/ti';
// styles
import './NavBar.css'

const NavBar = () => {

	const [activeNav, setActiveNav] = useState('#');

	return (
		<nav>
			<a href='#'
				onClick={() => setActiveNav('#')} 
				className={activeNav === '#' ? 'active' : ''}>
				<GoHome/></a>
			<a href='#about' 
				onClick={() => setActiveNav('#about')} 
				className={activeNav === '#about' ? 'active' : ''}>
					<GoPerson/></a>
			<a href='#experience'
				onClick={() => setActiveNav('#experience')} 
				className={activeNav === '#experience' ? 'active' : ''}>
					<BiBookContent/></a>
			<a href='#services'
				onClick={() => setActiveNav('#services')} 
				className={activeNav === '#services' ? 'active' : ''}>
					<RiServiceLine/></a>
			<a href='#contact'
				onClick={() => setActiveNav('#contact')} 
				className={activeNav === '#contact' ? 'active' : ''}>
					<TiContacts/></a>
		</nav>
	)
}

export default NavBar;