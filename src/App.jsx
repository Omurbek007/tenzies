import { useState } from 'react'
import Die from './Die'
import './App.css'

function App() {

  function generateNum () {
    return new Array(10)
    .fill()
    .map(() => Math.ceil(Math.random() * 6))
  }
  console.log(generateNum())

  return (
    <>
      <main>
        <div className="btn-container">
          <Die getNum={generateNum} value={0}/>
      <Die value={1}/>
      <Die value={2}/>
      <Die value={3}/>
      <Die value={4}/>
      <Die value={5}/>
      <Die value={6}/>
      <Die value={1}/>
      <Die value={1}/>
      <Die value={1}/>
        </div>
      
      </main>
    </>
  )
}

export default App
