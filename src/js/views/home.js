import React from "react";
import "../../styles/home.css";
import { Header } from "../component/header/Header.jsx";
import Servicios from "../component/servicios/Servicios.jsx";
import Conocenos from "../component/conocenos/Conocenos.jsx";
import Ayuda from "../component/ayuda/Ayuda.jsx";

export const Home = () => (
	<div>
		<Header />
		<Servicios />
		<Conocenos />
		<Ayuda />
	</div>
);
