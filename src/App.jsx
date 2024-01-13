import React from 'react'
import Home from './pages/Home'
import Services from './Services'
import About from './About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Home/>
    <section id='services' className=' lg:h-[100vh] md:snap-center font-popins'><Services/></section>
    <section id='contact' className=' lg:h-[100vh] md:snap-center'><Contact/></section>
    <section id='about' className=' md:h-[100vh] md:snap-center'><About/></section>
    </>
  )
}

export default App