import React from 'react'
import Header from './components/header/Header.js'
import Nav from './components/nav/Nav.js'
import About from './components/about/About.js'
import Experience from './components/experience/Experience.js'
import Services from './components/services/Services.js'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

    </>
  )
}

export default App