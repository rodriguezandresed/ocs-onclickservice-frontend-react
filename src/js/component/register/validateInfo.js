export default function validateInfo(values) {
  let errors = {};


  if (!values.nombre?.trim()) {
    errors["nombre"] = 'Nombre requerido';
  } else {
    errors.nombre = "";
  }

  if (!values.email) {
    errors.email = 'Email requerido';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Coloca un Email valido';
  } else {
    errors.email = "";
  }

  if (!values.password) {
    errors.password = 'Contraseña requerida';
  } else if (values.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  } else {
    errors.password = "";
  }

  if (!values.password2) {
    errors.password2 = 'Contraseña requerida';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Las contraseñas no coinciden';
  } else {
    errors.password2 = "";
  }
  // console.log(values)
  return errors;
}