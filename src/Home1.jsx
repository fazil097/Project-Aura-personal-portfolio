  import React from 'react'
  import ReactDom from 'react-dom'
  import home1 from './css/home1.module.css'
  import TypingEffect from './TypingEffect'
  import { useState } from 'react'
  import { Link } from 'react-scroll'


  // import imd from '/public/107fbd2c-efca-4a98-9bf6-b3ff68b53ccf-removebg-preview.png'

  
  function Nav(props){
    
    return(
      ReactDom.createPortal(
        <>
        <div className={props.mode ? `${home1.navbarDark} ${home1.navbar}` : home1.navbar} >
        <ul className={home1 .ul}>
          <li className={home1 .li1}><Link to="home" smooth={true} duration={600}><h1>Ᵽɍøɉɇȼŧ ȺᵾɍȺ</h1></Link></li>

          <li className={home1 .li2}>
          <Link to="about" smooth={true} duration={600}>About</Link>
          </li>

          <li className={home1 .li3}>
          <Link to="project" smooth={true} duration={600}>Projects</Link>
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
      const body = "Hello Fazil,%0D%0A%0D%0AI would like to discuss..."; // <-- define body here
    
      // Try system mail client first
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
      // Fallback to Gmail after 500ms
      setTimeout(() => {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${body}`,
          "_blank"
        );
      }, 500);
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
      <img src="/public/vecteezy_the-css-logo-icon_66386006.png" alt=""
        className={home1 .animateUpDown1}/>
      <img src="/public/vecteezy_the-html5-logo-with-the-number-5-in-the-center_66386005.png" alt="" className={home1 .animateUpDown2}/>
      <img src="/public/js-removebg-preview.png" alt="" className={home1 .animateUpDown3} />
      <img src="/public/react-removebg-preview.png" alt="" className={home1 .animateUpDown4} />
      </section>
      <section className={home1 .sec3}>
        <img src="/public/vecteezy_python-icon-transparent-background_48332144.png" alt=""
        className={home1 .animateUpDown5}  />
        <img src="/public/django-removebg-preview.png" alt="" className={home1 .animateUpDown6} />
        <img src="/public/db-removebg-preview.png" alt="" className={home1 .animateUpDown7}  />
      </section>
      <section className={home1 .sec4} >
        <h1><TypingEffect text="Full-Stack Developer specializing in Python and React, fueled by passion and curiosity. As a fresher, I bring fresh ideas and the drive to build clean, functional, and user-friendly applications."/></h1>
      </section>
      </article>
      </>
    )
  }

  export default Home1

