import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hijo from './component/Hijo'

function App() {
  const textSecret= "no lo creo, jujuuu"

  return (
    <div className="App">
      <div>
        <h1>Hola MUNDOOO</h1>
        <Hijo textSecret={textSecret}></Hijo>
        <Hijo textSecret={textSecret}></Hijo>
        <Hijo textSecret={textSecret}></Hijo>
        <Hijo textSecret={textSecret}></Hijo>
      </div>
      
    </div>
  )
}

export default App
