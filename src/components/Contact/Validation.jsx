const Validation = (props) => {
  let errors = {};
  if (!/\S+@\S+\.\S+/.test(props.email) || props.email <= 0)
    errors.email = "Tiene que ser un mail valido";

  if (props.nombre.length < 1) errors.nombre = "Debes llenar este campo";
  if (props.mensaje.length < 1) errors.mensaje = "Debes llenar este campo";

  return errors;
};

export default Validation;
