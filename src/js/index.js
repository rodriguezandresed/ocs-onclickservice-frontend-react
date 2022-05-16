//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";
import "../styles/gradients.css";
import "./component/perfil/perfil.css"
import "./component/registerservicio/registerservicio.css"
import "./component/perfilservicio/perfilservicio.css"

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
