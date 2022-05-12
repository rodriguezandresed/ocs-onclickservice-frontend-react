import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../../assets/logo.png'
import { Link } from "react-router-dom";

const Menu = () => (
	<>
		<p><a href="#home">Home</a></p>
		<p><a href="#SobreNostros">Conocenos</a></p>
		<p><a href="#Servicios">Servicios</a></p>
		<p><a href="#Ayuda">Ayuda</a></p>
	</>
)

export const Navbar = () => {

	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="ocs__navbar">
			<div className="ocs__navbar-links">
				<div className="ocs__navbar-links_logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="ocs__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="ocs__navbar-sign">
				<p>Sign In</p>
				<button type="button">Sign Up</button>
			</div>
			<div className="ocs__navbar-menu">
				{toggleMenu
					? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
					: <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
				}
				{toggleMenu && (
					<div className="ocs__navbar-menu_container scale-up-center">
						<div className="ocs__navbar-menu_container-links">
							<Menu />
							<div className="ocs__navbar-menu_container-links-sign">
								<p>Sign In</p>
								<button type="button">Sign Up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
