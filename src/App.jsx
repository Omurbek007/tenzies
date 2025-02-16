import { useEffect, useState , useRef} from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './Die'
import './App.css'




function App() {
  
  
    
  const [dice, setDice] = useState(()=>generateNum())
  const buttonRef = useRef(null)
console.log(buttonRef)

  function newGame() {
    setDice(generateNum())
  }

  useEffect(() => {
    if (gameWon) {
    buttonRef.current.focus()
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
    setDice(prevDice => prevDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die ))
  }

  return (
    <>
      <main>
      {gameWon && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="btn-container">
          {dice.map((el) => <Die key={el.id} hold={() => hold(el.id)} isHeld={el.isHeld} dice={el.value} />)}
        </div>
        <button className='roll-btn' ref={buttonRef} onClick={!gameWon ? rollDice : newGame}>{gameWon ? "New Game" : "Roll"}</button>

      </main>
    </>
  )
}

export default App
