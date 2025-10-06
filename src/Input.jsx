import React, { useState , useRef} from 'react'
import input from './css/input.module.css'
import emailjs from '@emailjs/browser'

// ----------------------images-----------------------------------------//

import gmail from '/public/email.png'
import linkedin from '/public/linkedin.png'
import github from '/public/github.png'
import phone from '/public/phone.png'

// -----------------------toastify-----------------------------------------//

import { toast } from 'react-toastify'

const Input = () => {

  let [show,setshow] = useState("")

  const inpmail = () => {
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

// -----------------------------------------------------------------------------------------
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bofssma', 'template_kl8n2z5', form.current, {
        publicKey: 'ADsFyLkkeA3CAy1Hz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("SUCCESS!")

          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("!ERROR")
        },
      );
  };
  return (
    <>
    <div id="contact" className={input .i_parent}>
      <section className={input .i_sec}>
      <h1>Contact Me</h1>
      </section>
    <div className={input .i_sec_parent}>
      <section className={input .i_sec1}>

        <img src={linkedin}
         alt="linkedin" 
         className={input .imgs}
         onClick={()=>setshow(show === "link" ? "" : "link" )}/>
        {show==="link" && <a href='https://www.linkedin.com/in/mohamed-fazil-a37687349/'>Vist Linked-In</a>}

        <img src={gmail} 
        alt="email" className={input .imgs} 
        onClick={()=>setshow(show === "email" ? "" : 'email')}/>
        {show==='email' && <a onClick={inpmail}>Email</a>  }

        <img src={github} 
        alt="github" 
        className={input .imgs}
        onClick={()=>setshow(show === "git" ? "" : "git")}/>
        
        {show==="git" && <a href='https://github.com/fazil097/project' style={{textDecoration:'none',fontSize:'20px'}}>Vist GitHub</a>}

        <img src={phone} 
        alt="phone" 
        className={input .imgs} 
        onClick={()=>setshow(show === "phone" ? "" : "phone")}/>
        {show==='phone' && <p>+91 90434-24128</p>}
      </section>

        <section className={input .i_sec2}>
        <form className={input .i_sec2_child} ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" placeholder='Enter Name....' name="user_name"/>
        <label>Email</label>
        <input type="email" placeholder='Enter Email....'name="user_email"/>
        <label>Message😉</label>
        <textarea  placeholder='Type Messages....' name="user_message"/>
        <button type="submit" value="send">Submit</button>
        </form>
        </section>
    </div>
    </div>
    </>
  )
}

export default Input
