import React from 'react';
import './Contador.css';

export const Contador = ({ numClicks }) => {
  return (
    <div className='contador'>
      {numClicks}
    </div>
  )
}
