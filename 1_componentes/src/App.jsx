//componente pai
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Importando componente
import FunctionalCompenent from './components/FunctionalCompenent';
import ClassComponent from './components/ClassComponent';
import PropsExemple from './components/PropsExemple';

function App() {
  
  return (
    <>
      <h1>Olá Mundo React</h1>
      {/* Utilizando o componente importado do JSX */}
      <FunctionalCompenent/>
      <ClassComponent/>
      <PropsExemple nome="Jadson" idade={39}/>

    </>
  )
}

export default App
