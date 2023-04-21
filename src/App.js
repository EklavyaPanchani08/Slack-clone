import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Routes from './Router/routes'

const App = () => {
  return (
    <div className='container'>
      <Header />
        <Slider />
        <Routes />
    </div>
  )
}

export default App
