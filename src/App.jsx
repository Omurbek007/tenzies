import { useEffect, useState, useRef } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './Die'
import './App.css'




function App() {


  const [dice, setDice] = useState(() => generateNum())
  const [time, setTime] = useState(0)
  const buttonRef = useRef(null)
  const timeRef = useRef(null)

  function startGame() {
    if (time === 0)
      timeRef.current = setInterval(() => setTime(prevTime => prevTime + 1), 1000)
  }

  function newGame() {
    setDice(generateNum())
    setTime(0)
  }

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus()
      clearInterval(timeRef.current)
    }
  }, [newGame])

  function generateNum() {
    return new Array(10)
      .fill()
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }))
  }

  const gameWon = dice.every(die => die.value === dice[0].value) && dice.every(die => die.isHeld)

  function rollDice() {
    setDice(prevDice => prevDice.map(die => die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }))
  }


  function hold(id) {
    setDice(prevDice => prevDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die))
  }

  const wonStyle = {
    color: "rgb(255, 100, 100)",
    fontSize: "2.5rem",
    transition: "all 0.5s ease-in-out"
  }

  const wonText = "You Did in " + time + " seconds"

  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <h2 style={gameWon ? wonStyle : {color:"rgb(41, 86, 41)"}}>{gameWon ? wonText : time}</h2>
        <button onClick={startGame} className='timer'>Start Timer</button>
        <div className="btn-container">
          {dice.map((el) => <Die key={el.id} hold={() => hold(el.id)} isHeld={el.isHeld} dice={el.value} />)}
        </div>
        <button className='roll-btn' ref={buttonRef} onClick={!gameWon ? rollDice : newGame}>{gameWon ? "New Game" : "Roll"}</button>
      </main>
    </>
  )
}

export default App
