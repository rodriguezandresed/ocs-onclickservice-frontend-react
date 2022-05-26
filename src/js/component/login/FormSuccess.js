import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>
        <Link to="/">
        Entrando a tu cuenta
        </Link>
        </h1>
    </div>
  );
};

export default FormSuccess;