import "./App.css"
import Board from "./components/Board"
import React, { useState } from 'react';
function App() {

  const[history, setHistory] = useState([
    {squares: Array(9).fill(null)}
  ])
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  // const current = history[history.length - 1];
  const current = history[stepNumber];

  //질문
  //컴포넌트가 하나 변경되면 app에있는게 다 한바퀴돌면서
  //관련 내용도 업데이트가 되는건가?

  const calculateWInner =(squares) =>{
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (
            squares[a] 
            && squares[a] === squares[b] 
            && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
  }
 
  const winner= calculateWInner(current.squares);
  let status;
  if(winner) {
      status = 'Winner: '+winner;
  } else {
      status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }


  const handleClick = (i) => {
    //slice할때 end index는 exclusive하다.
    const newHistory = history.slice(0, stepNumber +1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();
    
    if (calculateWInner(newSquares)||newSquares[i]){
        return;
    }
    
    newSquares[i] = xIsNext ?'X' : 'O';
    //전개 연산자를 사용하면 복사해서 history가 생성 됨.

    setHistory([...newHistory, { squares : newSquares }]);
    setXIsNext(prev=> !prev);

    setStepNumber(newHistory.length);
    // setXIsNext(!xIsNext);
  }

  
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }
  // 0은 false이다.
  //step : values, mov : index
  const moves = history.map((step, move) => {
    const desc = move ?
    'Go to move #' + move :
    'Go to game start';
    return (
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

 

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={current.squares} 
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        gameinfo
        <div className="status">{status}</div>
        <ol style={{listStyle: 'none'}}>{moves}</ol>
      </div>  
    </div>
  );
}

export default App;
