import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./proveedores.css"
import { faker } from '@faker-js/faker'
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'

const Proveedores = () => {
    const param = useParams();
    


    const { store, actions } = useContext(Context);

    useEffect(() => {
      actions.getCategoria(param.categoria)
    }, []);
    console.log(store.proveedores);


    // let fakeImage = faker.image.people(130, 130, false);

    // faker.image.imageUrl(width?: number = 640, height?: number = 480, category?: string, randomize?: boolean = false, https?: boolean): string

  return (
    <>  
    
      <div className="container">
      <div className="row">
      {store.proveedores.map((item)=> (
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src={faker.image.avatar()}/>
            </div>
            <h4>{item.proveedor.avg_evaluacion}/5 <FaStar 
            className="star" 
            color={"#ffc107"} 
            size={30} /></h4>
            <div className="team-content">
              <h3 className="name">{item.proveedor.nombre}</h3>
              <h4 className="title">{item.nombre}</h4>
            </div>
            <ul className="social">
              <li>
                <Link to={`/proveedores/profile/${item.proveedor.id}`}>Ver Perfil</Link>
              </li>
            </ul>
          </div>
        </div>))}
      </div>
    </div>
    </>
  )
}

export default Proveedores