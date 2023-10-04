import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Success from './pages/Success'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/success' element={<Success />} />
      </Routes>
    </>
  )
}

export default App