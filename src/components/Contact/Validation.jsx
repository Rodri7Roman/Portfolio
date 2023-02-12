const Validation = (props) => {
  let errors = {};
  if (!/\S+@\S+\.\S+/.test(props.email_id) || props.email_id <= 0)
    errors.email = "Tiene que ser un mail valido";

  if (props.from_name.length < 1) errors.nombre = "Debes llenar este campo";
  if (props.message.length < 1) errors.mensaje = "Debes llenar este campo";

  return errors;
};

export default Validation;
