import { Row } from 'antd'
import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Routes from './Router/routes'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Row style={{ height: "100%" }}>
        <Slider />
        <Routes />
      </Row>
    </div>
  )
}

export default App
