import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>
        Has ingresado con exito. Puedes ingresar a tu cuenta <Link to="/perfil"> Aqui</Link>
        </h1>
    </div>
  );
};

export default FormSuccess;