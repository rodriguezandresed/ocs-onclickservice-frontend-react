export default function validateInfo(values) {
  let errors = {};

  if (!values.nombre.trim()) {
    errors.nombre = 'Nombre requerido';
  }

  if (!values.email) {
    errors.email = 'Email requerido';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Coloca un Email valido';
  }
  if (!values.password) {
    errors.password = 'Contraseña requerida';
  } else if (values.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  }

  if (!values.password2) {
    errors.password2 = 'Contraseña requerida';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Las contraseñas no coinciden';
  }
  return errors;
}