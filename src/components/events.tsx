import React, {useState} from "react";

function Boton() {
  const [mensaje, setMensaje] = useState('Haz click en el botón');

  function manejarClick() {
    setMensaje('¡Botón Clickeado!')
  }

  return (
    <div>
      <p>{mensaje}</p>
      <button onClick={manejarClick}>Click Aquí</button>
    </div>
  );
}

export default Boton;