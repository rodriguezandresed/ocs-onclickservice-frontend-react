import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar/navbar.jsx";
import Register from "./component/register/Register.jsx";
import Login from "./component/login/Login.jsx"
import Plomeria from "./component/plomeria/plomeria.jsx";
import Jardineria from "./component/jardineria/Jardineria.jsx";
import Refrigeracion from "./component/refrigeracion/Refrigeracion.jsx";
import Electricidad from "./component/electricidad/Electricidad.jsx";
import Mecanica from "./component/mecanica/Mecanica.jsx";
import Limpieza from "./component/limpieza/Limpieza.jsx";
import { Footer } from "./component/footer";
import "../styles/gradients.css"
import "../styles/index.css"

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
							<Route path="/Plomeria" element={<Plomeria />}/>
							<Route path="/Jardineria" element={<Jardineria />}/>
							<Route path="/Refrigeracion" element={<Refrigeracion />}/>
							<Route path="/Electricidad" element={<Electricidad />}/>
							<Route path="/Mecanica" element={<Mecanica />}/>
							<Route path="/Limpieza" element={<Limpieza />}/>
						</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
	);
};

export default injectContext(Layout);
