import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar/navbar.jsx";
import { Register } from "./component/register/register.jsx";
import { Login } from "./component/login/login.jsx";
import { Perfil } from "./component/perfil/perfil.jsx";
import { Footer } from "./component/footer";
import { Registerservicio } from "./component/registerservicio/registerservicio.jsx";
import { Perfilservicio } from "./component/perfilservicio/perfilservicio.jsx";

import "../styles/gradients.css"
import "../styles/index.css"
import "./component/perfil/perfil.css"
import "./component/registerservicio/registerservicio.css"
import "./component/perfilservicio/perfilservicio.css"

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
							<Route path="/Register" element={<Register />}/>
							<Route path="/Login" element={<Login />}/>
							<Route path="/Perfil" element={<Perfil />}/>
							<Route path="/Registerservicio" element={<Registerservicio />}/>
							<Route path="/Perfilservicio" element={<Perfilservicio />}/>

						</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
	);
};

export default injectContext(Layout);
