  import React from 'react'
  import ReactDom from 'react-dom'
  import home1 from './css/home1.module.css'
  import TypingEffect from './TypingEffect'
  import { useState } from 'react'
  import { Link } from 'react-scroll'

  import html_img from '/public/vecteezy_the-html5-logo-with-the-number-5-in-the-center_66386005.png'
  import css_img from '/public/vecteezy_the-css-logo-icon_66386006.png'
  import js_img from '/public/js-removebg-preview.png'
  import react_img from '/public/react-removebg-preview.png'
  import py_img from '/public/vecteezy_python-icon-transparent-background_48332144.png'
  import django_img from '/public/django-removebg-preview.png'
  import db_img from '/public/db-removebg-preview.png'

  // import imd from '/public/107fbd2c-efca-4a98-9bf6-b3ff68b53ccf-removebg-preview.png'

  
  function Nav(props){
    
    return(
      ReactDom.createPortal(
        <>
        <div className={props.mode ? `${home1.navbarDark} ${home1.navbar}` : home1.navbar} >
        <ul className={home1 .ul}>
          <li className={home1 .li1}><Link to="home" smooth={true} duration={600}><h1>𝑷𝒓𝒐𝒋𝒆𝒄𝒕 𝑨𝒖𝒓𝒂</h1></Link></li>

          <li className={home1 .li2}>
          <Link to="about" smooth={true} duration={600}>About</Link>
          </li>

          <li className={home1 .li3}>
          <Link to="projects" smooth={true} duration={600}>Projects</Link>
          </li>

          <li className={home1 .li4}>
          <Link to="contact" smooth={true} duration={600}>Contact</Link>
          </li>
          <li className={home1 .li5}><button onClick={props.data}>{props.mode ? "🌙" : '🔦'}</button></li>
        </ul>
        
        </div>
        </>,document.getElementById("nav")
      )
    )
  }



  const Home1 = () => {
    let [theam,settheam] = useState(false)

    let theams = () => {
      const newTheme = !theam;  // the toggled value
      document.body.style.background = newTheme ? 'black' : 'white'; 
      document.body.style.color = newTheme ? 'white' : 'black'; 
      settheam(newTheme);
    }

    const navmail = () => {
      const email = "mohamedfazil.a025@gmail.com"; // use a valid email
      const subject = "Job Opportunity";
      const body = "Hello Fazil,I would like to discuss..."; // <-- define body here
    
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      const isMobile = /android|iphone|ipad|ipod/i.test(ua);
  
      if (isMobile) {
        // Mobile: open native mail app
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      } else {
        // Desktop: open Gmail web in same tab
        window.location.href = 
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
      
    };

    

    return (
      
      <>
      <Nav data = {theams} mode={theam}/>
      <article id='home' className={home1 .page1}>
      <section className={home1 .sec1}>
        <h3>🔻India Tamil Nadu</h3>
        <h1><TypingEffect text='MOHAMED FAZIL A'/></h1>
        <button onClick={navmail}>Hire Me</button>
      </section>
      <section className={home1 .sec2}>
      <img src={html_img} alt=""
        className={home1 .animateUpDown1}/>
      <img src={css_img} alt="" className={home1 .animateUpDown2}/>
      <img src={js_img} alt="" className={home1 .animateUpDown3} />
      <img src={react_img} alt="" className={home1 .animateUpDown4} />
      </section>
      <section className={home1 .sec3}>
        <img src={py_img} alt=""
        className={home1 .animateUpDown5}  />
        <img src={django_img} alt="" className={home1 .animateUpDown6} />
        <img src={db_img} alt="" className={home1 .animateUpDown7}  />
      </section>
      <section className={home1 .sec4} >
        <h1><TypingEffect text="Full-Stack Developer specializing in Python and React, fueled by passion and curiosity. As a fresher, I bring fresh ideas and the drive to build clean, functional, and user-friendly applications."/></h1>
      </section>
      </article>
      </>
    )
  }

  export default Home1

