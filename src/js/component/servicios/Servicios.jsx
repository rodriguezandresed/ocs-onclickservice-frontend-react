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
        <div class="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center align-items-center">
          <div class="col">
            <Link to="/Plomeria">
              <div class="card hvr-grow">
                <div class="card-body">
                  <h5 class="card-title">Plomeria</h5>
                </div>
              </div>
            </Link>
          </div>
          <div class="col">
            <Link to="/Jardineria">
              <div class="card hvr-grow">
                <div class="card-body">
                  <h5 class="card-title">Jardineria</h5>
                </div>
              </div>
            </Link>
          </div>
          <div class="col">
            <Link to="/Refrigeracion">
              <div class="card hvr-grow">
                <div class="card-body">
                  <h5 class="card-title">Refrigeracion</h5>
                </div>
             </div>
            </Link>
          </div>
          <div class="col">
            <Link to="/Electricidad">
              <div class="card hvr-grow">
                <div class="card-body">
                  <h5 class="card-title">Electricidad</h5>
                </div>
              </div>
            </Link>
          </div>
          <div class="col">
            <Link to="/Mecanica">
              <div class="card hvr-grow">
                <div class="card-body">
                  <h5 class="card-title">Mecanica</h5>
                </div>
              </div>
            </Link>
          </div>
          <div class="col">
            <Link to="/Limpieza">
              <div class="card hvr-grow">
                <div class="card-body">
                  <h5 class="card-title">Limpieza</h5>
                </div>
              </div>
            </Link>
          </div>
          <div class="col">
            <div class="card hvr-grow">
              <div class="card-body">
                <h5 class="card-title">Albañileria</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card hvr-grow">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios