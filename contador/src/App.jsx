import { useState } from 'react'
import './App.css';
import imagen from './img/images.png';
import { Boton } from './components/Boton/Boton';
import { Contador } from './components/contador/Contador';

function App() {
  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className='app'>
      <div className='bart-img-contenedor'>
        <img
          className='bart-img'
          src={imagen}
          alt='bart bebe'
        />
        <div className='contenedor-contador'>
          <Contador 
            numClicks={numClicks}
          />
          <Boton 
            texto='click'
            esBotonDeClick={true}
            manejarClick={manejarClick}
          />
          <Boton 
            texto='reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciarContador}
          />
        </div>
      </div>
    </div>
  )
}

export default App
