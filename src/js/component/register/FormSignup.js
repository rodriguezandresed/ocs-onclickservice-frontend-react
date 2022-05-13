import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from "react-router-dom";

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
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
                <button className='form-input-btn' type='submit'>
                    Registrate
                </button>
                <span className='form-input-login'>
                ¿Ya tienes una cuenta? Puedes ingresar <Link to="/login">
                        Aqui
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default FormSignup;