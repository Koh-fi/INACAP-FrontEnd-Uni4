import React from 'react'
import './App.css'
import Contador from './components/state'
import Saludo from './components/saludo'
import Boton from './components/events'
import contadorConEfecto from './components/ciclo'

function App() {
  

  return (
    <>
      {Saludo(<Saludo nombre="Mundo"/>)}
      {Contador()}
      {Boton()}
      {contadorConEfecto()}
    </>
  )
}

export default App
