import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar/navbar.jsx";
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
						<Route exact path="/">
							<Home />
						</Route>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
	);
};

export default injectContext(Layout);
