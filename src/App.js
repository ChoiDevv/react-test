import './Board.css';
import { useState } from 'react';

const checkWinner = (squares) => {
  const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winners.length; i++) {
    const [a, b, c] = winners[i];
    if (squares[a] !== '?' && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return '?';
}

const Square = ({ value, onSquareClick }) => {
  return <button className='sqaure' onClick={ onSquareClick }>{ value }</button>
}; 

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill('?'));
  const handleClick = (i) => {
    if (squares[i] !== '?' || checkWinner(squares) !== '?') return;
    
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[i] = 'x';
    else nextSquares[i] = 'o';

    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  const winner = checkWinner(squares);
  let status = '';
  if (winner) status = "Winner: " + winner;
  else status = "Next player: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className='status'>{ status }</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={ () => handleClick(0) }/>
        <Square value={squares[1]} onSquareClick={ () => handleClick(1) }/>
        <Square value={squares[2]} onSquareClick={ () => handleClick(2) }/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={ () => handleClick(3) }/>
        <Square value={squares[4]} onSquareClick={ () => handleClick(4) }/>
        <Square value={squares[5]} onSquareClick={ () => handleClick(5) }/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={ () => handleClick(6) }/>
        <Square value={squares[7]} onSquareClick={ () => handleClick(7) }/>
        <Square value={squares[8]} onSquareClick={ () => handleClick(8) }/>
      </div>
    </>
  )
}