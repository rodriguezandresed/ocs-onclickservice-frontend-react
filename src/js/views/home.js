import React from "react";
import "../../styles/home.css";
import { Header } from "../component/header/Header.jsx";
import Servicios from "../component/servicios/Servicios.jsx";

export const Home = () => (
	<div>
		<Header />
		<Servicios />
	</div>
);
