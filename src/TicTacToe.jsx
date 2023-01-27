import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null]);

  const [isXTurn, setIsXTurn] = useState(true);

  const  handClick = (index) => {
    console.log(index);
    // if no winner && if its untouched - allow update
    if (!winner && board[index] === null) {
      const boardCopy = [...board];// copy
      boardCopy[index] = isXTurn ? "X" : "O";// set
    setBoard(boardCopy); // set
    // Toggle / Alternate turn
    setIsXTurn(!isXTurn);

    }
    //const boardCopy = [...board];// copy
    //boardCopy[index] = isXTurn ? "X" : "O";// set
    //setBoard(boardCopy); // set
    // Toggle / Alternate turn
    //setIsXTurn(!isXTurn);
  };

  const decideWinner = (board) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for ( let i=0; i< lines.length;i++){
      const[a,b,c] = lines[i];
      if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  return (
    <div className="tic-tac-toe">
      {winner ? <Confetti width={width} height={height} gravity={0.02}/> : null}
      <h2>TicTacToe Game</h2>
      <div className = "board">
        {board.map((val, index) => 
          (<GameBox val={val} onPlayerClick={() => handClick(index)}/>
        ))};
      </div>
      <h1>The winner is: {winner} </h1>
    </div>
  );
}

// X → Green | O → Red
function GameBox({val, onPlayerClick}) {
  //const [val, setVal] = useState("");
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div style={styles} onClick={onPlayerClick} className="game-box">
      {/*<div style={styles} onClick={() = handClick(index)} className="game-box"*/}
      {val}
    </div>
  )
}