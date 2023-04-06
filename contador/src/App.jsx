import { useState } from 'react'
import './App.css';
import imagen from './img/contador.png';
import { Boton } from './components/Boton/Boton';
import { Contador } from './components/contador/Contador';

function App() {
  const [numClicks, setNumClicks] = useState(0)

  const aumentarContador = () => {
    setNumClicks(numClicks + 1);
  };

  const disminuirContador = () => {
    if(numClicks == 0){
      setNumClicks(0);
    }else{
      setNumClicks(numClicks - 1);
    }
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
            texto='⇧'
            esBotonDeClick={true}
            manejarClick={aumentarContador}
          />
          <Boton 
            texto='⇩'
            esBotonDeClick={true}
            manejarClick={disminuirContador}
          />
          <Boton 
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciarContador}
          />
        </div>
      </div>
    </div>
  )
}

export default App
