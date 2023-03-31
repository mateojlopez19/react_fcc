import React from 'react';
import './App.css';
import Testimony from './components/Testimony';


function App() {

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos:</h1>
        <Testimony 
          imagen= 'ema'
          nombre='Ema bostian'
          pais='Suecia'
          cargo='Software engineer'
          empresa='spotify'
          testimonio="'I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'"
        />
        <Testimony 
          imagen= 'fabio'
          nombre='fabio lopez'
          pais='singapur'
          cargo='Software engineer'
          empresa='netflix'
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'"
        />
        <Testimony 
          imagen= 'jose'
          nombre='Josh'
          pais='Nigeria'
          cargo='Software engineer'
          empresa='netflix'
          testimonio="was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company"
        />
      </div>
    </div>
  )
}

export default App
