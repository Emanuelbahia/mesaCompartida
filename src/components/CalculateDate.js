const calculateDate = (date) => {
  const fechaActual = new Date();
  const anoActual = parseInt(fechaActual.getFullYear());
  const mesActual = parseInt(fechaActual.getMonth() + 1);
  const diaActual = parseInt(fechaActual.getDate());

  const anoNacimiento = parseInt(String(date).substring(0, 4));
  const mesNacimiento = parseInt(String(date).substring(5, 7));
  const diaNacimiento = parseInt(String(date).substring(8, 10));

  let edad = anoActual - anoNacimiento;
  if (mesActual < mesNacimiento) {
    edad--;
  } else if (mesActual === mesNacimiento) {
    if (diaActual < diaNacimiento) {
      edad--;
    }
  }
  return edad;
};

export default calculateDate;
