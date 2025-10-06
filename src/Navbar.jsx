import React, { useState } from 'react'
import navbar from './css/navbar.module.css'
import phnav from '/public/hamburger_menu_navbar_options_icon_196495.png'
import { Link } from 'react-scroll'


const Navbar = () => {
    let [open,setopen] = useState(false)
    
  return (
    <>
    <div className={navbar .n_parent}>
      <section className={navbar .n_sec_parent}>
      <Link to="home" smooth={true} duration={600}><h1>𝑷𝒓𝒐𝒋𝒆𝒄𝒕 𝑨𝒖𝒓𝒂</h1></Link>
      <img src={phnav}
           className={navbar .menu_icon} 
           onClick={()=> setopen(!open)}/>
      </section>

      <nav className={`${navbar.nav_link} ${open ? navbar.show : ''}`}>
        <Link to="about" smooth={true} duration={600} onClick={() => setopen(false)}>About</Link>
        
        <Link to="project" smooth={true} duration={600} onClick={() => setopen(false)}>Project</Link>

        <Link to="contact" smooth={true} duration={600} onClick={() => setopen(false)}>Contact</Link>
      </nav>
           
    </div>
    </>
  )
}

export default Navbar
