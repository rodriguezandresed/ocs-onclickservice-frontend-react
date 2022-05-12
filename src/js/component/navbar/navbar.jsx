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
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<div className="ocs__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="ocs__navbar-sign">
				<Link to="/Login">
					<p>Ingresar</p>
				</Link>
				<Link to="/Register">
					<button type="button">Registro</button>
				</Link>
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
								<Link to="/Register">
									<button type="button">Sign Up</button>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
