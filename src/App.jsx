import { useEffect } from 'react'
import React from 'react'
import Navbar from './Navbar'
import Home1 from './Home1'
import About from './About'
import Project from './Project'
import Input from './Input'
import './css/global.css'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Home1 id="home"/>
      <About id="about"/>  
      <Project id="projects"/>
      <Input id="contact"/>
      <Footer/>
      <ToastContainer position="top-right" theme="dark" pauseOnHover="true"/>
    </BrowserRouter>
  )
}

export default App
