import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar/navbar.jsx";
import { Perfil } from "./component/perfil/perfil.jsx";
import { Registerservicio } from "./component/registerservicio/registerservicio.jsx";
import { Perfilservicio } from "./component/perfilservicio/perfilservicio.jsx";
import "./component/perfil/perfil.css"
import "./component/registerservicio/registerservicio.css"
import "./component/perfilservicio/perfilservicio.css"
import Login from "./component/login/login.jsx"
import Proveedores from "./component/proveedores/Proveedores.jsx";
import Footer from "./component/footer/Footer.jsx";
import "../styles/gradients.css"
import "../styles/index.css"
import FormSignup from "./component/register/FormSignup";
import Rate from "./component/rate/Rate.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<div className="gradient__bg">
						<Navbar />
					</div>
						<Routes>
							<Route path="/" element={<Home />}/>
							<Route path="/perfil" element={<Perfil />}/>
							<Route path="/registerservicio" element={<Registerservicio />}/>
							<Route path="/perfilservicio" element={<Perfilservicio />}/>
							<Route path="/register" element={<FormSignup />}/>
							<Route path="/login" element={<Login />}/>
							<Route path="/rate" element={<Rate />}/>
							<Route path="/proveedores/:categoria" element={<Proveedores />}/>
							<Route path="/proveedores/profile/:id" element={<Perfilservicio />}/>
							<Route path="*" element={<h1>Not found!</h1>}/>
						</Routes>
					<footer className="gradient__bg2">
						<Footer />
					</footer>
				</ScrollToTop>	
			</BrowserRouter>

	);
};

export default injectContext(Layout);
