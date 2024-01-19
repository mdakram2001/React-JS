import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Card tagline="People who are in Charge of it!"/>
      <Card tagline="Changer of the community!"/>

    </>
  )
}

export default App
