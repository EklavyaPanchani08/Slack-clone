import React from 'react'
import Routes from './Router/routes'
import { useStateValue } from "./StateProvider"
const App = () => {

  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='container'>
      <Routes user={"eklavya"}/>
    </div>
  )
}

export default App
