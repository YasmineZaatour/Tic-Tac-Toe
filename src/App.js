import { useState } from "react";
import "./App.css";
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (XisNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setXisNext(!XisNext);
    setSquares(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner :" + winner;
  } else {
    status = "Next Player : " + (XisNext ? "X" : "O");
  }
  function handleReset() {
    setSquares(Array(9).fill(null));
    setXisNext(true);
    status = "Next Player : X";
  }
  return (
    <>
      <div className="container">
        <h1 className="title">
          Tic Tac Toe Game In <span>React</span>
        </h1>
        <div className="status">{status}</div>
        <div className="board">
          <div className="board-row">
            <Square
              className="square"
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
            />
            <Square
              className="square"
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
            />
            <Square
              className="square"
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
            />
          </div>
          <div className="board-row">
            <Square
              className="square"
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
            />
            <Square
              className="square"
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
            />
            <Square
              className="square"
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
            />
          </div>
          <div className="board-row">
            <Square
              className="square"
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
            />
            <Square
              className="square"
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
            />
            <Square
              className="square"
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
            />
          </div>
        </div>

        <button className="Reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[b] === squares[c] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}
