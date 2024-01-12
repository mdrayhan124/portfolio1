import React from 'react'
import Home from './pages/Home'
import Services from './Services'

const App = () => {
  return (
    <>
    <Home/>
    <section id='services' className=' h-[100vh] snap-center font-popins'><Services/></section>
    <section id='services' className=' h-[100vh] snap-center font-popins'>prallax</section>
    <section id='about' className=' h-[100vh] snap-center'>about</section>
    <section id='contact' className=' h-[100vh] snap-center'>contact</section>
    </>
  )
}

export default App