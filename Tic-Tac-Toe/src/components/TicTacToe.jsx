import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'
import { useState } from "react"

let data = ["", "", "", "", "", "", "", "", ""]

export default function TicTacToe() {

  const [count, setCount] = useState(0)
  const [lock, setLock] = useState(false)
  const [winner, setWinner] = useState("O")

  const toggle = (e, num) => {
    if (lock) return 0;

    if (count%2==0) {
      e.target.innerHTML = `<img src = ${circle_icon} alt="circle.png" />`
      data[num] = 'O'
    }
    else {
      e.target.innerHTML = `<img src = ${cross_icon} alt="cross.png" />`
      data[num] = 'X'
    }
    setCount(count + 1)
    checkWin()
  }

  const checkWin = () => {
    for (let i=0;i<7;i+=3)
      if(data[i] === data[i+1] && data[i+1] === data[i+2] && data[i+2] != "")
        win(data[i])

    for (let i = 0; i < 3; i++)
      if (data[i] === data[i + 3] && data[i + 3] === data[i + 6] && data[i + 6] != "")
        win(data[i])

    if (data[0] === data[4] && data[4] === data[8] && data[8] != "")
      win(data[0])
    if (data[2] === data[4] && data[4] === data[6] && data[6] != "")
      win(data[2])
  }

  const win = (player) => {
    setLock(true)
    if (player != winner) setWinner("X")
  }

  const handleReset = () => {
    window.location.reload()
  }


  return (
    <div className="container">
      {
        lock ? 
        <h1 className="title">Winner Player 
        <span className={winner === "X" ? "gold" : "blue"}>{winner}</span></h1> :
        <h1 className="title">Tic Tac Toe </h1>
      }
      

      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => {toggle(e,0)}}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
        </div>
      </div>

      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
