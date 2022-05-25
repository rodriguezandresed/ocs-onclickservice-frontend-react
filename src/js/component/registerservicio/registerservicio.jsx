import React from 'react';
import './registerservicio.css'

export const Registerservicio = () => {
    return (
        <>
         <div className="container register-service mt-5">
             <div className="row">
                <div className="col-6 form-service">

                <form>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Tipo de servicio</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Plomeria</option>
                        <option>Electricidad</option>
                        <option>Diseño Gráfico</option>
                        <option>Ingeniero Industrial</option>
                        <option>Chef</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Descripción del servicio</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Experiencia en el area</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
               
                    <div className="form-check mt-2">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">He leido y acepto las politicas de seguridad</label>
                    </div>
                    <button type="submit" className="btn servicio-emviar mt-2">Enviar</button>
                </form>

                </div>
                <div className="col-6 imagen-servicio">
                    
                </div>
             </div>
         </div>
        </>
    )
}
