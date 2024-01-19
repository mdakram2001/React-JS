import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    console.log("clicked")
    if(counter<20){
      counter = counter + 1
      setCounter(counter)
    }
  }

  const removeValue = () =>{
    console.log("clicked")
    if(counter>0){
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Counter with React</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
