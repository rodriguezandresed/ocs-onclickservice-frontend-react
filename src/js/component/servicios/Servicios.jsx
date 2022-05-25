import React, {useContext} from 'react';
import './servicios.css';
import { Link } from "react-router-dom";
import { Context } from '../../store/appContext';


const Servicios = () => {

  const { store } = useContext(Context);

  return (
    <div className="gpt3__whatgpt3 section__margin" id="Servicios">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text2">Busca el servicio que necesites por categoria</h1>
      </div>
      <div className="gpt3__whatgpt3-container">
        <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center align-items-center">
        {store.servicios.map((servicio) => (
						<div className="col" key={`servicio-${servicio}`}>
              <Link to={`/proveedores/${servicio}`}>
              <div className="card hvr-grow">
                <div className="card-body">
                  <h5 className="card-title">{servicio}</h5>
                </div>
              </div>
              </Link>
            </div>
					))}
        </div>
      </div>
    </div>
  )
}

export default Servicios