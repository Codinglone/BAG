import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurMission from './components/OurMission'

const App = () => {
  return (
    <section className='overflow-hidden'>
      <Navbar />
      <Hero />
      <OurMission />
    </section>
  )
}

export default App