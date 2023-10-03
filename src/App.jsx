import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurMission from './components/OurMission'
import OurVision from './components/OurVision'
const App = () => {
  return (
    <section className='overflow-hidden'>
      <Navbar />
      <Hero />
      <OurMission />
      <OurVision />
    </section>
  )
}

export default App