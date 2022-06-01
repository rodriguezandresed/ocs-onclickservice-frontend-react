import React, {useContext, useEffect, useState }  from 'react';
import './registerservicio.css'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../store/appContext';

export const Registerservicio = () => {
    const navigate = useNavigate();
    let initialState = {
        nombre_tipo_servicio: "",
        nombre_tipo_sub_servicio: "",
        detalle_tipo_servicio: "",
        status_active: true ,
    }
    // const { store } = useContext(Context);
    const { store, actions } = useContext(Context);
    const [values, setValues] = useState(initialState);

    const handleChangeRegister = event => {
        console.log(values)
        setValues({
            ...values, [event.target.name]: event.target.value
        });
    };
    const handleSubmitRegister = (e) => {
        e.preventDefault()
        // setErrors(validateInfo(values))
        console.log(values)
        // console.log(values.nombre_tipo_servicio)
        // console.log(values.nombre_tipo_sub_servicio)
        // console.log(values.detalle_tipo_servicio)
        actions.handleRegisterServicio(values);
        navigate("/perfil")
        // if (validateInfo(values).nombre_tipo_servicio === "" && validateInfo(values).nombre_tipo_sub_servicio === "" && validateInfo(values).detalle_tipo_servicio === "" ) {
        //     // setIsSubmitting(true);
        //     // console.log(isSubmitting)
        //     // console.log(validateInfo(values).nombre)
        //     // console.log(errors)
        //     // console.log(values.email)
        //     console.log(values.nombre_tipo_servicio)
        //     actions.handleRegisterServicio(values);
        // }

    };
    
    useEffect(() => {
        actions.getProfile();
      }, []);
    
    return (
        <>
         <div className="container register-service mt-5">
             <div className="row">
                <div className="col-6 form-service">

                <form onSubmit={handleSubmitRegister}>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Tipo de servicio</label>
                        <select 
                        type='text'
                        name='nombre_tipo_servicio'
                        value={values.nombre_tipo_servicio}
                        onChange={handleChangeRegister}
                        className="form-control" id="exampleFormControlSelect1">
                        {store.servicios.map((servicio) => (
						    <option key={`servicio-${servicio}`}>{servicio}</option>
            
                        ))
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Nombre tipo sub servicio</label>
                        <textarea     
                            type='text'
                            name='nombre_tipo_sub_servicio'
                            value={values.nombre_tipo_sub_servicio}
                            onChange={handleChangeRegister}
                            className="form-control" 
                            id="exampleFormControlTextarea1"
                            rows="3">
                         </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea2">Descripción del servicio</label>
                        <textarea 
                        type='text'
                        name='detalle_tipo_servicio'
                        value={values.detalle_tipo_servicio}
                        onChange={handleChangeRegister}
                        className="form-control" 
                        id="exampleFormControlTextarea2" 
                        rows="3"></textarea>
                    </div>
               
                    <div className="form-check mt-2">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">He leido y acepto las politicas de seguridad</label>
                    </div>
                    <button  onClick={()=> handleSubmitRegister()} className="btn servicio-emviar mt-2" >  Enviar</button>
                </form>

                </div>
                <div className="col-6 imagen-servicio">
                    
                </div>
             </div>
         </div>
        </>
    )
}
