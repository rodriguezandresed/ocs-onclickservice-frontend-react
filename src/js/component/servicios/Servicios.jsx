import React from 'react';
import './servicios.css';
import { Link } from "react-router-dom";


const Servicios = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text2">Busca el servicio que necesites por categoria</h1>
      </div>
      <div className="gpt3__whatgpt3-container">
        <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center align-items-center">
          <div className="col">
            <Link to="/Plomeria">
              <div className="card hvr-grow">
                <div className="card-body">
                  <h5 className="card-title">Plomeria</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/Jardineria">
              <div className="card hvr-grow">
                <div className="card-body">
                  <h5 className="card-title">Jardineria</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/Refrigeracion">
              <div className="card hvr-grow">
                <div className="card-body">
                  <h5 className="card-title">Refrigeracion</h5>
                </div>
             </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/Electricidad">
              <div className="card hvr-grow">
                <div className="card-body">
                  <h5 className="card-title">Electricidad</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/Mecanica">
              <div className="card hvr-grow">
                <div className="card-body">
                  <h5 className="card-title">Mecanica</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/Limpieza">
              <div className="card hvr-grow">
                <div className="card-body">
                  <h5 className="card-title">Limpieza</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <div className="card hvr-grow">
              <div className="card-body">
                <h5 className="card-title">Albañileria</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card hvr-grow">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios