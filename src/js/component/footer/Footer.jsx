import React from 'react'
import "./footer.css"
import logo2 from '../../../assets/logo2.png'

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex justify-content-between align-items-center py-3 my-4 border-top">
                <p className="brand col-md-4 mb-0 ">© 2022 One Click Service</p>

                <a href="/" className="logo link-dark text-decoration-none pe-5">
                    <img src={logo2} alt="logo" />
                </a>

                <ul className="nav">
                    <li className="nav-item"><a href="#home" className="nav-link  text-white">Home</a></li>
                    <li className="nav-item"><a href="#Servicios" className="nav-link  text-white">Servicios</a></li>
                    <li className="nav-item"><a href="#SobreNostros" className="nav-link  text-white">Conocenos</a></li>
                    <li className="nav-item"><a href="#Ayuda" className="nav-link  text-white">Ayuda</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer