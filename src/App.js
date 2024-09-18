import './Board.css';
import { useState } from 'react';

export default function Board() {
  const Square = () => {
    const [value, setValue] = useState('?');

    const handleClick = () => {
      setValue("X");
    }

    return <button className='sqaure' onClick={ handleClick }>{ value }</button>
  }; 

  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}