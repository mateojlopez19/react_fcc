import React from "react";
import "../stylesheet/Testimony.css";
import image from '../img/image-ema.png';
import image2 from '../img/image-fabio.png';



function Testimony(props){

  return (
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={image2}
        alt="Foto imagen"
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> <strong>{props.nombre}</strong> in {props.pais}
        </p>
        <p className="cargo-testimonio">{props.cargo} in {props.empresa}</p>
        <p className="texto-testimonio">{props.testimonio}
        </p>
      </div>
    </div>
  );
}
export default Testimony;