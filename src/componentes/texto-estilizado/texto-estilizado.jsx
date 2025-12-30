import PropTypes from "prop-types";

function TextoEstilizado({ 
    texto = "Um parágrafo estilizado", 
    color = 'red',
}) {
  return <p style={{color, textTransform: "uppercase"}}>{texto}</p>;
}


TextoEstilizado.propTypes = {
  texto: PropTypes.string,
  style: PropTypes.object,
};

export default TextoEstilizado;