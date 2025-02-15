import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './Die'
import './App.css'




function App() {
  
  
    
  const [dice, setDice] = useState(generateNum())

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
      console.log(gameWon)

  function rollDice() {
    setDice(prevDice => prevDice.map(die => die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }))
}


  function hold(id) {
    setDice(prevDice => prevDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die ))
  }

  return (
    <>
      <main>
      {gameWon && <Confetti
      width={1200}
      height={800}
    />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="btn-container">
          {dice.map((el) => <Die key={el.id} hold={() => hold(el.id)} isHeld={el.isHeld} dice={el.value} />)}
        </div>
        <button className='roll-btn' onClick={rollDice}>{gameWon ? "New game" : "Roll"}</button>

      </main>
    </>
  )
}

export default App
