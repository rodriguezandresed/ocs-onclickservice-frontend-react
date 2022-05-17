import React, { useState, useContext } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import register from '../../../assets/register.png'
import { Context } from "../../store/appContext"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { actions } = useContext(Context);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className='form-container'>
      <span className='close-btn'>×</span>
      <div className='form-content-left'>
          <img src={register} />
      </div>
      {/* {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />} */}
       <FormSignup submitForm={submitForm}/>
    </div>
  );
};

export default Form;