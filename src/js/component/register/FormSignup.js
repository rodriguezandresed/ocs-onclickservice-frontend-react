import React, { useContext, useEffect, useState } from "react";
import validateInfo from './validateInfo';
import './Form.css';
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext"
import FormSuccess from "./FormSuccess";
import register from '../../../assets/register.png'

const FormSignup = () => {
    let initialState = {
        nombre: "",
        email: "",
        password: "",
        password2: "",
        fecha_registro: "2022-05-12",
        tipo_usuario: "General"
    }

    const { actions } = useContext(Context);
    
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {

        setValues({
            ...values, [event.target.name]: event.target.value
        });
    };

    const handleSubmit = e => {

        setErrors(validateInfo(values))
        // console.log(values)

        if (validateInfo(values).nombre === "" && validateInfo(values).email === "" && validateInfo(values).password === "" && validateInfo(values).password2 === "") {
            // setIsSubmitting(true);
            // console.log(isSubmitting)
            // console.log(validateInfo(values).nombre)
            // console.log(errors)
            // console.log(values.email)
            setIsSubmitting(true);
            actions.handleRegister(values);
        }

    };

    //   useEffect(
    //     () => {
    //       if (Object.keys(errors).length === 0) {
    //         submitForm();
    //       }
    //     },
    //     [errors]
    //   );


    return (
        <>
        
        {isSubmitting === false ?

        (

        <div className='form-container'>
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
                <img src={register} />
            </div>
            <div className='form-content-right'>
                <form onSubmit={handleSubmit} className='form' noValidate>
                    <h1>
                        Crea tu cuenta en OCS llenando el siguiente formulario
                    </h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Nombres y Apellidos</label>
                        <input
                            className='form-input'
                            type='text'
                            name='nombre'
                            placeholder='Ingresa tu nombre completo'
                            value={values.nombre}
                            onChange={handleChange}
                        />
                        {errors.nombre && <p>{errors.nombre}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Ingresa tu Email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Contraseña</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Ingresa tu contraseña'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Verifica tu Contraseña</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password2'
                            placeholder='Confirma tu contraseña'
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <button className='form-input-btn' type='button' onClick={handleSubmit}>
                        Registrate
                    </button>
                    <span className='form-input-login'>
                        ¿Ya tienes una cuenta? Puedes ingresar <Link to="/login">
                            Aqui
                        </Link>
                    </span>
                </form>
            </div>
        </div>
        
        ) : <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img src={register} />
                </div>
                <div className='form-content-right'>
                    <FormSuccess />
                </div>
            </div>

}
        </>
    );
};

export default FormSignup;