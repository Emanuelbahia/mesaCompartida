//Uso esta funcion para que no se envie el formulario si no estan todos los campos llenos

export default function Validation(values) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

  //requiere un contraseña de 8 caracteres como minimo, y por lo menos 1 numero, 1 letra minuscula y 1 mayuscula
  /* const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/; */

  if (values.firstName === "") {
    errors.firstName = "Tienes que completar el campo";
  } else if (values.firstName.length <= 2) {
    errors.firstName = "El nombre es muy corto";
  }

  if (values.lastName === "") {
    errors.lastName = "Tienes que completar el campo";
  } else if (values.lastName.length <= 2) {
    errors.lastName = "El apellido es muy corto";
  }

  if (values.adress === "") {
    errors.adress = "Tienes que completar el campo";
  } else if (values.adress.length <= 7) {
    errors.adress = "es muy corto";
  }

  if (values.phone === "") {
    errors.phone = "Tienes que completar el campo";
  } else if (values.phone.length <= 7) {
    errors.phone = "es muy corto";
  }

  if (values.client_email === "") {
    errors.client_email = "Tienes que completar el campo";
  } else if (!email_pattern.test(values.client_email)) {
    errors.client_email = "Email invalido";
  }

  if (values.password === "") {
    errors.password = "Tienes que completar el campo";
  } else if (values.password.length <= 5 || values.password.length >= 15) {
    errors.password = "Tiene que tener entre 6 y 15 caracteres";
  }

  if (values.confirmPassword === "") {
    errors.confirmPassword = "Tienes que completar el campo";
  }

  return errors;
}
