import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';
import { useContext } from 'react';

const FormSignup = ({ submitForm}) => {

  const { actions } = useContext(Context);
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Ingresa a OCS
        </h1>
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
        {/* <Link to="/"> */}
        <button className='form-input-btn' type='submit' onClick={() => actions.handleLogin(values)}>
          <Link to="/">
          Ingresar
          </Link>
        </button>
        {/* </Link> */}
        <span className='form-input-login'>
                ¿No tienes cuenta? Puedes registrarte <Link to="/Register">
                        Aqui
                    </Link>
                </span>
      </form>
    </div>
  );
};

export default FormSignup;