import { useState } from 'react';
import './Board.css';

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{ value }</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function click(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  } 

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => click(0)}/>
        <Square value={squares[1]} onSquareClick={() => click(1)}/>
        <Square value={squares[2]} onSquareClick={() => click(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => click(3)}/>
        <Square value={squares[4]} onSquareClick={() => click(4)}/>
        <Square value={squares[5]} onSquareClick={() => click(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => click(6)}/>
        <Square value={squares[7]} onSquareClick={() => click(7)}/>
        <Square value={squares[8]} onSquareClick={() => click(8)}/>
      </div>
    </>
  )
}