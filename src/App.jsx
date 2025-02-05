import { useState } from 'react'
import Die from './Die'
import './App.css'

function App() {
  const [count, setCount] = useState([0,1,2,3,4,5,6,7,8,9])

  return (
    <>
      <main>
      <Die value={count}/>
      <Die value={count}/>
      <Die value={count}/>
      <Die value={count}/>
      <Die value={count}/>
      <Die value={count}/>
      <Die value={count}/>
      <Die value={count}/>
      <Die value={count}/>
      <Die value={count}/>
      </main>
    </>
  )
}

export default App
